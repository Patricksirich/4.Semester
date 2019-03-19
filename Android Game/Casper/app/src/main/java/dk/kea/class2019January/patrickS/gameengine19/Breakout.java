package dk.kea.class2019January.patrickS.gameengine19;

public class Breakout extends GameEngine {

    @Override
    public Screen createStartScreen() {

        return new MainMenuScreen(this);
    }
}
