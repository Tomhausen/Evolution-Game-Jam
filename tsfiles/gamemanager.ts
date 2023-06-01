class GameManager{

    private playerSprite: PlayerSprite;

    constructor(){
        this.setUpSprites();
        scene.setBackgroundColor(1)
    }

    private setUpSprites(){
        this.playerSprite = new PlayerSprite();
    }

}