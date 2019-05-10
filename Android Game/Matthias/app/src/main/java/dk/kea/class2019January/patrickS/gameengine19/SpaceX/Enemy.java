package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

public class Enemy
{
    public static float WIDTH = 40;
    public static float HEIGHT = 18;
    public float x;
    public float y;
    public int type;

    public Enemy(float x, float y, int type)
    {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}
