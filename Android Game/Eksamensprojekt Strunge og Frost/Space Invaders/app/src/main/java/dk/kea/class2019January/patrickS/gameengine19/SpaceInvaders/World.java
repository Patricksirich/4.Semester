package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

public class World
{
    public static float MIN_X = 0;
    public static float MAX_X = 319;
    public static float MIN_Y = 36;
    public static float MAX_Y = 479;

    Spaceship spaceship = new Spaceship();

    public void update(boolean isTouch, int touchX)
    {
        if(isTouch)
        {
            spaceship.x = touchX - Spaceship.WIDTH / 2;
        }
        if(spaceship.x < MIN_X) spaceship.x = MIN_X;
        if(spaceship.x + Spaceship.WIDTH > MAX_X) spaceship.x = MAX_X - Spaceship.WIDTH;

    }
}
