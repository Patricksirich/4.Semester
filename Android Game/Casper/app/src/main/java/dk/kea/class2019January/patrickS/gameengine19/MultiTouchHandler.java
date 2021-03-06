package dk.kea.class2019January.patrickS.gameengine19;

import android.graphics.Bitmap;
import android.graphics.BitmapRegionDecoder;
import android.view.MotionEvent;
import android.view.View;

import java.util.List;

public class MultiTouchHandler implements TouchHandler, View.OnTouchListener
{
    private boolean[] isTouched = new boolean[20]; //store the first 20 touches
    private int[] touchX = new int[20];
    private int[] touchY = new int[20];

    private List<TouchEvent> toucheventbuffer; //buffer with touch event
    private TouchEventPool touchEventPool;     //pool with reusable TouchEvent objects

    public MultiTouchHandler(View v, List<TouchEvent> touchEventBuffer, TouchEventPool touchEventPool)
    {
        v.setOnTouchListener(this);
        this.toucheventbuffer = touchEventBuffer;
        this.touchEventPool = touchEventPool;
    }

    @Override
    public boolean onTouch(View v, MotionEvent event)
    {
        TouchEvent touchEvent = null;
        int action = event.getAction() & MotionEvent.ACTION_MASK;
        int pointerIndex = (event.getAction() & MotionEvent.ACTION_POINTER_INDEX_MASK) >> MotionEvent.ACTION_POINTER_INDEX_SHIFT;
        int pointerId = event.getPointerId(pointerIndex);

        switch (action)
        {
            case MotionEvent.ACTION_DOWN:
            case MotionEvent.ACTION_POINTER_DOWN:
                touchEvent = touchEventPool.obtains();
                touchEvent.type = TouchEvent.TouchEventType.Down;
                touchEvent.pointer = pointerId;
                touchEvent.x = (int) event.getX();
                touchX[pointerId] = touchEvent.x;
                touchEvent.y = (int) event.getY();
                touchY[pointerId] = touchEvent.y;
                isTouched[pointerId] = true;
                synchronized (toucheventbuffer)
                {
                    toucheventbuffer.add(touchEvent);
                }
                break;
            case MotionEvent.ACTION_UP:
            case MotionEvent.ACTION_POINTER_UP:
            case MotionEvent.ACTION_CANCEL:
                touchEvent = touchEventPool.obtains();
                touchEvent.type = TouchEvent.TouchEventType.Up;
                touchEvent.pointer = pointerId;
                touchEvent.x = (int) event.getX();
                touchX[pointerId] = touchEvent.x;
                touchEvent.y = (int) event.getY();
                touchY[pointerId] = touchEvent.y;
                isTouched[pointerId] = false;
                synchronized (toucheventbuffer)
                {
                    toucheventbuffer.add(touchEvent);
                }
                break;
            case MotionEvent.ACTION_MOVE:
                int pointerCount = event.getPointerCount();
                synchronized (toucheventbuffer)
                {
                    for (int i=0; i<pointerCount; i++)
                    {
                        touchEvent = touchEventPool.obtains();
                        touchEvent.type = TouchEvent.TouchEventType.Dragged;
                        touchEvent.pointer = pointerId;
                        touchEvent.x = (int) event.getX();
                        touchX[pointerId] = touchEvent.x;
                        touchEvent.y = (int) event.getY();
                        touchY[pointerId] = touchEvent.y;
                        isTouched[pointerId] = true;
                    }
                }
                break;


        }
        return true; //telling the Android system I did handle this onTouch event!
    }

    @Override
    public boolean isTouchDown(int pointer)
    {
        return isTouched[pointer];
    }

    @Override
    public int getTouchX(int pointer)
    {
        return touchX[pointer];
    }

    @Override
    public int getTouchY(int pointer)
    {
        return touchY[pointer];
    }

}
