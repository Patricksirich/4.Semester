package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;

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

    GameScreen.State state = GameScreen.State.Running;
    Bitmap background;
    Bitmap resume;
    Bitmap gameOver;
    Bitmap quit;

    String showText;
    Typeface font;

    Sound bounceSound;

    World world;
    WorldRenderer renderer;

    public GameScreen(GameEngine gameEngine) // constructor
    {
        super(gameEngine);
        background = gameEngine.loadBitmap("spacex/bg.png");    // game bg
        resume = gameEngine.loadBitmap("spacex/resume.png");    // resume button
        gameOver = gameEngine.loadBitmap("spacex/gameover.png");    // game over button
        quit = gameEngine.loadBitmap("spacex/quit.png");        // quit button

        font = gameEngine.loadFont("breakout/font.ttf");        // type of font we use for lives, points and level
        bounceSound = gameEngine.loadSound("breakout/bounce.wav");  // sound played when projectile hits enemy

        world = new World(new CollisionListener()
        {
            @Override   // override method from interface
            public void collisionEnemy()
            {
                bounceSound.play(1);
            }
        });
        renderer = new WorldRenderer(gameEngine, world);
    }

    @Override
    public void update(float deltaTime)
    {
        gameEngine.drawBitmap(background, 0, 0);

        if (world.lostLife)                         // if we lost a life, pause the game
        {
            state = GameScreen.State.Paused;
            world.lostLife = false;                 // change to false so we don't get stuck
        }
        if (world.gameOver)                         // if all lives are lost, change state to gameover
        {
            state = GameScreen.State.GameOver;
        }

        if (state == GameScreen.State.GameOver)     // if state is gameover
        {
            List<TouchEvent> events = gameEngine.getTouchEvents();
            for (int i = 0; i < events.size(); i++)
            {
                if (events.get(i).type == TouchEvent.TouchEventType.Up) // when user lifts their finger
                {
                    gameEngine.setScreen(new CreditScreen(gameEngine)); // end game and change to credit screen
                    return;
                }
            }
        } // if state is running and the user clicks on pause button
        if (state == GameScreen.State.Running && gameEngine.getTouchY(0) < 22 && gameEngine.getTouchX(0) >  427)
        {
            state = GameScreen.State.Paused;
            return;
        }


        if (state == GameScreen.State.Running)  // if game is running, call world update method with x, y touch coordinates and accel params
        {
            world.update(deltaTime, gameEngine.getAccelerometer()[0], gameEngine.isTouchDown(0), gameEngine.getTouchX(0));
        }
        renderer.render();

        showText = "Lives: " + world.lives + "    Points: " + world.points + "    Level: " + world.level; // lives, points and level string
        gameEngine.drawText(font, showText, 20, 22, Color.GREEN, 11);                         // draw text on screen, left corner

        if (state == GameScreen.State.Paused)   // if state is paused
        {
            pause();
            gameEngine.drawBitmap(resume, 240 - resume.getWidth() / 2, 240);    // draw resume button
            gameEngine.drawBitmap(quit, 240 - quit.getWidth() / 2, 180);        // draw quit button
            // if user clicks quit button
            if (gameEngine.getTouchY(0) > 180 && gameEngine.getTouchY(0) < 180 + quit.getHeight()
                    && gameEngine.getTouchX(0) >  240 && gameEngine.getTouchX(0) <  240 + quit.getWidth())
            {
                state = GameScreen.State.GameOver;
                return;
            }
            // if user clicks the resume button
            else if (gameEngine.getTouchY(0) > 240 && gameEngine.getTouchY(0) < 240 + resume.getHeight()
                    && gameEngine.getTouchX(0) >  240 && gameEngine.getTouchX(0) <  240 + resume.getWidth())
            {
                state = GameScreen.State.Running;
                resume();
                return;
            }

        }
        // if game is over
        if (state == GameScreen.State.GameOver)
        {
            pause();
            gameEngine.drawBitmap(gameOver, 160 - gameOver.getWidth() / 2, 240 - gameOver.getHeight() / 2); // show gameover image
        }

    }

    @Override
    public void pause()
    {
        gameEngine.music.pause();
        if (state == GameScreen.State.Running) state = GameScreen.State.Paused;
    }

    @Override
    public void resume()
    {
        gameEngine.music.play();
    }

    @Override
    public void dispose()
    {
        gameEngine.music.dispose();
    }
}
