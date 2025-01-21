class title {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/Title.png"), 0, 0, 155, 47, 5, 0.125, false, true);
    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 0);
    }
}