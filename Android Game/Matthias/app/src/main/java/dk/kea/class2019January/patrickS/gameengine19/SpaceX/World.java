package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import java.util.ArrayList;
import java.util.List;


public class World
{
    public static float MIN_X = 0;
    public static float MAX_X = 319;
    public static float MIN_Y = 36;
    public static float MAX_Y = 479;

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
        projectile.y = projectile.y + projectile.vy * deltaTime;

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

        collideProjectileShip(deltaTime);
        collideProjectileEnemies(deltaTime);

        if (enemies.size() == 0)
        {
            generateEnemies();
            level++;
            projectile.y = 320 - 40;
            projectile.vy = -projectile.initialSpeed * 1.3f;

        }

    } //end of update() method

    private void collideProjectileShip(float deltaTime)
    {
        //if (projectile.y > ship.y + ship.HEIGHT) return;
        if ((projectile.x + projectile.WIDTH >= ship.x) && (projectile.x < ship.x + ship.WIDTH) && (projectile.y + projectile.HEIGHT > ship.y))
        {
            projectile.y = projectile.y - projectile.vy * deltaTime * 1.01f;
            projectile.vy = -projectile.vy;
            hits++;
            collisionListener.collisionShip();
            if (hits == 5)
            {
                hits = 0;
                if (level == 2)
                {
                    advanceEnemies();
                }
            }

        }
    }

    private void collideProjectileEnemies(float deltaTime)
    {
        Enemy Enemy = null;
        for (int i = 0; i < enemies.size(); i++)
        {
            Enemy = enemies.get(i);
            if (collideRects(projectile.x, projectile.y, projectile.WIDTH, projectile.HEIGHT, Enemy.x, Enemy.y, Enemy.WIDTH, Enemy.HEIGHT))
            {
                enemies.remove(i);
                float oldvx = projectile.vx;
                float oldvy = projectile.vy;
                //back out the projectile with 1% to avoid multiple interactions
                projectile.x = projectile.x - oldvx * deltaTime * 1.01f;
                projectile.y = projectile.y - oldvy * deltaTime * 1.01f;
                points = points + 10 - Enemy.type;
                collisionListener.collisionEnemy();
                break; //no need to check collision with other Enemy when it hit this Enemy
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

    private void generateEnemies()
    {
        enemies.clear();

       for (int y = 60, type = 0; y < 60 + 8 * (Enemy.HEIGHT + 4); y++, type++)
        {
            for (int x = 30; x < 320 - Enemy.WIDTH; x = x + (int) Enemy.WIDTH + 4)
            {
                enemies.add(new Enemy(x, y + level * 40, type));
            }

        }
    }

    private void advanceEnemies()
    {
        Enemy Enemy;
        int stop = enemies.size();
        for (int i = 0; i < enemies.size(); i++)
        {
            Enemy = enemies.get(i);
            Enemy.y = Enemy.y + 10;
            if(Enemy.y > MAX_Y)
            {
                lives = lives - 1;
                lostLife = true;
                // add life lost collisionListener sound
                Enemy.y = Enemy.y - 60;
                if (lives == 0) gameOver = true;
                return;
            }
        }
    }
}