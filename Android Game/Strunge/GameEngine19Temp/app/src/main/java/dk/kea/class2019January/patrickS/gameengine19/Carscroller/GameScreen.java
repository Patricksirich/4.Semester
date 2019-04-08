package dk.kea.class2019January.patrickS.gameengine19.Carscroller;

import android.graphics.Bitmap;
import android.util.Log;


import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;
import dk.kea.class2019January.patrickS.gameengine19.Sound;
import dk.kea.class2019January.patrickS.gameengine19.TouchEvent;

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
    Sound gameoverSound = null;

    World world = null;
    WorldRenderer renderer = null;

    State state = State.Running;

    public GameScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        Log.d("Carscroller", "Starting the Gamescreen");

        background = gameEngine.loadBitmap("Carscroller/xcarbackground.png");
        resume = gameEngine.loadBitmap("Carscroller/resume.png");
        gameOver = gameEngine.loadBitmap("Carscroller/gameover.png");
        bounce = gameEngine.loadSound("Carscroller/bounce.wav");
        crash = gameEngine.loadSound("Carscroller/blocksplosion.wav");
        gameoverSound = gameEngine.loadSound("Carscroller/gameover.wav");

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
            public void gameOver()
            {
                gameoverSound.play(1);
            }
        });
        renderer = new WorldRenderer(gameEngine, world);
    }

    @Override
    public void update(float deltaTime)
    {
        if (world.gameOver)
        {
            state = State.GameOver;
        }

        if (state == State.Paused && gameEngine.getTouchEvents().size() > 0)
        {
            Log.d("GameScreen", "Starting th game again (from paused):");
            state = State.Running;
            resume();
        }

        if (state == State.GameOver)
        {
            Log.d("GameScreen", "Game Over.");
            List<TouchEvent> events = gameEngine.getTouchEvents();
            for (int i = 0; i < events.size(); i++)
            {
                if (events.get(i).type == TouchEvent.TouchEventType.Up)
                {
                    gameEngine.setScreen(new MainMenuScreen(gameEngine));
                    return;
                }
            }
        }
        if (state == State.Running && gameEngine.getTouchY(0) < 40 && gameEngine.getTouchX(0) > 320 - 40)
        {
            Log.d("GameScreen", "Pausing the game");
            state = State.Paused;
            pause();
//            return; // Maybe don't draw anymore
        }

        if (state == State.Running)
        {
            backgroundX = backgroundX + 100 * deltaTime;
            if (backgroundX > 2700 - 480)
            {
                backgroundX = 0;
            }
//            Update the game objects
            world.update(deltaTime, gameEngine.getAccelerometer()[1]);
        }
//        Draw background no matte what state
        gameEngine.drawBitmap(background, 0, 0, (int) backgroundX, 0, 480, 320);
//        Draw game object no matter what state
        renderer.render();

        if (state == State.Paused)
        {
            gameEngine.drawBitmap(resume, 240 - resume.getWidth() / 2, 160 - resume.getHeight() / 2);
        }

        if (state == State.GameOver)
        {
            gameEngine.drawBitmap(gameOver, 240 - gameOver.getWidth() / 2, 160 - gameOver.getHeight() / 2);
        }


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
