package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;
import android.graphics.Color;
import android.graphics.Typeface;

import java.util.List;

public class GameScreen extends Screen {

    enum State {
        Paused,
        Running,
        GameOver
    }

    State state = State.Running;
    Bitmap background;
    Bitmap resume;
    Bitmap gameOver;
    Typeface font;
    World world;
    WorldRenderer renderer;
    String showText;

    public GameScreen(GameEngine gameEngine) {

        super(gameEngine);
        background = gameEngine.loadBitmap("background.png");
        resume = gameEngine.loadBitmap("resume.png");
        gameOver = gameEngine.loadBitmap("gameover.png");
        world = new World();
        renderer = new WorldRenderer(gameEngine, world);
        font = gameEngine.loadFont("font.ttf");
    }

    @Override
    public void update(float deltaTime) {

        if (world.lostLife)
        {
            state = State.Paused;
            world.lostLife = false;
        }

        if (world.gameOver)
        {
            state = State.GameOver;
        }

        if (state == State.Paused && gameEngine.isTouchDown(0))
        {
            state = State.Running;
            resume();
        }

        if (state == State.GameOver && gameEngine.isTouchDown((0)))
        {
            gameEngine.setScreen(new MainMenuScreen(gameEngine));
            return;
        }

        if (state == State.Running && gameEngine.getTouchY(0) < 35 && gameEngine.getTouchX(0) > 320 - 33)
        {
            state = State.Paused;
            pause();
            return;
        }

        gameEngine.drawBitmap(background, 0, 0);

        if (state == State.Running)
        {
            world.update(deltaTime, gameEngine.getAccelerometer()[0], gameEngine.isTouchDown(0), gameEngine.getTouchX(0));
        }
        renderer.render();
        showText = "Lives: " + Integer.toString(world.lives) + "   Points: " + Integer.toString(world.points);

        gameEngine.drawText(font, showText, 20, 21, Color.GREEN, 11);

        if (state == State.Paused)
        {
            pause();
            gameEngine.drawBitmap(resume, 160 - resume.getWidth() / 2, 240 - resume.getHeight() / 2);
        }

        if (state == State.GameOver)
        {
            List<TouchEvent> events = gameEngine.getTouchEvents();
            for (int i = 0; i < events.size(); i++) {
                if(events.get(i).type == TouchEvent.TouchEventType.Up) {
                    gameEngine.drawBitmap(gameOver, 160 - gameOver.getWidth() / 2, 240 - gameOver.getWidth() / 2);
            pause();
            gameEngine.setScreen(new MainMenuScreen(gameEngine));
                }
            }
        }

    }

    @Override
    public void pause() {

        gameEngine.music.pause();
        if (state == State.Running) state = State.Paused;
    }

    @Override
    public void resume() {

        gameEngine.music.play();
    }

    @Override
    public void dispose() {

        gameEngine.music.pause();
        gameEngine.music.stop();
        gameEngine.music.dispose();
    }
}
