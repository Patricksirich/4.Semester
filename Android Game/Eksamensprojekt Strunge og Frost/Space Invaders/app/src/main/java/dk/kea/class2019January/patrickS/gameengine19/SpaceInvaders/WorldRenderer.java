package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer {
    GameEngine gameEngine;
    World world;
    Bitmap spaceShipImg;
    // TODO: tilføj monstre + projectiler

    public WorldRenderer(GameEngine gameEngine, World world) {
        this.gameEngine = gameEngine;
        this.world = world;
        spaceShipImg = gameEngine.loadBitmap("SpaceInvaders/spaceship.png");
    }

    public void render() {

        gameEngine.drawBitmap(spaceShipImg, (int)world.spaceship.x, (int)world.spaceship.y);
    }

}
