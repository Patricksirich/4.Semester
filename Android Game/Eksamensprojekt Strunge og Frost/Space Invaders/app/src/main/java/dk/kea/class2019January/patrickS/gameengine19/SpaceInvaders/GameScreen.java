package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;
import android.graphics.Typeface;

import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.Music;
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
    Bitmap tempImage;
    Bitmap resume;
    Bitmap gameOver;
    Typeface font;
    World world;
    WorldRenderer renderer;
    Sound coinSound;
    Sound enemyDeathSound;
    Music music;

    public GameScreen(GameEngine gameEngine){

        super(gameEngine);
        tempImage = gameEngine.loadBitmap("SpaceInvaders/background.png");
        background = Bitmap.createScaledBitmap(tempImage, 480, 320, true);
        gameOver = gameEngine.loadBitmap("SpaceInvaders/gameover.png");
        resume = gameEngine.loadBitmap("SpaceInvaders/resume.png");
        font = gameEngine.loadFont("SpaceInvaders/font.ttf");
        coinSound = gameEngine.loadSound("SpaceInvaders/coinCollect.wav");
        enemyDeathSound = gameEngine.loadSound("SpaceInvaders/blocksplosion.wav");
        music = gameEngine.loadMusic("SpaceInvaders/music.ogg");

        world = new World(new CollisionListener() {

            @Override
            public void collisionCoinSpaceship()
            {
                coinSound.play(1);
            }

            @Override
            public void collisionEnemy() {
                enemyDeathSound.play(1);

            }

        });
        renderer = new WorldRenderer(gameEngine, world);
        music.play();

    }

    @Override
    public void update(float deltaTime)
    {
        gameEngine.drawBitmap(background, 0, 0);

        if (state == State.Running){
            world.update(deltaTime, gameEngine.isTouchDown(0), gameEngine.getTouchX(0));
        }

        renderer.render();

        if (state == State.Paused) {
            pause();
            gameEngine.drawBitmap(resume, 250-resume.getWidth() / 2, 175-resume.getHeight()/2);

        }

        if (state == State.Paused && gameEngine.isTouchDown(0)) {
            state = State.Running;
            resume();
            return;

        }

        if (state == State.Running && gameEngine.getTouchY(0) < 33 && gameEngine.getTouchX(0) > 320 - 33)
        {
            state = State.Paused;
            pause();
            return;
        }

        if (world.gameOver) {
            state = State.GameOver;
        }

        if (state == State.GameOver) {

            gameEngine.drawBitmap(gameOver, 250 - gameOver.getWidth() / 2, 175 - gameOver.getHeight() / 2);

            List<TouchEvent> events = gameEngine.getTouchEvents();
            for (int i = 0; i < events.size(); i++) {

                if(events.get(i).type == TouchEvent.TouchEventType.Down){
                    gameEngine.setScreen(new MainMenuScreen(gameEngine));
                    return;
                }

            }
        }

    }


    @Override
    public void pause()
    {
        music.pause();
        if (state == State.Running) state = State.Paused;

    }

    @Override
    public void resume()
    {
        if (state == State.Paused) state = State.Running;
        music.play();
    }

    @Override
    public void dispose()
    {
        music.dispose();
    }
}
