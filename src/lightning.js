class lightning {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/Lightning.png"), 0, 0, 64, 128, 10, 0.125);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 500, 20);
    }
}