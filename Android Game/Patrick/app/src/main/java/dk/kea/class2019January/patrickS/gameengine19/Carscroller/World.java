package dk.kea.class2019January.patrickS.gameengine19.Carscroller;

import java.util.ArrayList;
import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class World
{
    public static final float MIN_X = 0;
    public static final float MAX_X = 479;
    public static final float MIN_Y = 40;
    public static final float MAX_Y = 280;

    Car car = new Car();
    List<Monster> monsterList = new ArrayList<>();
    public int maxMonsters = 3;

    GameEngine gameEngine;
    CollisionListener listener;

    boolean gameOver = false;
    int points = 0;
    int lives = 3;

    public World(GameEngine gameEngine, CollisionListener listener)
    {
        this.gameEngine = gameEngine;
        this.listener = listener;
    }

    public void update(float deltaTime, float accelY)
    {
        // move the car based on the phone accelerometer
        car.y = (int) (car.y + accelY * deltaTime * 40);
        // move the car based on user screen touch. Only for testing. Remove before publishing.
        if (gameEngine.isTouchDown(0))
        {
            car.y = gameEngine.getTouchY(0) - Car.HEIGHT;
        }

        //check upper road boundary
        if (car.y < MIN_Y) car.y = (int) MIN_Y + 1;
        //check lower road boundary
        if (car.y + Car.HEIGHT > MAX_Y) car.y = (int) MAX_Y - Car.HEIGHT;
    }

    private void initializeMonsters()
    {

    }

}