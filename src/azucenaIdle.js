class azucendaIdle {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.animator = new animator(ASSET_MANAGER.getAsset("../resources/Azucena.png"), 0, 0, 64, 64, 9, 0.125);

    };

    update() {

    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, 100, 0);
    }
}