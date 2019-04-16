package dk.kea.class2019January.patrickS.gameengine19.Flappy_paperplane;
import java.util.ArrayList;
import java.util.List;

import dk.kea.class2019January.patrickS.gameengine19.Breakout.CollisionListener;
import dk.kea.class2019January.patrickS.gameengine19.GameEngine;

public class World
{
    Paperplane paperplane = new Paperplane();
    List<Pillar> pillarList = new ArrayList<>();

    GameEngine gameEngine;
    CollisionListener collisionListener;

    boolean gameOver = false;
    int points = 0;
    int backgroundSpeed = 0;
}
