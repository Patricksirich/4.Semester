package dk.kea.class2019January.patrickS.gameengine19.Carscroller;

import android.graphics.Bitmap;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class WorldRenderer
{
    GameEngine gameEngine;
    World world;
    Bitmap carImage;
    Bitmap monsterImage;

    public WorldRenderer(GameEngine ge, World w)
    {
        gameEngine = ge;
        world = w;
        carImage = gameEngine.loadBitmap("Carscroller/xbluecar2.png");
        monsterImage = gameEngine.loadBitmap("Carscroller/xyellowmonster2.png");
    }

    public void render()
    {
        gameEngine.drawBitmap(carImage, world.car.x, world.car.y);

        for (int i = 0; i < world.monsterList.size(); i++)
        {
            gameEngine.drawBitmap(monsterImage, world.monsterList.get(i).x, world.monsterList.get(i).y);
        }
    }
}
