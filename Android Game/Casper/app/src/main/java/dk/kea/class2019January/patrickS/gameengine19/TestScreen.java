package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.util.Log;

import java.util.Random;

public class TestScreen extends Screen
{
    float x = 0;
    float y = 240;
    Bitmap bitmap;
    Sound sound;
    Music backgroundMusic;
    boolean isPlaying = false;


    protected TestScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        bitmap = gameEngine.loadBitmap("bob.png");
        sound = gameEngine.loadSound("blocksplosion.wav");
        backgroundMusic = gameEngine.loadMusic("music.ogg");
        isPlaying = true;

    }

    @Override
    public void update(float deltaTime)
    {
        Log.d("TestScreen", "FPS: " + gameEngine.getFramesPerSecond());
        gameEngine.clearFrameBuffer(Color.GREEN);

        x = x + 50 * deltaTime;
        if (x > 320 + bitmap.getWidth())x = 0 - bitmap.getWidth();

        if (gameEngine.isTouchDown(0))
        {
            x = gameEngine.getTouchX(0);
            y = gameEngine.getTouchY(0);
            sound.play(1);
            if (backgroundMusic.isPlaying())
            {
                backgroundMusic.pause();
                isPlaying = false;
            }
            else
            {
                backgroundMusic.play();
                isPlaying = true;
            }
        }

        /*float x = gameEngine.getAccelerometer()[0];
        float y = -1 * gameEngine.getAccelerometer()[1];
        x = gameEngine.getFramebufferWidth()/2 + ((x/10) * gameEngine.getFramebufferWidth()/2);
        y = gameEngine.getFrameBufferHeigth()/2 + ((y/10) * gameEngine.getFrameBufferHeigth()/2);
        */
        gameEngine.drawBitmap(bitmap, (int)x-64, (int)y-64);
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
