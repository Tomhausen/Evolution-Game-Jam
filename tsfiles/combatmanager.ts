class CombatManager{



    private setupEvents() {
        sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (player, enemy) {
            if (player.data.invincibilityFrames) {
                return;
            }
            if (player.data.isAttacking) {
                // enemy knock back
                // enemy take damage
            }
            else {
                // player take damage
            }
        })
    }

}