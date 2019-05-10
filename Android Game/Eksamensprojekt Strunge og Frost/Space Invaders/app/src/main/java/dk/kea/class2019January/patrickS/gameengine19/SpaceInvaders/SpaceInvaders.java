package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class SpaceInvaders extends GameEngine {

    @Override
    public Screen createStartScreen() {


        // TODO: music = this.loadMusic(musikresource)
        return new MainMenuScreen(this);
    }

    public void onResume() {
        super.onResume();
        // music.play();
    }

    public void onPause() {
        super.onPause();
        //music.pause();
    }
}
