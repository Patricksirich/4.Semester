package dk.kea.class2019January.patrickS.gameengine19.Flappy_paperplane;
import java.util.ArrayList;
import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class World
{
    Paperplane paperplane = new Paperplane();
    List<Pillar> pillarList = new ArrayList<>();

    GameEngine gameEngine;
    CollisionListener listener;

    boolean gameOver = false;
    int points = 0;
    int backgroundSpeed = 0;

    public World(GameEngine gameEngine, CollisionListener listener, int backgroundSpeed)
    {
        this.gameEngine = gameEngine;
        this.listener = listener;
        this.backgroundSpeed = backgroundSpeed;
    }

    public void update(float deltaTime){
        if(gameEngine.isTouchDown(0))
        {
            paperplane.y = gameEngine.getTouchY(0) - paperplane.HEIGHT;
        }
    }

}
