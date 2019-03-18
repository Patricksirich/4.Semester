package dk.kea.class2019January.patrickS.gameengine19;

public class World {

    public static float MIN_X = 0;
    public static float MIN_Y = 36;
    public static float MAX_X = 319;
    public static float MAX_Y = 479;

    Ball ball = new Ball();
    Paddle paddle = new Paddle();

    public void update(float deltaTime, float accelX) {


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

        if (ball.y > MAX_Y - Ball.HEIGHT) {
            ball.vy = -ball.vy;
            ball.y = MAX_Y - Ball.HEIGHT;
        }

        paddle.x = paddle.x - accelX * 50 * deltaTime;

        if (paddle.x < MIN_X) paddle.x = MIN_X;
        if (paddle.x + Paddle.WIDTH > MAX_X) paddle.x = MAX_X - Paddle.WIDTH;
    }

}
