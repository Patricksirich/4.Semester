package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class SpaceInvaders extends GameEngine {

    @Override
    public Screen createStartScreen() {

        return new MainMenuScreen(this);
    }

}
