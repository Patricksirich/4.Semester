package dk.kea.class2019January.patrickS.gameengine19;

import android.view.MotionEvent;
import android.view.View;

import java.util.List;

public class MultiTouchHandler implements TouchHandler, View.OnTouchListener
{
    private boolean[] isTouched = new boolean[20]; //store the first 20 touches
    private int[] touchX = new int[20];
    private int[] touchY = new int[20];

    private List<TouchEvent> toucheventbuffer; //buffer with touch event
    private TouchEventPool touchEventPool;

    @Override
    public boolean isTouchDown(int pointer)
    {
        return false;
    }

    @Override
    public int getTouchX(int pointer)
    {
        return 0;
    }

    @Override
    public int getTouchY(int pointer)
    {
        return 0;
    }

    @Override
    public boolean onTouch(View view, MotionEvent motionEvent)
    {
        return false;
    }
}
