package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;
import android.graphics.Typeface;

import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.Screen;
import dk.kea.class2019January.patrickS.gameengine19.Sound;
import dk.kea.class2019January.patrickS.gameengine19.TouchEvent;
import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class GameScreen extends Screen
{

    enum State{
        Running,
        Paused,
        GameOver
    }

    State state = State.Running;
    Bitmap background;
    Bitmap resume;
    Bitmap gameOver;
    Typeface font;
    Sound bounceSound;
    Sound blockSound;
    String showText;
    World world;
    WorldRenderer renderer;

    public GameScreen(GameEngine gameEngine){
        super(gameEngine);
        background = gameEngine.loadBitmap("SpaceInvaders/background.png");
        gameOver = gameEngine.loadBitmap("SpaceInvaders/gameover.png");
        resume = gameEngine.loadBitmap("SpaceInvaders/resume.png");
        font = gameEngine.loadFont("SpaceInvaders/font.ttf");
        //TODO: sound eff./ music

        //TODO: world (til collisionListener) funktionalitet




    }

    @Override
    public void update(float deltaTime)
    {

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
