class azucendaIdle {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = this.idleLeft()
    };

    update() {

    };

    idleLeft() {
        return new animator(ASSET_MANAGER.getAsset("../resources/Azucena.png"), 576, 0, 64, 64, 9, 0.125, true, false);
    }

    idleRight() {
        return new animator(ASSET_MANAGER.getAsset("../resources/Azucena.png"), 0, 0, 64, 64, 9, 0.125, false, false);
    }

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 0);
    }
}