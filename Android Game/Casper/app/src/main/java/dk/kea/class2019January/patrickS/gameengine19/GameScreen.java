package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;

public class GameScreen extends Screen {

    Bitmap background;

    public GameScreen(GameEngine gameEngine) {

        super(gameEngine);
        background = gameEngine.loadBitmap("background.png");
    }

    @Override
    public void update(float deltaTime) {

        gameEngine.drawBitmap(background, 0, 0);
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
