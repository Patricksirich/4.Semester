package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;
import android.graphics.Color;

import java.util.Random;

public class TestScreen extends Screen
{
    int x = 0;
    int y = 0;
    Bitmap bitmap;

    protected TestScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        bitmap = gameEngine.loadBitmap("bob.png");
    }

    @Override
    public void update(float deltaTime)
    {
//        if (gameEngine.isTouchDown(0))
//        {
//            x = gameEngine.getTouchX(0);
//            y = gameEngine.getTouchY(0);
//        }

        float x = gameEngine.getAccelerometer()[0];
        float y = gameEngine.getAccelerometer()[1];
        x = gameEngine.getFrameBufferWidth()/2 + (x * gameEngine.getFrameBufferWidth()/2);
        y = gameEngine.getFrameBufferHeight()/2 + (y * gameEngine.getFrameBufferHeight()/2);

        gameEngine.clearFrameBuffer(Color.BLUE);
        gameEngine.drawBitmap(bitmap, (int) x-64, (int) y-64);
        gameEngine.drawBitmap(bitmap, 200, 300, 0, 0, 64, 64);
    }

    @Override
    public void pause()
    {

    }

    @Override
    public void resume()
    {

    }

    @Override
    public void dispose()
    {

    }
}
