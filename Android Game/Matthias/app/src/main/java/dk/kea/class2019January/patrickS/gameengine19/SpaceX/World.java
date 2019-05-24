package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.util.Log;

import java.util.ArrayList;
import java.util.List;


public class World
{
    public static float MIN_X = 0;
    public static float MAX_X = 479;
    public static float MIN_Y = 36;
    public static float MAX_Y = 600;

    Ship ship = new Ship();
    Projectile projectile = new Projectile();
    List<Enemy> enemies = new ArrayList<>();

    CollisionListener collisionListener;

    int points = 0;
    int lives = 3;
    boolean lostLife = false;
    boolean gameOver = false;
    int level = 1;
    int hits = 0;

    public World(CollisionListener collisionListener)
    {
        this.collisionListener = collisionListener;
        generateEnemies();
    }

    public void update(float deltaTime, float accelX, boolean isTouch, int touchX)
    {
        // projectile speed
        projectile.y = projectile.y + projectile.vy * deltaTime;

        if (projectile.y < MIN_Y)
        {
            Log.d("Projectile reset", "Set projectile to ship coords");
            projectile.y = ship.y;
            projectile.x = ship.x;
            projectile.y = projectile.y + projectile.vy * deltaTime;
        }

        //move ship based on phone tilt action
        ship.x = ship.x - accelX * 50 * deltaTime;

        // move ship based on touch
        if (isTouch)
        {
            ship.x = touchX - ship.WIDTH / 2;
        }

        //make sure the ship stops at the edge of the screen
        if (ship.x < MIN_X) ship.x = MIN_X;
        if (ship.x + ship.WIDTH > MAX_X) ship.x = MAX_X - ship.WIDTH;

        collideProjectileEnemies(deltaTime);
        advanceEnemies();




        if (enemies.size() == 0)
        {
            generateEnemies();
            level++;
            projectile.y = 320 - 40;
            projectile.vy = -projectile.initialSpeed * 1.3f;

        }

    } //end of update() method


    private void collideProjectileEnemies(float deltaTime)
    {
        Enemy Enemy = null;
        for (int i = 0; i < enemies.size(); i++)
        {
            Enemy = enemies.get(i);
            if (collideRects(projectile.x, projectile.y, projectile.WIDTH, projectile.HEIGHT, Enemy.x, Enemy.y, Enemy.WIDTH, Enemy.HEIGHT))
            {
                enemies.remove(i);
                float oldvy = projectile.vy;
                //back out the projectile with 1% to avoid multiple interactions
                projectile.y = projectile.y - oldvy * deltaTime * 1.01f;
                points = points + 10;
                collisionListener.collisionEnemy();
                projectile.y = ship.y;
                projectile.x = ship.x;
                break; //no need to check collision with other Enemy when it hit this Enemy
            }
        }
    }


    private boolean collideRects(float x, float y, float width, float height,
                                 float x2, float y2, float width2, float height2)
    {
        if (x < x2 + width2 && x + width > x2 && y < y2 + height2 && y + height > y2)
        {
            Log.d("True", "CollideRects");
            return true;
        }
        Log.d("False", "CollideRects");
        return false;
    }

    private void generateEnemies()
    {
        enemies.clear();

        for (int y = 35; y < 50 + 4 * (Enemy.HEIGHT + 4); y = y + (Enemy.HEIGHT + 4)) {
            for (int x = 30; x < 400 - Enemy.WIDTH; x = x + Enemy.WIDTH + 40) {
                enemies.add(new Enemy(x, y));
            }
        }
    }

    private void advanceEnemies()
    {
        // TODO Højre ned --> Venstre ned
        Enemy Enemy;
        int stop = enemies.size();
        for (int i = 0; i < enemies.size(); i++)
        {
            Enemy = enemies.get(i);
            Enemy.y = Enemy.y + 0.1f;

            if(Enemy.y > 300) // TODO Fix gameover - ryk alle enemies op
            {
                lives = lives - 1;
                Enemy.y = Enemy.y - 564;
                lostLife = true;
                // add life lost collisionListener sound
                if (lives == 0) gameOver = true;
                return;
            }
        }
    }
}