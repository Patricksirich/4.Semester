package dk.kea.class2019.Strunge.gameengine19;

public class Breakout extends GameEngine
{

    @Override
    public Screen createStartScreen()
    {
        return new MainMenuScreen(this);
    }
}
