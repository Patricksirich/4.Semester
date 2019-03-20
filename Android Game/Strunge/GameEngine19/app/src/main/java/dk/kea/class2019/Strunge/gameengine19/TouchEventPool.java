package dk.kea.class2019.Strunge.gameengine19;

import dk.kea.class2019.Strunge.gameengine19.Pool;
import dk.kea.class2019.Strunge.gameengine19.TouchEvent;

public class TouchEventPool extends Pool<TouchEvent>
{
    @Override
    protected TouchEvent newItem()
    {
        return new TouchEvent();
    }
}
