package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class MainMenuScreen extends Screen
{
    Bitmap mainMenu;
    Bitmap startBtn;
    float passedTime = 0;
    long startTime;

    public MainMenuScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        mainMenu = gameEngine.loadBitmap("spacex/bg.png");
        startBtn = gameEngine.loadBitmap("spacex/start.png");
        startTime = System.nanoTime();
    }

    @Override
    public void update(float deltaTime)
    {
        if (gameEngine.isTouchDown(0) && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new GameScreen(gameEngine));
            return;
        }
        gameEngine.drawBitmap(mainMenu,0,0);
        passedTime = passedTime + deltaTime;
        if ((passedTime - (int)passedTime) > 0.5f)
        {
            gameEngine.drawBitmap(startBtn, 240 - startBtn.getWidth()/2, 160);
        }


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
