enum Directions {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}

class PlayerSprite extends BaseSprite{

    private speed = 100;
    private isAttacking = false;
    private isWalking = false;
    private direction = Directions.DOWN;
    
    constructor(){
        super(sprites.castle.heroWalkFront1, SpriteKind.Player);
        this.initialiseControls();
    }

    private initialiseControls(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function attack() {
            let frameLen = 100
            let attackLen = assets.animation`heroFrontAttack`.length
            animation.runImageAnimation(this.sprite, assets.animation`heroFrontAttack`, frameLen, false);
            this.isAttacking = true;
            timer.after(frameLen * attackLen, function stopAttacking(){this.isAttacking = false})
        })
    }
}