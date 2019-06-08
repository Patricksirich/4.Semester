package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

public class Enemy
{
    public static int WIDTH = 70;
    public static int HEIGHT = 20;
    public float x;
    public float y;
    public static float vx = 0.2f;

    public Enemy(float x, float y)
    {
        this.x = x;
        this.y = y;
    }
}
