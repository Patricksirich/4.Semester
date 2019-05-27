package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;
import android.graphics.Typeface;

import java.util.List;

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

    public GameScreen(GameEngine gameEngine){

        super(gameEngine);
        tempImage = gameEngine.loadBitmap("SpaceInvaders/background.png");
        background = Bitmap.createScaledBitmap(tempImage, 480, 320, true);
        gameOver = gameEngine.loadBitmap("SpaceInvaders/gameover.png");
        resume = gameEngine.loadBitmap("SpaceInvaders/resume.png");
        font = gameEngine.loadFont("SpaceInvaders/font.ttf");

        world = new World(new CollisionListener() {
            @Override
            public void collisionWall() {

            }

            @Override
            public void collisionSpaceship() {

            }

            @Override
            public void collisionEnemy() {

            }

            @Override
            public void collisionProjectile() {

            }
        });
        renderer = new WorldRenderer(gameEngine, world);
        //TODO: sound eff./ music
        //TODO: world (til collisionListener) funktionalitet

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

        if (state == State.GameOver)
        {
            pause();
            gameEngine.drawBitmap(gameOver, 200 - gameOver.getWidth() / 2, 400 - gameOver.getHeight() / 2);

        }

        if (state == State.GameOver) {
            List<TouchEvent> events = gameEngine.getTouchEvents();
            for (int i = 0; i < events.size(); i++) {

                if(events.get(i).type == TouchEvent.TouchEventType.Up){
                    gameEngine.setScreen(new MainMenuScreen(gameEngine));
                    return;
                }

            }
        }

    }


    @Override
    public void pause()
    {
        // TODO: pause music
        // TODO: funktion der forhindrer spaceship i at rykke sig, når pauseknappen bliver trykket.

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
