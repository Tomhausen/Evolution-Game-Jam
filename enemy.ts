interface Coordinate {
    x: number,
    y: number
}

// This class exists to create persistence between enemies through evolution

class Enemy {

    public enemySprite: EnemySprite;
    public hitsTaken: number;

    constructor(enemySprite: EnemySprite, coordinate: Coordinate) {
        this.enemySprite = enemySprite;
        this.enemySprite.setPosition(coordinate);
    }

    private setupEvolution() {
        if (this.enemySprite.level < this.enemySprite.maxLevel) {
            timer.after(this.enemySprite.countdownTime, this.evolve());
        }
    }

    private evolve(): any {
        this.hitsTaken = this.enemySprite.hitsTaken; // store hit take
        this.enemySprite = this.enemySprite.evolve(); // make and set new sprite
        this.enemySprite.setHealth(this.hitsTaken); // pass on hits taken
        this.setupEvolution(); // is there a better way than this?
    }

}
