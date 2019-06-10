package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class CreditScreen extends Screen
{
    // our images and passedtime counter
    Bitmap backBtn;
    Bitmap bg;
    float passedTime = 0;
    Bitmap spaceX;
    Bitmap createdBy;
    Bitmap gameEngineBy;

    public CreditScreen(GameEngine gameEngine) // constructor
    {
        super(gameEngine);
        bg = gameEngine.loadBitmap("spacex/bg.png");

        // "created by" image bitmap created then scaled
        Bitmap created = gameEngine.loadBitmap("spacex/createdby.png");
        createdBy = Bitmap.createScaledBitmap(created, 350,75, true);

        // "game engine by" image bitmap created then scaled
        Bitmap gameEngineByImg = gameEngine.loadBitmap("spacex/gameengineby.png");
        gameEngineBy = Bitmap.createScaledBitmap(gameEngineByImg, 350,75, true);

        // "space x" logo bitmap created then scaled
        Bitmap spacexImage = gameEngine.loadBitmap("spacex/spacex.png");
        spaceX = Bitmap.createScaledBitmap(spacexImage, 250,20, true);

        // back button image bitmap created then scaled
        Bitmap backButton = gameEngine.loadBitmap("spacex/back.png");
        backBtn = Bitmap.createScaledBitmap(backButton, 100,25, true);

    }

    @Override
    public void update(float deltaTime)
    {
        // if user clicks on "back" button, go back to main menu
        if (gameEngine.getTouchY(0) > 0  && gameEngine.getTouchY(0) < 0 + backBtn.getHeight()
                && gameEngine.getTouchX(0) >  5 && gameEngine.getTouchX(0) <  5 + backBtn.getWidth()  && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new MainMenuScreen(gameEngine));
            return;
        }
        // increment time counter
        passedTime = passedTime + deltaTime;
        // draw our background, spacex logo and our created by + game engine by images
        gameEngine.drawBitmap(bg,0,0);
        gameEngine.drawBitmap(spaceX, 240 - spaceX.getWidth()/2, 15);
        gameEngine.drawBitmap(createdBy, 240 - createdBy.getWidth()/2, 100);
        gameEngine.drawBitmap(gameEngineBy, 240 - gameEngineBy.getWidth()/2, 200);

        gameEngine.drawBitmap(backBtn, 5, 0);



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
