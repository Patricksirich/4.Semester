package dk.kea.class2019January.patrickS.gameengine19.Carscroller;

import android.util.Log;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class World
{
    public static final float MIN_X = 0;
    public static final float MAX_X = 479;
    public static final float MIN_Y = 30;
    public static final float MAX_Y = 285;

    Car car = new Car();
    List<Monster> monsterList = new ArrayList<>();
    public int maxMonsters = 12;

    GameEngine gameEngine;
    CollisionListener listener;

    boolean gameOver = false;
    int points = 0;
    int lives = 3;
    int backgroundSpeed = 0;

    public World(GameEngine gameEngine, CollisionListener listener, int backgroundSpeed)
    {
        this.backgroundSpeed = backgroundSpeed;
        this.gameEngine = gameEngine;
        this.listener = listener;
        initializeMonsters();
    }

    public void update(float deltaTime, float accelY)
    {
//        Move the car based on the phone accelerometer
        car.y = (int) (car.y + accelY * deltaTime * 40);
//        Move the car based on user screen touch, ONLY for testing. TODO remove
        if (gameEngine.isTouchDown(0))
        {
            car.y = gameEngine.getTouchY(0) - Car.HEIGHT;
        }

//        Check upper road boundry
        if (car.y < MIN_Y) car.y = (int) MIN_Y + 1;
//        Check lower road boundary
        if (car.y + Car.HEIGHT > MAX_Y) car.y = (int) (MAX_Y - Car.HEIGHT - 1);

        Monster monster = null;
        for (int i = 0; i < maxMonsters ; i++)
        {
            monster = monsterList.get(i);
            monster.x = (int)(monster.x - backgroundSpeed * deltaTime);
            if (monster.x < 0 - Monster.WIDTH)
            {
                Random random = new Random();
                monster.x = 500 + random.nextInt(100);
                monster.y = 30 + random.nextInt(235);
                Log.d("World", "Just recycled a monster");

            }
        }
//        Check if car collides w/ monster
        collideCarMonster();
    }

    private void collideCarMonster()
    {
        Monster monster = null;
        for (int i = 0; i < maxMonsters; i++)
        {
            monster = monsterList.get(i);
            if (collideRects(car.x, car.y, Car.WIDTH, Car.HEIGHT,
                    monster.x, monster.y, Monster.WIDTH, Monster.HEIGHT))
            {
                gameOver = true;
                Log.d("World", "The car hit a monster");
            }
        }
    }

    private boolean collideRects(float x, float y, float width, float height,
                                 float x2, float y2, float width2, float height2)
    {
        if (x < x2 + width2 && x + width > x2 && y < y2 + height2 && y + height > y2)
        {
            return true;
        }
        return false;
    }

    private void initializeMonsters()
    {
        Random random = new Random();
        for (int i = 0; i < maxMonsters ; i++)
        {
            int randX = random.nextInt(50);
            int randY = random.nextInt(255);
            Monster monster = new Monster(((500 + randX) + i * 50), 30 + randY);
            monsterList.add(monster);
        }
    }

}
