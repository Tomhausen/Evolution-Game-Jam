abstract class EnemySprite extends BaseSprite{
    
    private level: number;
    private countdownTime: number;
    private maxHealth: number;
    private hitsTaken = 0;
    private speed: number;
    private anim: Image[]

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

    public move() {
        
    }

    // have evolves into function in each that makes a new sprite and returns it

}