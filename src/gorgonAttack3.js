class gorgonAttack3 {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack3.png"), 0, 0, 128, 128, 10, 0.15);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 200);
    }
}