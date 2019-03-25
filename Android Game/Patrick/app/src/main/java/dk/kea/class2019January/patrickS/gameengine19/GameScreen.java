package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;

public class GameScreen extends Screen
{
    enum State
    {
        Paused,
        Running,
        GameOver
    }

    State state = State.Running;
    Bitmap background;
    Bitmap resume;
    Bitmap gameOver;
    World world;
    WorldRenderer renderer;

    public GameScreen(GameEngine gameEngine)
    {
        super(gameEngine);
        background = gameEngine.loadBitmap("background.png");
        resume = gameEngine.loadBitmap("resume.png");
        gameOver = gameEngine.loadBitmap("gameover.png");
        world = new World();
        renderer = new WorldRenderer(gameEngine, world);
    }

    @Override
    public void update(float deltaTime)
    {
        if(world.lostLife)
        {
            state = State.Paused;
            world.lostLife = false;
        }
        if(world.gameOver)
        {
            state = State.GameOver;
        }
        if (state == State.Paused && gameEngine.isTouchDown(0))
        {
            state = State.Running;
        }
        if (state == State.GameOver && gameEngine.isTouchDown(0))
        {
            gameEngine.setScreen(new MainMenuScreen(gameEngine));
            return;
        }
        if (state == State.Running && gameEngine.getTouchY(0) < 33 && gameEngine.getTouchX(0) > 320 - 33)
        {
            state = State.Paused;
            return;
        }

        gameEngine.drawBitmap(background, 0, 0);

        if (state == State.Running)
        {
            world.update(deltaTime, gameEngine.getAccelerometer()[0], gameEngine.isTouchDown(0), gameEngine.getTouchX(0));
        }
        renderer.render();

        if (state == State.Paused)
        {
            gameEngine.drawBitmap(resume, 160 - resume.getWidth() / 2, 240 - resume.getHeight() / 2);
        }
        if (state == State.GameOver)
        {
            gameEngine.drawBitmap(gameOver, 160 - gameOver.getWidth() / 2, 240 - gameOver.getHeight() / 2);
        }


    }

    @Override
    public void pause()
    {
        if (state == State.Running) state = State.Paused;
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
