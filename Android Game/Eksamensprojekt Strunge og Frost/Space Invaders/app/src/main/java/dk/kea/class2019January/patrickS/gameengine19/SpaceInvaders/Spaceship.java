package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

public class Spaceship {
    public static final float WIDTH = 90;
    public static final float HEIGHT = 40;
    public float x;
    public float y;

    // determines the start-position of the spaceship
    public Spaceship()
    {
        x = 120;
        y = 300 - HEIGHT/2;
    }
}
