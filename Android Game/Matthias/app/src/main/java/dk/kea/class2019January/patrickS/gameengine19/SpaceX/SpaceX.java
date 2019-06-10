package dk.kea.class2019January.patrickS.gameengine19.SpaceX;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class SpaceX extends GameEngine
{
    @Override
    public Screen createStartScreen()
    {
        music = this.loadMusic("breakout/music.ogg"); // start music
        return new MainMenuScreen(this);
    }

    public void onResume()
    {
        super.onResume();
        music.play();
    }

    public void onPause()
    {
        super.onPause();
        music.pause();
    }
}
