abstract class EnemySprite extends BaseSprite{
    
    public level: number;
    public countdownTime: number;
    public evolvesInto: EnemySprite;
    public maxHealth: number;
    private speed: number;

    public position(coordinate: Coordinate){
        this.sprite.setPosition(coordinate.x, coordinate.y);
    }

    public knockBack(player: Sprite){
        // stop moving
        // find dir to move in
        // move
        // resume chasing
    }

    // have evolves into function in each that makes a new sprite and returns it

}