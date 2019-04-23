package dk.kea.class2019January.patrickS.gameengine19.Flappy_paperplane;

import dk.kea.class2019January.patrickS.gameengine19.GameEngine;
import dk.kea.class2019January.patrickS.gameengine19.Screen;

public class FlappyPlane extends GameEngine
{

    @Override
    public Screen createStartScreen()
    {
        music = this.loadMusic("carscroller/music.ogg");
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
