package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer {
    GameEngine gameEngine;
    World world;
    Bitmap spaceShipImg;
    Bitmap pauseButton;
    Bitmap enemyImage;
    Enemies enemy;

    // TODO: tilføj monstre + projectiler

    public WorldRenderer(GameEngine gameEngine, World world) {

        this.gameEngine = gameEngine;
        this.world = world;

        // We need to rescale our ship, as the original image is too large
        Bitmap spaceShipActual = gameEngine.loadBitmap("SpaceInvaders/spaceship.png");
        spaceShipImg = Bitmap.createScaledBitmap(spaceShipActual, 90, 40, true);

        // Same with our pause button
        Bitmap pauseButtonActual = gameEngine.loadBitmap("SpaceInvaders/pausebutton.png");
        pauseButton = Bitmap.createScaledBitmap(pauseButtonActual, 60, 25, true);

        Bitmap tempEnemy = gameEngine.loadBitmap("SpaceInvaders/enemy.png");
        enemyImage = Bitmap.createScaledBitmap(tempEnemy, Enemies.WIDTH, Enemies.HEIGHT, true);


    }


    public void render() {

        gameEngine.drawBitmap(spaceShipImg, (int)world.spaceship.x, (int)world.spaceship.y);
        gameEngine.drawBitmap(pauseButton, 400, 5);

        for (int i = 0; i < world.enemies.size(); i++)
        {
            enemy = world.enemies.get(i);
            gameEngine.drawBitmap(enemyImage, (int) enemy.x, (int) enemy.y);
        }

    }

}
