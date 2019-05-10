package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer {
    private GameEngine gameEngine;
    private World world;
    private Bitmap spaceShipImg;
    // TODO: tilføj monstre + projectiler

    public WorldRenderer(GameEngine gameEngine, World world) {
        this.gameEngine = gameEngine;
        this.world = world;
        // We need to rescale our ship, as the original image is too large
        Bitmap spaceShipActual = gameEngine.loadBitmap("SpaceInvaders/spaceship.png");
        spaceShipImg = Bitmap.createScaledBitmap(spaceShipActual, 90, 40, true);
    }

    public void render() {

        gameEngine.drawBitmap(spaceShipImg, (int)world.spaceship.x, (int)world.spaceship.y);

    }

}
