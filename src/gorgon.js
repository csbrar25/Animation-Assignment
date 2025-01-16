class gorgon {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.x = 0;
        this.speed = 500;

        this.animations = {
            Attack1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack1.png"), 0, 0, 128, 128, 16, 0.15),
            Attack2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack2.png"), 0, 0, 128, 128, 7, 0.15),
            Attack3: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack3.png"), 0, 0, 128, 128, 10, 0.15),
            Dead: new animator(ASSET_MANAGER.getAsset("../resources/GorgonDead.png"), 0, 0, 128, 128, 3, 0.2),
            Hurt: new animator(ASSET_MANAGER.getAsset("../resources/GorgonHurt.png"), 0, 0, 128, 128, 3, 0.15),
            Idle1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle1.png"), 0, 0, 128, 128, 7, 0.15),
            Idle2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle2.png"), 0, 0, 128, 128, 5, 0.15),
            Run: new animator(ASSET_MANAGER.getAsset("../resources/GorgonRun.png"), 0, 0, 128, 128, 7, 0.1),
            Special: new animator(ASSET_MANAGER.getAsset("../resources/GorgonSpecial.png"), 0, 0, 128, 128, 5, 0.15),
            Walk: new animator(ASSET_MANAGER.getAsset("../resources/GorgonWalk.png"), 0, 0, 128, 128, 13, 0.15),
        }

        this.currentState = ''
    };

    setState(state) {
        if (this.animations[state]) {
            this.currentState = state;
        } else {
            console.error(`State '${state}' not found.`);
        }
    }

    update() {
        if (this.currentState === "Run") {
            this.x += 500 * this.game.clockTick;
        } else if (this.currentState === "Walk") {
            this.x += 150 * this.game.clockTick;
        }
    }

    draw(ctx) {
        this.animations[this.currentState].drawFrame(this.game.clockTick, ctx, this.x, 200);
    }
}