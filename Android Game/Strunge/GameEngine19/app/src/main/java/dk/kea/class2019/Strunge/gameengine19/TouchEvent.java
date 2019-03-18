package dk.kea.class2019.Strunge.gameengine19;

public class TouchEvent
{
    public enum TouchEventType
    {
        Down,
        Up,
        Dragged
    }

    public TouchEventType type; //Type of event
    public int x;               //X-coordinate of event
    public int y;               //Y-coordinate of event
    public int pointer;         //Pointer ID (from the Android system)

}
