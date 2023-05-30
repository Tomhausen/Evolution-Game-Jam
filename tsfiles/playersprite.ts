class PlayerSprite extends BaseSprite{

    private speed = 100;
    private isAttack = false;
    private isWalking = false;
    
    constructor(){
        super(sprites.castle.heroFrontAttack1, SpriteKind.Player);
        this.initialiseControls();
    }

    private initialiseControls(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function attack() {
            animation.runImageAnimation(this.sprite, assets.animation`heroFrontAttack`, 100, false);
        })
    }
}