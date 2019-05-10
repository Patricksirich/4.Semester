package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.Breakout.GameScreen;
import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class MainMenuScreen extends Screen{

    private Bitmap mainMenu;
    private Bitmap startGame;
    float passedTime = 0;
    long startTime;

    public MainMenuScreen(GameEngine gameEngine) {

        super(gameEngine);
        startGame = gameEngine.loadBitmap("SpaceInvaders/xstartgame.png");
        mainMenu = gameEngine.loadBitmap("SpaceInvaders/background.png");
        startTime = System.nanoTime();
    }

    @Override
    public void update(float deltaTime) {

        if (gameEngine.isTouchDown(0) && (passedTime) > 0.5f) {
            gameEngine.setScreen(new GameScreen(gameEngine));
            return;
        }
        gameEngine.drawBitmap(mainMenu, 0, 0);
        passedTime = passedTime + deltaTime;
        if ((passedTime - (int)passedTime) > 0.5f) {
            gameEngine.drawBitmap(startGame, 160 - startGame.getWidth()/2, 320);
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
