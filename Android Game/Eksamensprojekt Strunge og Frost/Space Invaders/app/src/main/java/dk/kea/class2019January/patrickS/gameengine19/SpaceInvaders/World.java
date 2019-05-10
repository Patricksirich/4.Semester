package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

public class World
{
    public static float MIN_X = -20;
    public static float MAX_X = 499;
    public static float MIN_Y = 36;
    public static float MAX_Y = 799;

    Spaceship spaceship = new Spaceship();

    public void update(boolean isTouch, int touchX)
    {

        // used for moving the spaceship with touch
        if(isTouch)
        {
            spaceship.x = touchX - Spaceship.WIDTH / 2;
        }

        // statements to make sure the spaceship stays in the screen
        if(spaceship.x < MIN_X) spaceship.x = MIN_X;
        if(spaceship.x + Spaceship.WIDTH > MAX_X) spaceship.x = MAX_X - Spaceship.WIDTH;

    }
}
