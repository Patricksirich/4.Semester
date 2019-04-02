package dk.kea.class2019January.patrickS.gameengine19.Carscroller;

import android.graphics.Bitmap;
import android.util.Log;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;
import dk.kea.class2019January.patrickS.gameengine19.Sound;

public class GameScreen extends Screen
{
    enum State
    {
        Paused,
        Running,
        GameOver
    }

    Bitmap background = null;
    float backgroundX = 0;
    Bitmap resume = null;
    Bitmap gameOver = null;
    Sound bounce = null;
    Sound crash = null;
    Sound gameOverSound = null;

    World world = null;
    WorldRenderer renderer = null;
    State state = State.Running;

    public GameScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        Log.d("Carscroller", "Starting the GameScreen");

        background = gameEngine.loadBitmap("carscroller/xcarbackground.png");
        resume = gameEngine.loadBitmap("carscroller/resume.png");
        gameOver = gameEngine.loadBitmap("carscroller/gameover.png");
        bounce = gameEngine.loadSound("carscroller/bounce.wav");
        crash = gameEngine.loadSound("carscroller/blocksplosion.wav");
        gameOverSound = gameEngine.loadSound("carscroller/gameover.wav");

        world = new World(gameEngine, new CollisionListener()
        {
            @Override
            public void collisionRoadside()
            {
                bounce.play(1);
            }

            @Override
            public void collisionMonster()
            {
                crash.play(1);
            }

            @Override
            public void gameover()
            {
                gameOverSound.play(1);
            }
        });
        renderer = new WorldRenderer(gameEngine, world);
    }


    @Override
    public void update(float deltaTime)
    {
        if (state == State.Running)
        {
            backgroundX = backgroundX + 100 * deltaTime;
            if(backgroundX > 2700-480)
            {
                backgroundX = 0;
            }
        }

        gameEngine.drawBitmap(background, 0, 0, (int)backgroundX, 0, 480, 320);
        world.update(deltaTime, gameEngine.getAccelerometer()[1]);
        renderer.render();

    }

    @Override
    public void pause()
    {
        if (state == State.Running) state = State.Paused;
        gameEngine.music.pause();
    }

    @Override
    public void resume()
    {
        gameEngine.music.play();
    }

    @Override
    public void dispose()
    {

    }
}
