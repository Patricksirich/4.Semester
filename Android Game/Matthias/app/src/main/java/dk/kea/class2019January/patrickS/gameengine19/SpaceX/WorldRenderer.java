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
    Bitmap pauseButton;
    Enemy enemy;


    public WorldRenderer(GameEngine gameEngine, World world) //constructor
    {
        this.gameEngine = gameEngine;
        this.world = world;

        //load and scale spacex image
        Bitmap projectileImg = gameEngine.loadBitmap("spacex/projectile.png");
        projectileImage = Bitmap.createScaledBitmap(projectileImg, Projectile.WIDTH, Projectile.HEIGHT, true);

        //load and scale ship image
        Bitmap shipImg = gameEngine.loadBitmap("spacex/shipicon.png");
        shipImage = Bitmap.createScaledBitmap(shipImg, 40, 20, true);

        //load and scale meteor
        Bitmap enemyImg = gameEngine.loadBitmap("spacex/meteors/meteor10.png");
        enemyImage = Bitmap.createScaledBitmap(enemyImg, Enemy.WIDTH, Enemy.HEIGHT, true);

        //load and scale pause
        Bitmap pauseBtn = gameEngine.loadBitmap("spacex/pause.png");
        pauseButton = Bitmap.createScaledBitmap(pauseBtn, 37,20, true);

    }

    public void render()
    {
        gameEngine.drawBitmap(shipImage, (int) world.ship.x, (int) world.ship.y); //draw ship on the location in ship class
        gameEngine.drawBitmap(projectileImage, (int) world.projectile.x + (int) world.ship.WIDTH/2 - 7, (int) world.projectile.y - 8); //draw projectile
        gameEngine.drawBitmap(pauseButton, 430, 0); //draw pause image

        //for-loop that generates the enemies
        for (int i = 0; i < world.enemies.size(); i++)
        {
            enemy = world.enemies.get(i); //get index of arraylist
            gameEngine.drawBitmap(enemyImage, (int) enemy.x, (int) enemy.y); //draw enemy
        }

    }

}

