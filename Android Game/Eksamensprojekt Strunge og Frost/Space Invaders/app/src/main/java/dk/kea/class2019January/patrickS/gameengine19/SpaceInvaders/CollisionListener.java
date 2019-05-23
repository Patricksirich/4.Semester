package dk.kea.class2019January.patrickS.gameengine19.SpaceInvaders;

public interface CollisionListener {

    public void collisionWall();
    public void collisionSpaceship();
    public void collisionEnemy();
    public void collisionProjectile();
}
