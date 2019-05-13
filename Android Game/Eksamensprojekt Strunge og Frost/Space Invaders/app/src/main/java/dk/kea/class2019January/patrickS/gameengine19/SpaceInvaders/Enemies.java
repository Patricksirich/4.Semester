package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

public class Enemies {

    public static final int WIDTH = 32;
    public static final int HEIGHT = 16;
    public float x = 0;
    public float y = 0;
    public int intialSpeed = 150;
    public float vx = 50;
    public float vy = -50;

    public Enemies(float x, float y) {
        this.x = x;
        this.y = y;
    }
}
