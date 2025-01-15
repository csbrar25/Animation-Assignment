class gorgonAttack2 {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack2.png"), 0, 0, 128, 128, 7, 0.15);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 200);
    }
}