class reinaIdle {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/Reina.png"), 0, 0, 64, 64, 6, 0.125);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 300, 20);
    }
}