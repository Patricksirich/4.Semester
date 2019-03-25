package dk.kea.class2019January.patrickS.gameengine19;

import java.util.ArrayList;
import java.util.List;

public class World {

    public static float MIN_X = 0;
    public static float MIN_Y = 36;
    public static float MAX_X = 319;
    public static float MAX_Y = 479;

    Ball ball = new Ball();
    Paddle paddle = new Paddle();
    List<Block> blocks = new ArrayList<>();

    int level = 1;
    int hits = 0;

    public World() {
        generateBlocks();
    }

    public void update(float deltaTime, float accelX, boolean isTouch, int touchX) {


        //Ball movement
        ball.x = ball.x + ball.vx * deltaTime;
        ball.y = ball.y + ball.vy * deltaTime;

        //Makes ball bounce off walls
        if (ball.x < MIN_X) {
            ball.vx = -ball.vx;
            ball.x = MIN_X;
        }
        if (ball.x > MAX_X - Ball.WIDTH) {
            ball.vx = -ball.vx;
            ball.x = MAX_X - Ball.WIDTH;
        }

        if (ball.y < MIN_Y) {
            ball.vy = -ball.vy;
            ball.y = MIN_Y;
        }

//        if (ball.y > MAX_Y - Ball.HEIGHT) {
//            ball.vy = -ball.vy;
//            ball.y = MAX_Y - Ball.HEIGHT;
//        }

        // move paddle based on phone tilt
        paddle.x = paddle.x - accelX * 50 * deltaTime;

        // move paddle based on touch, only for testing in emulator
        if (isTouch) {
            paddle.x = touchX - Paddle.WIDTH / 2;
        }
        // make sure paddle does not go off the edge of the screen
        if (paddle.x < MIN_X) paddle.x = MIN_X;
        if (paddle.x + Paddle.WIDTH > MAX_X) paddle.x = MAX_X - Paddle.WIDTH;

        collideBallPaddle(deltaTime);
        collideBallBlocks(deltaTime);

        if (blocks.size() == 0) {
            generateBlocks();
            ball.x = 160;
            ball.y = 320 - 40;
            ball.vy = -Ball.initialSpeed;
        }

    }   // end of update() method

    private void collideBallPaddle(float deltaTime) {
        if (ball.y > paddle.y + Paddle.HEIGHT) return;
        if ((ball.x + Ball.WIDTH >= paddle.x) && (ball.x < paddle.x + Paddle.WIDTH) && (ball.y + Ball.HEIGHT > paddle.y)) {

            ball.y = ball.y - ball.vy * deltaTime * 1.01f;
            ball.vy = -ball.vy;
            hits++;

            if (hits == 5) {

                hits = 0;
                if (level == 2) {
                    advanceBlocks();
                }
            }
        }
    }

    private void collideBallBlocks(float deltaTime) {

        Block block = null;
        for (int i = 0; i < blocks.size(); i++) {
            block = blocks.get(i);
            if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y, Block.WIDTH, Block.HEIGHT)) {
                blocks.remove(i);

                float oldvx = ball.vx;
                float oldvy = ball.vy;

                reflectBall(ball, block);

                ball.x = ball.x - oldvx * deltaTime * 1.01f; //back out the ball with 1% to avoid multiple interactions
                ball.y = ball.y - oldvy * deltaTime * 1.01f;
                break; // no need to check collision with other blocks when it hits this block
            }
        }
    }

    private void reflectBall(Ball ball, Block block) {

        //check if ball hits the top left corner of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y, 1, 1)) {

            if (ball.vx > 0) ball.vx = -ball.vx;
            if (ball.vy > 0) ball.vy = -ball.vy;
            return;
        }

        //check if ball hits the top right corner of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x + Block.WIDTH, block.y, 1, 1)) {

            if (ball.vx < 0) ball.vx = -ball.vx;
            if (ball.vy > 0) ball.vy = -ball.vy;
            return;
        }

        //check if ball hits the bottom left corner of the block
        if (collideRectangles(block.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y + Block.HEIGHT, 1, 1)) {

            if (ball.x > 0) ball.vx = -ball.vx;
            if (ball.y < 0) ball.vy = -ball.vy;
            return;
        }

        //check if the ball hits the bottom right corner of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x + Block.WIDTH, block.y + Block.HEIGHT, 1, 1)) {

            if (ball.x < 0) ball.vx = -ball.vx;
            if (ball.y < 0) ball.vy = -ball.vy;
            return;
        }
        //check the top edge of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y, Block.WIDTH, 1)) {

            if (ball.vy > 0) ball.vy = -ball.vy;
            return;
        }
        //check the bottom edge of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y + Block.HEIGHT, Block.WIDTH, 1)) {

            if (ball.vy < 0) ball.vy = -ball.vy;
            return;
        }
        //check the left edge of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x, block.y, 1, Block.HEIGHT)) {

            if (ball.vx > 0) ball.vx = -ball.vx;
            return;
        }
        //check the right edge of the block
        if (collideRectangles(ball.x, ball.y, Ball.WIDTH, Ball.HEIGHT, block.x + Block.WIDTH, block.y, 1, Block.HEIGHT)) {

            if (ball.vx < 0) ball.vx = -ball.vx;
        }


    }

    private boolean collideRectangles(float x, float y, float width, float height,
                                      float x2, float y2, float width2, float height2) {

        if (x < x2 + width2 && x + width > x2 && y < y2 + height2 && y + height > y2) {

            return true;
        }

        return false;
    }

    private void generateBlocks() {

        blocks.clear();
        for (int y = 50, type = 0; y < 50 + 8 * Block.HEIGHT; y = y + (int) Block.HEIGHT + 2, type++) {
            for (int x = 30; x < 320 - Block.WIDTH; x = x + (int) Block.WIDTH + 4) {
                blocks.add(new Block(x, y, type));
            }
        }
    }

    private void advanceBlocks() {

        Block block;
        int stop = blocks.size();
        for (int i = 0; i < stop; i++) {
            block = blocks.get(i);
            block.y = block.y + 10;
        }
    }
}
