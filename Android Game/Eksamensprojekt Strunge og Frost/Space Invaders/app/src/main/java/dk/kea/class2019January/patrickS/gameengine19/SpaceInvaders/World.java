package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import java.util.ArrayList;
import java.util.List;

public class World
{
    public static float MIN_X = -20;
    public static float MAX_X = 499;
    public static float MIN_Y = 36;
    public static float MAX_Y = 799;



    List<Enemies> enemies = new ArrayList<>();
    Spaceship spaceship = new Spaceship();
    CollisionListener collisionListener;
    Enemies enemy = new Enemies(MIN_X, MAX_X);

    public World(CollisionListener collisionListener)
    {
        this.collisionListener = collisionListener;
        generateEnemies();


    }
    public void update(float deltaTime, boolean isTouch, int touchX)
    {

        // used for moving the spaceship with touch
        if(isTouch)
        {
            spaceship.x = touchX - Spaceship.WIDTH / 2;
        }

        // statements to make sure the spaceship stays in the screen
        if(spaceship.x < MIN_X) spaceship.x = MIN_X;
        if(spaceship.x + Spaceship.WIDTH > MAX_X) spaceship.x = MAX_X - Spaceship.WIDTH;

        enemyMovement();

    }

    public void generateEnemies()
    {
        enemies.clear();

        for(int y = 35; y < 50 + 4 * (Enemies.HEIGHT + 4); y = y + (Enemies.HEIGHT + 4))
        {
            for (int x = 30; x < 330 - Enemies.WIDTH; x = x + Enemies.WIDTH +20)
            {
                enemies.add(new Enemies(x, y));
            }
        }

    }

    public void enemyMovement() {

        Enemies enemy;
        for (int i = 0; i < enemies.size() ; i++) {

            enemy = enemies.get(i);
            enemy.x = enemy.x + 10;

            if (enemy.x < MIN_X)
            {
                enemy.vx = -enemy.vx;
                enemy.x = MIN_X;
            }
            if (enemy.x > MAX_X - Enemies.WIDTH)
            {
                enemy.vx = -enemy.vx;
                enemy.x = MAX_X - Enemies.WIDTH;
            }
        }
    }

}
