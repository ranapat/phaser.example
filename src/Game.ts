/// <reference path="States/Boot.ts" />
/// <reference path="States/Preloader.ts" />
/// <reference path="States/ScratchCard.ts" />

namespace MyGame {
    import Boot = States.Boot;
    import Preloader = States.Preloader;
    import ScratchCard = States.ScratchCard;

    export class Game extends Phaser.Game {
	constructor() {
	    super(600, 800, Phaser.AUTO, 'content', null);

	    this.state.add(Boot.STATE, Boot, false);
	    this.state.add(Preloader.STATE, Preloader, false);
	    this.state.add(ScratchCard.STATE, ScratchCard, false);

	    this.state.start(Boot.STATE);
	}

    }

}
