abstract class BaseEnemy extends EnemySprite {

    anim = assets.animation`base enemy anim`;
    maxLevel = 3;

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

class BaseOne extends BaseEnemy {

    level = 1;
    countdownTime = 10000;
    maxHealth = 5;
    speed = 20;

    constructor(pos: Coordinate) {
        super(pos);
    }

    evolve() {
        let newEnemy = new BaseTwo(this.getPosition());
        this.sprite.destroy()
        return newEnemy;
    }

}

class BaseTwo extends BaseEnemy {

    level = 2;
    countdownTime = 10000;
    maxHealth = 10;
    speed = 25;

    constructor(pos: Coordinate) {
        super(pos);
    }

    public evolve() {
        let newEnemy = new BaseThree(this.getPosition());
        this.sprite.destroy()
        return newEnemy;
    }

}

class BaseThree extends BaseEnemy {

    level = 3;
    countdownTime = 10000;
    maxHealth = 15;
    speed = 30;

    constructor(pos: Coordinate) {
        super(pos);
    }

    public evolve() {
        // no more evolutions
    }

}