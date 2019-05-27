package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.util.Log;

import java.util.ArrayList;
import java.util.List;

public class World {
    public static float MIN_X = -20;
    public static float MAX_X = 479;
    public static float MIN_Y = 36;
    public static float MAX_Y = 175;
    public boolean gameOver = false;
    public int level = 1;


    List<Enemies> enemies = new ArrayList<>();
    Spaceship spaceship = new Spaceship();
    CollisionListener collisionListener;
    Projectile projectile = new Projectile();

    public World(CollisionListener collisionListener) {
        this.collisionListener = collisionListener;
        generateEnemies();

    }

    public void update(float deltaTime, boolean isTouch, int touchX) {

        // used for moving the spaceship with touch
        if (isTouch) {
            spaceship.x = touchX - Spaceship.WIDTH / 2;
        }

        projectile.y = projectile.y - projectile.vy * deltaTime;

        if (projectile.y < MIN_Y) {

            Log.d("Enters method", "This works!");
            projectile.x = spaceship.x + 37;
            projectile.y = MAX_Y;
            projectile.y = projectile.y + projectile.vy + deltaTime;
        }


        // statements to make sure the spaceship stays in the screen
        if (spaceship.x < MIN_X) spaceship.x = MIN_X;
        if (spaceship.x + Spaceship.WIDTH > MAX_X) spaceship.x = MAX_X - Spaceship.WIDTH;

        enemyMovement(deltaTime);
    }

    public void generateEnemies() {
        enemies.clear();

        for (int y = 35; y < 50 + 4 * (Enemies.HEIGHT + 4); y = y + (Enemies.HEIGHT + 4)) {
            for (int x = 30; x < 330 - Enemies.WIDTH; x = x + Enemies.WIDTH + 20) {
                enemies.add(new Enemies(x, y));
            }
        }
    }

    // Enemy movement method, that also checks if the game is over.
    public void enemyMovement(float deltaTime) {

        Enemies enemy;
        boolean advance = false;

        for (int i = 0; i < enemies.size(); i++) {

            enemy = enemies.get(i);
            enemy.x = enemy.x + enemy.vx * deltaTime * level/2.5f;

            if (enemy.x < MIN_X + Enemies.WIDTH) {
                advance = true;
                enemy.x = MIN_X + Enemies.WIDTH;
                continue;
            }
            if (enemy.x > MAX_X - Enemies.WIDTH) {
                advance = true;
                enemy.x = MAX_X - Enemies.WIDTH;
                continue;
            }

            // TODO: condition bliver instantly mødt?
//            if (enemy.y < MAX_Y) {
//                gameOver = true;
//                Log.d("World", "Game over");
//            }
//
        }

        if(advance) {
            for (int j = 0; j < enemies.size(); j++) {

                enemy = enemies.get(j);
                enemy.vx = -enemy.vx;
                enemy.y = enemy.y + 5;

            }
            advance = false;
        }

    }

    public boolean collideProjectileEnemy(float x, float y, float width, float height,
                                          float x2, float y2, float width2, float height2)
    {



    }
}
