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

    int points = 0;
    int lives = 3;
    boolean lostLife = false;
    boolean gameOver = false;
    int level = 1;
    boolean advance;
    CollisionListener collisionListener;

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
        Enemy enemy = null;
        for (int i = 0; i < enemies.size(); i++)
        {
            enemy = enemies.get(i);
            if (collideRects(projectile.x, projectile.y, Projectile.WIDTH, Projectile.HEIGHT, enemy.x, enemy.y, Enemy.WIDTH, Enemy.HEIGHT))
            {
                enemies.remove(i);
                points = points + 10 * level;
                collisionListener.collisionEnemy();
                projectile.y = ship.y;
                projectile.x = ship.x;
                break; //no need to check collision with other Enemy when it hit this Enemy
            }
        }
    }


    private boolean collideRects(float x, float y, float width, float height, float x2, float y2, float width2, float height2)
                                //projectile.x, projectile.y, Projectile.WIDTH, Projectile.HEIGHT, enemy.x, enemy.y, Enemy.WIDTH, Enemy.HEIGHT
    {
        if (x < x2 + width2 - 17 && x + width > x2 - 15 && y < y2 + height2 && y + height > y2)
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
            for (int x = 30; x < 450 - Enemy.WIDTH; x = x + Enemy.WIDTH + 15) {
                enemies.add(new Enemy(x, y));
            }
        }
    }

    private void advanceEnemies()
    {
        // TODO Højre ned --> Venstre ned
        Enemy enemy;
        for (int i = 0; i < enemies.size(); i++)
        {
            enemy = enemies.get(i);
            //Enemy.y = Enemy.y + 0.1f;
            enemy.x = enemy.x + enemy.vx * level;
            if (enemy.x > MAX_X - Enemy.WIDTH)
            {
                Enemy.vx = -Enemy.vx;
                advance = true;
            }
            if (enemy.x < MIN_X)
            {
                Enemy.vx *= -1;
                advance = true;
            }

            if (enemy.y > 300) // TODO Fix gameover - ryk alle enemies op
            {

                for (int j = 0; j < enemies.size(); j++)
                {
                    enemy = enemies.get(j);
                    enemy.y = enemy.y - 175;

                }
                lives -= 1;
                lostLife = true;
                // add life lost collisionListener sound
                if (lives == 0) gameOver = true;
                return;
            }
        }

        if(advance)
        {
            for(int i = 0; i < enemies.size(); i++)
            {
                enemy = enemies.get(i);
                enemy.y += 10;
            }
            advance = false;
        }

    }
}