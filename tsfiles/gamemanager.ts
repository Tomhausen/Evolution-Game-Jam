class GameManager{

    private playerSprite: PlayerSprite;

    constructor(){
        this.setUpSprites();
    }

    private setUpSprites(){
        this.playerSprite = new PlayerSprite();
    }

}