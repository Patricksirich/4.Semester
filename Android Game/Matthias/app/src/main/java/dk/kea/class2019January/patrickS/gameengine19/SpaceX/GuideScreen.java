package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class GuideScreen extends Screen
{
    Bitmap backBtn;
    String showText;
    Bitmap bg;
    Typeface font;
    float passedTime = 0;
    Bitmap spaceX;

    public GuideScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        bg = gameEngine.loadBitmap("spacex/bg.png");

        // space x logo bitmap created then scaled
        Bitmap spacexImage = gameEngine.loadBitmap("spacex/spacex.png");
        spaceX = Bitmap.createScaledBitmap(spacexImage, 250,20, true);

        // back button image bitmap created then scaled
        Bitmap backButton = gameEngine.loadBitmap("spacex/back.png");
        backBtn = Bitmap.createScaledBitmap(backButton, 100,25, true);

        font = gameEngine.loadFont("breakout/font.ttf");
    }


    @Override
    public void update(float deltaTime)
    {
        // if user clicks on back button return to main menu
        if (gameEngine.getTouchY(0) > 0  && gameEngine.getTouchY(0) < 0 + backBtn.getHeight()
                && gameEngine.getTouchX(0) >  5 && gameEngine.getTouchX(0) <  5 + backBtn.getWidth()  && (passedTime) > 0.5f)
        {
            gameEngine.setScreen(new MainMenuScreen(gameEngine));
            return;
        }
        // passed time counter incremented
        passedTime = passedTime + deltaTime;
        // draw background, spacex logo and back button
        gameEngine.drawBitmap(bg,0,0);
        gameEngine.drawBitmap(spaceX, 240 - spaceX.getWidth()/2, 15);
        gameEngine.drawBitmap(backBtn, 5, 0);

        // define our text for game guide and draw it on the screen. change y coordinates for each
        showText = "1. Click start in the main menu to start the game";
        gameEngine.drawText(font, showText, 30, 75, Color.GREEN, 10);
        showText = "2. Move spaceship by clicking on the screen or tilting your phone";
        gameEngine.drawText(font, showText, 30, 100, Color.GREEN, 10);
        showText = "3. Hit the meteors with your laser to destroy them";
        gameEngine.drawText(font, showText, 30, 125, Color.GREEN, 10);
        showText = "4. Once you kill all meteors a new level begins";
        gameEngine.drawText(font, showText, 30, 150, Color.GREEN, 10);
        showText = "5. You lose a life if the meteors reach your backline";
        gameEngine.drawText(font, showText, 30, 175, Color.GREEN, 10);
        showText = "6. You lose the game by losing all your lifes";
        gameEngine.drawText(font, showText, 30, 200, Color.GREEN, 10);

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
