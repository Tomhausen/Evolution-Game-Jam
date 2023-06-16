abstract class EnemySprite extends BaseSprite{
    
    public level: number;
    public countdownTime: number;
    public maxHealth: number;
    public hitsTaken = 0;
    public speed: number;
    public anim: Image[]

    constructor(anim: Image, pos: Coordinate) {
        super(anim, SpriteKind.Enemy);
        this.setPosition(pos);
    }

    public setPosition(coordinate: Coordinate){
        this.sprite.setPosition(coordinate.x, coordinate.y);
    }

    private takeDamage(){
        this.hitsTaken += 1;
        if (this.hitsTaken >= this.maxHealth){
            this.sprite.destroy();
        }
    }

    public knockBack(player: Sprite){
        tilesAdvanced.followUsingPathfinding(this.sprite, player, 0);
        animation.stopAnimation(animation.AnimationTypes.All, this.sprite);
        if (player.data.direction == Directions.UP) {
            this.sprite.vy = -50;
        }
        else if (player.data.direciton == Directions.DOWN) {
            this.sprite.vy = 50;
        }
        else if (player.data.direciton == Directions.LEFT) {
            this.sprite.vx = -50;
        }
        else if (player.data.direction == Directions.RIGHT) {
            this.sprite.vx = 50
        }
        pause(1000);
        this.move()
    }

    public abstract move(): any;

    public abstract evolve(): any;

    // have evolves into function in each that makes a new sprite and returns it

}