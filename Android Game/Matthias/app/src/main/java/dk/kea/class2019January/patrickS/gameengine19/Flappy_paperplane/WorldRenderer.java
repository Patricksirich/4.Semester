package dk.kea.class2019January.patrickS.gameengine19.Flappy_paperplane;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer
{
    GameEngine gameEngine;
    World world;
    Bitmap skylineImage;
    Bitmap planeImage;
    Bitmap pillarImage;

    public WorldRenderer(GameEngine ge, World w)
    {
        gameEngine = ge;
        world = w;
        skylineImage = gameEngine.loadBitmap("flappyplane/skyline.png");
        planeImage = null;  // indsæt pic
        pillarImage = null; // indsæt pic
    }

    public void render()
    {
        gameEngine.drawBitmap(skylineImage, world.paperplane.x, world.paperplane.y);

        /* INDSÆT SENERE
        for (int i = 0; i < ; i++)
        {

        }*/
    }

}
