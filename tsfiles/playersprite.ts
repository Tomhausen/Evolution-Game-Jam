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
    private walkAnimDict = {
        0: assets.animation`heroWalkUp`,
        1: assets.animation`heroWalkDown`,
        2: assets.animation`heroWalkLeft`,
        3: assets.animation`heroWalkRight`,
    }
    
    constructor(){
        super(sprites.castle.heroWalkFront1, SpriteKind.Player);
        this.initialiseControls();
        this.sprite.setStayInScreen(true); // test code remove
    }

    private initialiseControls(){
        this.initialiseAttack();
        controller.moveSprite(this.sprite, this.speed, this.speed);
        this.initialiseMove();
    }

    private initialiseAttack(){
        controller.A.onEvent(ControllerButtonEvent.Pressed, function(): void {
            if (!this.isAttacking){
                let anim: Image[];
                anim = this.attackAnimDict[this.direction];
                let frameLen = 100;
                let attackLen = anim.length;
                console.log(this.direction);
                console.log(anim.length);
                animation.runImageAnimation(this.sprite, anim, frameLen, false);
                this.isAttacking = true;
                timer.after(frameLen * attackLen, function () { this.isAttacking = false })
            }
        })
    }

    private initialiseMove(){
        game.onUpdate(function(){
            this.getDirection();
            this.animateWalking();
        })
    }

    private getDirection() {
        if (controller.left.isPressed()) {
            this.direction = Directions.LEFT;
        }
        else if (controller.right.isPressed()) {
            this.direction = Directions.RIGHT;
        }
        else if (controller.down.isPressed()) {
            this.direction = Directions.DOWN;
        }
        else if (controller.up.isPressed()) {
            this.direction = Directions.UP;
        }
    }

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
            animation.stopAnimation(animation.AnimationTypes.All, this.sprite);
            this.isWalking = false;
        }
    }
}