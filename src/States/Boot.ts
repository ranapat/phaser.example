/// <reference path="Preloader.ts" />

namespace MyGame.States {
    import Preloader = States.Preloader;

    export class Boot extends Phaser.State {
        public static STATE:string = 'Boot';

	public init() {
	    this.input.maxPointers = 1;

	    this.stage.disableVisibilityChange = true;

	    if (this.game.device.desktop) {
		this.scale.pageAlignHorizontally = true;
	    } else {
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.setMinMax(480, 260, 1024, 768);
		this.scale.forceLandscape = true;
		this.scale.pageAlignHorizontally = true;
	    }
	}

	public preload() {
	    this.load.image('preloadBar', 'assets/loader.png');
	}

	public create() {
	    this.game.state.start(Preloader.STATE);
	}
    }
}
