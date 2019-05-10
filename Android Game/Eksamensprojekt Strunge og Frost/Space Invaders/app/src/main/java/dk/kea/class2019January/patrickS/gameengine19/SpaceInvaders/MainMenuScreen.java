package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;


import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class MainMenuScreen extends Screen{

    private Bitmap mainMenu;
    private Bitmap startGame;
    float passedTime = 0;
    long startTime;
    String titleText;
    Typeface font;

    public MainMenuScreen(GameEngine gameEngine) {

        super(gameEngine);
        startGame = gameEngine.loadBitmap("SpaceInvaders/xstartgame.png");
        mainMenu = gameEngine.loadBitmap("SpaceInvaders/background.png");
        font = gameEngine.loadFont("SpaceInvaders/font.ttf");
        startTime = System.nanoTime();
    }

    // TODO:
    //  titleText = "Space Invaders";
    //  gameEngine.drawText(font, titleText, 50, 70, Color.GREEN, 11);

    @Override
    public void update(float deltaTime) {


        if (gameEngine.isTouchDown(0) && (passedTime) > 0.5f) {
            gameEngine.setScreen(new GameScreen(gameEngine));
            return;
        }
        gameEngine.drawBitmap(mainMenu, 0, 0);
        passedTime = passedTime + deltaTime;
        if ((passedTime - (int)passedTime) > 0.5f) {
            gameEngine.drawBitmap(startGame, 240 - startGame.getWidth()/2, 160);
        }
    }

    @Override
    public void pause() {

    }

    @Override
    public void resume() {

    }

    @Override
    public void dispose() {

    }



}
