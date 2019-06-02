package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import android.graphics.Bitmap;


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
        Bitmap projectileImg = gameEngine.loadBitmap("spacex/projectile.png");
        projectileImage = Bitmap.createScaledBitmap(projectileImg, 15, 12, true);

        Bitmap shipImg = gameEngine.loadBitmap("spacex/shipicon.png");
        shipImage = Bitmap.createScaledBitmap(shipImg, 40, 20, true);

        Bitmap enemyImg = gameEngine.loadBitmap("spacex/meteors/meteor10.png");
        enemyImage = Bitmap.createScaledBitmap(enemyImg, 70, 20, true);

    }

    public void render()
    {
        //Random randInt = new Random();
        gameEngine.drawBitmap(shipImage, (int) world.ship.x, (int) world.ship.y);
        gameEngine.drawBitmap(projectileImage, (int) world.projectile.x + (int) world.ship.WIDTH/2 + 4, (int) world.projectile.y);
        for (int i = 0; i < world.enemies.size(); i++)
        {
            enemy = world.enemies.get(i);
            //     public void drawBitmap(Bitmap bitmap, int x, int y, int srcX, int srcY, int srcWidth, int srcHeight)
            gameEngine.drawBitmap(enemyImage, (int) enemy.x, (int) enemy.y);
            //randInt.nextInt(enemyImage.size()-1))
        }

    }

}

