enum Directions {
    UP = 0,
    DOWN = 1,
    LEFT = 2,
    RIGHT = 3
}

class PlayerSprite extends BaseSprite{

    private speed = 75;
    public isAttacking = false;
    private isWalking = false;
    private direction = Directions.DOWN;
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
        this.initialiseMove();
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
                    this.isWalking = false;
                })
            }
        })
    }
    
    private initialiseMove(){
        controller.moveSprite(this.sprite, this.speed, this.speed);
        game.onUpdate(function(){
            this.getDirection();
            this.animateWalking();
        })
    }

    private getDirection() {
        if (controller.left.isPressed() && this.direction != Directions.LEFT) {
            this.direction = Directions.LEFT;
            this.isWalking = false;
        }
        else if (controller.right.isPressed() && this.direction != Directions.RIGHT) {
            this.direction = Directions.RIGHT;
            this.isWalking = false;
        }
        else if (controller.down.isPressed() && this.direction != Directions.DOWN) {
            this.direction = Directions.DOWN;
            this.isWalking = false;
        }
        else if (controller.up.isPressed() && this.direction != Directions.UP) {
            this.direction = Directions.UP; 
            this.isWalking = false;
        }
    }

// TODO: can now be a spinning top with diagonal movement

    private animateWalking(){
        if (this.sprite.vx != 0 || this.sprite.vy != 0) {
            if (!this.isAttacking && !this.isWalking){
                let anim: Image[];
                anim = this.walkAnimDict[this.direction];
                animation.runImageAnimation(this.sprite, anim, 100, true);
                this.isWalking = true;
            }
        }
        else {
            this.isWalking = false;
            if (!this.isAttacking){
                animation.stopAnimation(animation.AnimationTypes.All, this.sprite);
            }
        }
    }
}