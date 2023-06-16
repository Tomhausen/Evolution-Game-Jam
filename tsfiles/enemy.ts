interface Coordinate{
    x: number,
    y: number
}

class Enemy{

    public enemySprite: EnemySprite;
    public coordinate: Coordinate;
    public hitsTake: number;

    constructor(enemySprite: EnemySprite, coordinate: Coordinate) {
        this.enemySprite = enemySprite;
        this.coordinate = coordinate;
        this.enemySprite.setPosition(coordinate);
    }

    private getPosition(){ // call this in on update
        this.coordinate.x = this.enemySprite.sprite.x;
        this.coordinate.y = this.enemySprite.sprite.y;
    }

    public evolve(){
        // need to know what we're evolving into
        let newEnemy = // evolves into func here
        this.enemySprite.sprite.destroy();
        // this.enemySprite = newEnemy;

    }

    // in on update need to track the sprite pos and feed back into coord

}
