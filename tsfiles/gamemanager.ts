class GameManager{

    private playerSprite: PlayerSprite;

    constructor(){
        this.setUpSprites();
        new CombatManager;
        scene.setBackgroundColor(1)
    }

    private setUpSprites(){
        this.playerSprite = new PlayerSprite();
    }

}