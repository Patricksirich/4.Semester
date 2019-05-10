package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;


import java.util.ArrayList;
import java.util.Random;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer
{
    GameEngine gameEngine;
    World world;
    Bitmap projectileImage;
    Bitmap shipImage;
    Bitmap enemyImage;
    Enemy enemy;


    public WorldRenderer(GameEngine gameEngine, World world)
    {
        this.gameEngine = gameEngine;
        this.world = world;
        projectileImage = gameEngine.loadBitmap("spacex/projectile.png");
        shipImage = gameEngine.loadBitmap("spacex/ship_icon.png");
        enemyImage = gameEngine.loadBitmap("spacex/meteors/meteor10.png");
       /* Bitmap enemyImage2 = gameEngine.loadBitmap("spacex/meteors/meteor07.png");
        Bitmap enemyImage3 = gameEngine.loadBitmap("spacex/meteors/meteor05.png");
        enemyImage.add(enemyImage1);
        enemyImage.add(enemyImage2);
        enemyImage.add(enemyImage3);
*/
    }

    public void render()
    {
        Random randInt = new Random();
        gameEngine.drawBitmap(projectileImage, (int) world.projectile.x, (int) world.projectile.y);
        gameEngine.drawBitmap(shipImage, (int) world.ship.x, (int) world.ship.y);
        for (int i = 0; i < world.enemies.size(); i++)
        {
            enemy = world.enemies.get(i);
            gameEngine.drawBitmap(enemyImage, (int) enemy.x, (int) enemy.y, 0,
                                                                (int) (enemy.type * Enemy.HEIGHT), (int)Enemy.WIDTH, (int)Enemy.HEIGHT);
            //randInt.nextInt(enemyImage.size()-1))
        }
    }

}

