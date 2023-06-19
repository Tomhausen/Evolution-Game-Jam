class GameManager {

    private playerSprite: PlayerSprite;

    constructor() {
        this.setUpSprites();
        new CombatManager();
        scene.setBackgroundColor(1)
    }

    private setUpSprites() {
        this.playerSprite = new PlayerSprite();
        this.playerSprite.sprite.setPosition(20, 20);
        let enemy = new BaseOne({ x: 140, y: 100 });
    }

}