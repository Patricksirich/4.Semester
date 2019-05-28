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
    public boolean collision = false;
    public int points;
    public int level = 1;
    public float startTime = 0;
    public boolean advance = false;

    List<Enemies> enemies = new ArrayList<>();
    Spaceship spaceship = new Spaceship();
    CollisionListener collisionListener;
    Projectile projectile = new Projectile();

    public World(CollisionListener collisionListener) {
        this.collisionListener = collisionListener;
        generateEnemies();

    }

    public void update(float deltaTime, boolean isTouch, int touchX) {

        enemyMovement(deltaTime);
        collideProjectileEnemy();
        shootProjectile(deltaTime);

        // used for moving the spaceship with touch
        if (isTouch) {
            spaceship.x = touchX - Spaceship.WIDTH / 2;
        }

        // statements to make sure the spaceship stays in the screen
        if (spaceship.x < MIN_X) spaceship.x = MIN_X;
        if (spaceship.x + Spaceship.WIDTH > MAX_X) spaceship.x = MAX_X - Spaceship.WIDTH;

        if (enemies.size() == 0) {
            level++;
            generateEnemies();
        }


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

        for (int i = 0; i < enemies.size(); i++) {

            enemy = enemies.get(i);
            enemy.x = enemy.x + enemy.vx * deltaTime * (level * 0.10f);

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

            if (enemy.y > 300 - Spaceship.HEIGHT) {
                gameOver = true;
                Log.d("World", "Game over");
            }

        }

        if (advance) {
            for (int i = 0; i < enemies.size(); i++) {

                enemy = enemies.get(i);
                enemy.vx = -enemy.vx;
                enemy.y = enemy.y + 5;

            }
            advance = false;
        }

    }

    public boolean collision(float x, float y, float width, float height,
                             float x2, float y2, float width2, float height2) {

        if (x < x2 + width2 && x + width > x2 && y < y2 + height2 && y + height > y2) return true;

        return false;
    }

    public void shootProjectile(float deltaTime) {

        projectile.y = projectile.y - projectile.vy * deltaTime;

        startTime = startTime + deltaTime;
        if (projectile.y < MIN_Y || collision) {

            projectile.x = spaceship.x + 37;
            projectile.y = MAX_Y;
            projectile.y = projectile.y + projectile.vy + deltaTime;
            collision = false;
            startTime = 0;
        }
    }

    public void collideProjectileEnemy() {

        Enemies enemy = null;
        for (int i = 0; i < enemies.size(); i++) {

            enemy = enemies.get(i);

            if (collision(projectile.x, projectile.y, Projectile.WIDTH, Projectile.HEIGHT, enemy.x, enemy.y, Enemies.WIDTH, Enemies.HEIGHT)) {

                collision = true;
                enemies.remove(i);
                points = points + level * 10;
            }
        }


    }
}
