/// <reference path="ScratchCard.ts" />

namespace MyGame.States {
    import ScratchCard = States.ScratchCard;

    export class Preloader extends Phaser.State {
        public static STATE:string = 'Preloader';

	private preloadBar: Phaser.Sprite;

	public preload() {
	    this.preloadBar = this.add.sprite(300, 400, 'preloadBar');

	    this.load.setPreloadSprite(this.preloadBar);

	    this.load.image('background', 'assets/background.jpg');
	    this.load.image('card', 'assets/card.jpg');
	}

	public create() {
	    this.game.state.start(ScratchCard.STATE);
	}
    }
}
