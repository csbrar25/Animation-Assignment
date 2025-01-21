class reinaIdle {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = this.idleRight();
    };

    update() {

    };

    idleLeft() {
        return new animator(ASSET_MANAGER.getAsset("../resources/Reina.png"), 384, 0, 64, 64, 6, 0.125, true, true);
    }

    idleRight() {
        return new animator(ASSET_MANAGER.getAsset("../resources/Reina.png"), 0, 0, 64, 64, 6, 0.125, false, true);
    }
    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 300, 20);
    }
}