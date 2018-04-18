/// <reference path="../Components/Card.ts" />

namespace MyGame.States {
    import Card = Components.Card;

    export class ScratchCard extends Phaser.State {
        public static STATE:string = 'ScratchCard';

	private background: Phaser.Sprite;
        private card: Card;

	public create() {
	    this.background = this.add.sprite(0, 0, 'background');
	    this.background.alpha = 0;

	    this.add
                .tween(this.background)
                .to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true)
                .onComplete.add(this.startGame, this);
	}

	public startGame() {
            this.card = new Card(this.game, 0, 0);
            this.game.add.existing(this.card);
            this.card.x = (600 - 480) / 2;
            this.card.y = (800 - 640) / 2;
	}

    }

}
