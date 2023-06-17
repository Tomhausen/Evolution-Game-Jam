enum Directions {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}

class PlayerSprite extends BaseSprite{

    private speed = 75;
    public isAttacking = false;
    private direction = Directions.DOWN;
    private currentAnim: Image[];
    public invincibilityFrames = false;
    private attackAnimDict = { 
        0: assets.animation`heroUpAttack`,
        1: assets.animation`heroDownAttack`,
        2: assets.animation`heroLeftAttack`,
        3: assets.animation`heroRightAttack`,
    }
    private walkAnimDict = {
        0: assets.animation`heroWalkUp`,
        1: assets.animation`heroWalkDown`,
        2: assets.animation`heroWalkLeft`,
        3: assets.animation`heroWalkRight`,
    }
    
    constructor(){
        super(assets.animation`heroWalkDown`[0], SpriteKind.Player);
        this.initialiseControls();
        this.sprite.setStayInScreen(true); // test code remove
    }

    private initialiseControls(){
        this.initialiseAttack();
        this.initialiseMovement();
    }

    private initialiseAttack(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function(): void {
            if (!this.isAttacking){
                let anim: Image[];
                anim = this.attackAnimDict[this.direction];
                let frameLen = 100;
                let attackLen = anim.length;
                animation.runImageAnimation(this.sprite, anim, frameLen, false);
                this.isAttacking = true;
                timer.after(frameLen * attackLen, function () { 
                    this.isAttacking = false;
                })
            }
        })
    }
    
    private initialiseMovement(){
        controller.moveSprite(this.sprite, this.speed, this.speed);
        game.onUpdate(function(){
            this.getDirection();
            this.animateWalking();
        })
    }

    private getDirection() {
        if (controller.left.isPressed() ) {
            this.direction = Directions.LEFT;
        }
        else if (controller.right.isPressed() ) {
            this.direction = Directions.RIGHT;
        }
        else if (controller.down.isPressed() ) {
            this.direction = Directions.DOWN;
        }
        else if (controller.up.isPressed() ) {
            this.direction = Directions.UP;
        }
}


    private animateWalking(){
        if (this.sprite.vx != 0 || this.sprite.vy != 0) {
            let newAnim: Image[];
            newAnim = this.walkAnimDict[this.direction];
            if (!this.isAttacking && this.currentAnim != newAnim){
                this.currentAnim = this.walkAnimDict[this.direction];
                animation.runImageAnimation(this.sprite, this.currentAnim, 100, true);
            }
        }
        else {
            if (!this.isAttacking){
                animation.stopAnimation(animation.AnimationTypes.All, this.sprite);
            }
        }
    }

    public takeDamage() {
        info.changeLifeBy(-1); // workout based on enemy
        this.invincibilityFrames = true;
        for (let i = 0; i < 3; i++){
            this.sprite.setFlag(SpriteFlag.Invisible, true);
            pause(50);
            this.sprite.setFlag(SpriteFlag.Invisible, false);
            pause(50)
        }
        this.invincibilityFrames = false;
    }

}