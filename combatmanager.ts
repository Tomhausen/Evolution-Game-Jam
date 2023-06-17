class CombatManager{

    constructor() {
        this.setupEvents();
    }

    private setupEvents() {
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
            if (player.data.invincibilityFrames) {
                return;
            }
            if (player.data.isAttacking) {
                enemy.data.takeDamage();
                enemy.data.knockBack();
            }
            else {
                player.data.takeDamage();
                enemy.data.move();
            }
        })
    }

}