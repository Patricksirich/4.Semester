package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.graphics.Color;
import android.graphics.Rect;
import android.support.constraint.solver.widgets.Rectangle;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.text.method.Touch;
import android.util.Log;
import android.view.SurfaceHolder;
import android.view.SurfaceView;
import android.view.Window;
import android.view.WindowManager;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.io.InputStream;

public abstract class GameEngine extends AppCompatActivity implements Runnable
{
    private Thread mainLoopThread;
    private State state = State.Paused;
    private List<State> stateChanges = new ArrayList<>();
    private SurfaceView surfaceView;
    private SurfaceHolder surfaceHolder;
    private Canvas canvas = null;
    private Screen screen = null;
    private Bitmap offscreenSurface;
    private MultiTouchHandler touchHandler;
    private TouchEventPool touchEventPool = new TouchEventPool();
    private List<TouchEvent> touchEventBuffer = new ArrayList<>();
    private List<TouchEvent> touchEventCopied = new ArrayList<>();
    public abstract Screen createStartScreen();

    public void setScreen(Screen screen)
    {
    }

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        requestWindowFeature(Window.FEATURE_NO_TITLE);
        this.getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN |
                WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        surfaceView = new SurfaceView(this);
        setContentView(surfaceView);
        surfaceHolder = surfaceView.getHolder();
        //Log.d("GameEngine class", "We just finished the onCreate() method");
        screen = createStartScreen();
        if (surfaceView.getWidth() > surfaceView.getHeight())
        {
            setOffscreenSurface(480, 320);
        }
        else
        {
            setOffscreenSurface(320, 480);
        }
        touchHandler = new MultiTouchHandler(surfaceView);

    }

    public void setOffscreenSurface(int width, int height)
    {
        if (offscreenSurface != null) offscreenSurface.recycle();
        offscreenSurface = Bitmap.createBitmap(width, height, Bitmap.Config.RGB_565);
        canvas = new Canvas(offscreenSurface);
    }

    public int getFramebufferWidth()
    {
        return offscreenSurface.getWidth();
    }

    public int getFrameBufferHeigth()
    {
        return offscreenSurface.getHeight();
    }

    public Bitmap loadBitmap(String fileName)
    {
        InputStream in = null;
        Bitmap bitmap = null;
        try
        {
            in = getAssets().open(fileName);
            bitmap = BitmapFactory.decodeStream(in);
            if (bitmap == null)
            {
                throw new RuntimeException("Could not load bitmap from file: " + fileName + " crap!!!");
            }
            return bitmap;
        }
        catch (IOException IOE)
        {
            throw new RuntimeException("Could not load bitmap from asset: " + fileName);
        }
        finally
        {
            if (in != null)
            {
                try
                {
                    in.close();
                }
                catch (IOException ioe)
                {
                    throw new RuntimeException("Could not close the file: " + fileName);
                }
            }
        }
    }

    public void clearFrameBuffer(int color)
    {
        canvas.drawColor(Color.BLUE);
    }

    public void drawBitmap(Bitmap bitmap, int x, int y)
    {
        if (canvas != null) canvas.drawBitmap(bitmap, x, y, null);
    }
    Rect src  = new Rect();
    Rect dst = new Rect();
    public void drawBitmap (Bitmap bitmap, int x, int y, int srcX, int srcY, int srcWidth, int srcHeight)
    {
        if(canvas == null) return;

        src.left = srcX;
        src.top = srcY;
        src.right = srcX + srcWidth;
        src.bottom = srcY + srcHeight;

        dst.left = x;
        dst.top = y;
        dst.right = x + srcWidth;
        dst.bottom = y + srcHeight;

        canvas.drawBitmap(bitmap, src, dst, null);
    }

    public boolean isTouchDown(int pointer)
    {

        return false;
    }

    public int getTouchX(int pointer)
    {
        return 0;
    }

    public int getTouchY(int pointer)
    {
        return 0;
    }


    public void run()
    {
        while (true)
        {
            synchronized (stateChanges)
            {
                for (int i = 0; i < stateChanges.size(); i++)
                {
                    state = stateChanges.get(i);
                    if (state == State.Disposed)
                    {
                        Log.d("GameEngine", "state changed to Disposed");
                        return;
                    }
                    if (state == State.Paused)
                    {
                        Log.d("GameEngine", "state changed to Paused");
                        return;
                    }
                    if (state == State.Resumed)
                    {
                        Log.d("GameEngine", "state changed to Resumed");
                        state = State.Running;
                    }
                }
                stateChanges.clear();

                if (state == State.Running)
                {
                    Log.d("GameEngine", "State is Running");
                    if (!surfaceHolder.getSurface().isValid())
                    {
                        continue;
                    }
                    Log.d("GameEngine", "Ok, we are trying to get a Canvas object");
                    Canvas canvas = surfaceHolder.lockCanvas();
                    //All the drawing code should happen here
                    //canvas.drawColor(Color.BLUE);
                    if (screen != null) screen.update(0);
                    src.left = 0;
                    src.top = 0;
                    src.right = offscreenSurface.getWidth(); // or maybe with minus 1
                    src.bottom = offscreenSurface.getHeight();
                    dst.left = 0;
                    dst.top = 0;
                    dst.right = surfaceView.getWidth();
                    dst.bottom = surfaceView.getHeight();
                    canvas.drawBitmap(offscreenSurface, src, dst, null);
                    surfaceHolder.unlockCanvasAndPost(canvas);

                }
            }
        } //End of while
    }

    public void onPause()
    {
        super.onPause();
        synchronized (stateChanges)
        {
            if (isFinishing())
            {
                stateChanges.add(stateChanges.size(), State.Disposed);
            } else
            {
                stateChanges.add(stateChanges.size(), State.Paused);
            }
        }
    }

    public void onResume()
    {
        super.onResume();
        mainLoopThread = new Thread(this);
        mainLoopThread.start();
        synchronized (stateChanges)
        {
            stateChanges.add(stateChanges.size(), State.Resumed);
        }
    }
}
