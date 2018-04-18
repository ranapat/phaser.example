namespace MyGame.Components {
    export class Card extends Phaser.Sprite {
        private covered: Phaser.Graphics;
        private uncovered: Phaser.Sprite;
        private uncoveredMask: Phaser.Graphics;

        private pattern: Phaser.Graphics;

        private scratchMode: boolean;

        constructor(game: Phaser.Game, x:number, y:number, ...args: any[]) {
            super(game, x, y, ...args);

            this.initialize();
        }

        private initialize(): void {
            this.initializeUI();

            this.handleEvents();
        }

        private initializeUI(): void {
            const game: Phaser.Game = this.game;

            this.uncovered = new Phaser.Sprite(game, 0, 0, 'card');

            this.covered = new Phaser.Graphics(game, 0, 0);
            this.covered.beginFill(0x808080);
            this.covered.drawRect(0, 0, this.uncovered.width, this.uncovered.height);
            this.covered.endFill();

            this.uncoveredMask = new Phaser.Graphics(game, 0, 0);
            this.uncoveredMask.beginFill(0xff00ff);
            this.uncoveredMask.drawRect(0, 0, 0, 0);
            this.uncoveredMask.endFill();

            this.addChild(this.covered);
            this.addChild(this.uncovered);
            this.addChild(this.uncoveredMask);

            this.uncovered.mask = this.uncoveredMask;
        }

        private handleEvents(): void {
            this.covered.inputEnabled = true;

            this.covered.events.onInputDown.add(this.handleDown, this);
            this.covered.events.onInputUp.add(this.handleUp, this);
            this.game.input.addMoveCallback(this.handleMove, this);
        }

        private handleMove(pointer: Phaser.Pointer, x: number, y: number): void {
            if (this.scratchMode) {
                this.uncoveredMask.beginFill(0xff00ff);
                this.uncoveredMask.lineStyle(20, 0xff00ff, 1);
                this.uncoveredMask.lineTo(pointer.position.x - this.x, pointer.position.y - this.y);
                this.uncoveredMask.endFill();

            }
        }

        private handleDown(target: any, pointer: Phaser.Pointer): void {
            this.scratchMode = true;

            this.uncoveredMask.lineTo(pointer.position.x - this.x, pointer.position.y - this.y);
        }

        private handleUp(): void {
            this.scratchMode = false;
        }


    }

}
