package dk.kea.class2019January.patrickS.gameengine19.Flappy_paperplane;
import java.util.ArrayList;
import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class World
{
    public static final float MIN_X = 0;
    public static final float MAX_X = 479;
    public static final float MIN_Y = 30;
    public static final float MAX_Y = 285;
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
        /*if(gameEngine.isTouchDown(0))
        {
            paperplane.y = gameEngine.getTouchY(0) - paperplane.HEIGHT;
        }*/
    }

}
