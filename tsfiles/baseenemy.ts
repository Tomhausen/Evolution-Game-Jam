abstract class BaseEnemy extends EnemySprite{

    anim = assets.animation`base enemy anim`;

    constructor(pos: Coordinate) {
        super(assets.image`placeholder`, pos);
        this.sprite.setImage(this.anim[0]);
        this.move();
    }

    move() {
        let player = sprites.allOfKind(SpriteKind.Player)[0];
        tilesAdvanced.followUsingPathfinding(this.sprite, player, this.speed);
    }

}

class BaseOne extends BaseEnemy{

    level = 1;
    countdownTime = 10000;
    maxHealth = 5;
    speed = 20;

    constructor(pos: Coordinate) {
        super(pos);
    }

    private setupEvolution() {
        timer.after(this.countdownTime, this.evolve);
    }

    evolve() {
        // oh no, how does the container know its time to evolve    
    }

}