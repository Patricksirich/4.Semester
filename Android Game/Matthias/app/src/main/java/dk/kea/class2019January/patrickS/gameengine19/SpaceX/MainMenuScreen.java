package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class MainMenuScreen extends Screen
{
    Bitmap mainMenu;
    Bitmap startBtn;
    Bitmap creditBtn;
    Bitmap guideBtn;
    Bitmap spaceX;
    float passedTime = 0;

    public MainMenuScreen(GameEngine gameEngine) // constructor
    {
        super(gameEngine);
        mainMenu = gameEngine.loadBitmap("spacex/bg.png"); // bg image

        Bitmap startButton = gameEngine.loadBitmap("spacex/start.png"); // start image
        startBtn = Bitmap.createScaledBitmap(startButton, 400,50, true); //scale start image

        Bitmap guideButton = gameEngine.loadBitmap("spacex/guide.png"); //guide image
        guideBtn = Bitmap.createScaledBitmap(guideButton, 350,35, true); // scale guide image

        Bitmap creditButton = gameEngine.loadBitmap("spacex/credits.png"); //credits image
        creditBtn = Bitmap.createScaledBitmap(creditButton, 350,40, true); // scale credits image

        Bitmap spacexImage = gameEngine.loadBitmap("spacex/spacex.png"); //spacex image
        spaceX = Bitmap.createScaledBitmap(spacexImage, 250,20, true); //scale spacex image

    }


    @Override
    public void update(float deltaTime) //update metode
    {
        // if user clicks on guide image, change to guidescreen
        if (gameEngine.getTouchY(0) > 100 && gameEngine.getTouchY(0) < 100 + guideBtn.getHeight()
                && gameEngine.getTouchX(0) > 240 - guideBtn.getWidth()/2 && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new GuideScreen(gameEngine));
            return;
        }
        // if user clicks on credits image, change to creditscreen
        else if (gameEngine.getTouchY(0) > 165 && gameEngine.getTouchY(0) < 165 + creditBtn.getHeight()
                && gameEngine.getTouchX(0) >  240 - creditBtn.getWidth()/2  && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new CreditScreen(gameEngine));
            return;
        }
        // if user clicks on start, change to gamescreen
        else if (gameEngine.getTouchY(0) > 240  && gameEngine.getTouchY(0) < 240 + startBtn.getHeight()
                && gameEngine.getTouchX(0) >  240 - startBtn.getWidth()/2  && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new GameScreen(gameEngine));
            return;
        }
        gameEngine.drawBitmap(mainMenu,0,0); // draw bg
        passedTime += deltaTime;

        gameEngine.drawBitmap(spaceX, 240 - spaceX.getWidth()/2, 15); // draw spacex image

        gameEngine.drawBitmap(guideBtn, 240 - guideBtn.getWidth()/2, 100); // draw guide image

        gameEngine.drawBitmap(creditBtn, 240 - creditBtn.getWidth()/2, 165); // draw credit image

        // method that makes start blink
        if ((passedTime - (int)passedTime) > 0.5f)
        {
            gameEngine.drawBitmap(startBtn, 240 - startBtn.getWidth()/2, 240); //draw start image
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
