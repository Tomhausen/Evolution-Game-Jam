interface Coordinate{
    x: number,
    y: number
}

class Enemy{

    public enemySprite: EnemySprite;
    private level: number;
    public coordinate: Coordinate;
    public hitsTake = 0;

    constructor(enemySprite: EnemySprite, coordinate: Coordinate){
        this.enemySprite = enemySprite;
        this.coordinate = coordinate;
        this.level = this.enemySprite.level;
    }

    private takeDamage(){
        this.hitsTake += 1;
        if (this.hitsTake < 1){
            this.enemySprite.sprite.destroy();
            return;
        }
        // knockback
    }

    private position(){ // call this in on update
        this.coordinate.x = this.enemySprite.sprite.x;
        this.coordinate.y = this.enemySprite.sprite.y;
    }

    public evolve(){
        // need to know what we're evolving into
        let newEnemy = // evolves into func here
        this.enemySprite.sprite.destroy();
        this.enemySprite = newEnemy;

    }

    // in on update need to track the sprite pos and feed back into coord

}
