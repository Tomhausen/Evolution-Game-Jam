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
    private attackAnimDict = { 
        0: assets.animation`heroUpAttack`,
        1: assets.animation`heroDownAttack`,
        2: assets.animation`heroLeftAttack`,
        3: assets.animation`heroRightAttack`,
    }
    
    constructor(){
        super(sprites.castle.heroWalkFront1, SpriteKind.Player);
        this.initialiseControls();
    }

    private initialiseControls(){
        this.attack();
    }

    private attack(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function(): void {
            let anim: Image[];
            anim = this.attackAnimDict[this.direction];
            let frameLen = 100
            let attackLen = anim.length
            animation.runImageAnimation(this.sprite, anim, frameLen, false);
            this.isAttacking = true;
            timer.after(frameLen * attackLen, function () { this.isAttacking = false })
        })
    }
}