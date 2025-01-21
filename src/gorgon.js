class gorgon {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.x = 0;

        this.animations = {
            LeftAttack1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack1.png"), 2048, 0, 128, 128, 16, 0.15, true, false),
            LeftAttack2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack2.png"), 896, 0, 128, 128, 7, 0.15, true, false),
            LeftAttack3: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack3.png"), 1280, 0, 128, 128, 10, 0.15, true, false),
            LeftDead: new animator(ASSET_MANAGER.getAsset("../resources/GorgonDead.png"), 384, 0, 128, 128, 3, 0.2, true, false),
            LeftHurt: new animator(ASSET_MANAGER.getAsset("../resources/GorgonHurt.png"), 384, 0, 128, 128, 3, 0.15, true, false),
            LeftIdle1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle1.png"), 896, 0, 128, 128, 7, 0.15, true, true),
            LeftIdle2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle2.png"), 640, 0, 128, 128, 5, 0.15, true, true),
            LeftRun: new animator(ASSET_MANAGER.getAsset("../resources/GorgonRun.png"), 896, 0, 128, 128, 7, 0.1, true, true),
            LeftSpecial: new animator(ASSET_MANAGER.getAsset("../resources/GorgonSpecial.png"), 640, 0, 128, 128, 5, 0.15, true, false),
            LeftWalk: new animator(ASSET_MANAGER.getAsset("../resources/GorgonWalk.png"), 1664, 0, 128, 128, 13, 0.15, true, true),
            RightAttack1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack1.png"), 0, 0, 128, 128, 16, 0.15, false, false),
            RightAttack2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack2.png"), 0, 0, 128, 128, 7, 0.15, false, false),
            RightAttack3: new animator(ASSET_MANAGER.getAsset("../resources/GorgonAttack3.png"), 0, 0, 128, 128, 10, 0.15, false, false),
            RightDead: new animator(ASSET_MANAGER.getAsset("../resources/GorgonDead.png"), 0, 0, 128, 128, 3, 0.2, false, false),
            RightHurt: new animator(ASSET_MANAGER.getAsset("../resources/GorgonHurt.png"), 0, 0, 128, 128, 3, 0.15, false, false),
            RightIdle1: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle1.png"), 0, 0, 128, 128, 7, 0.15, false, true),
            RightIdle2: new animator(ASSET_MANAGER.getAsset("../resources/GorgonIdle2.png"), 0, 0, 128, 128, 5, 0.15, false, true),
            RightRun: new animator(ASSET_MANAGER.getAsset("../resources/GorgonRun.png"), 0, 0, 128, 128, 7, 0.1, false, true),
            RightSpecial: new animator(ASSET_MANAGER.getAsset("../resources/GorgonSpecial.png"), 0, 0, 128, 128, 5, 0.15, false, false),
            RightWalk: new animator(ASSET_MANAGER.getAsset("../resources/GorgonWalk.png"), 0, 0, 128, 128, 13, 0.15, false, true),
        }

        this.currentState = Math.random() < 0.5 ? 'LeftIdle1' : 'LeftIdle2';
    };

    setState(state) {
        if (this.animations[state]) {
            this.currentState = state;
        } else {
            console.error(`State '${state}' not found.`);
        }
    }

    update() {
        if (this.currentState === 'RightRun') {
            this.x += 500 * this.game.clockTick;
        } else if (this.currentState === 'LeftRun') {
            this.x -= 500 * this.game.clockTick;
        } else if (this.currentState === 'RightWalk') {
            this.x += 150 * this.game.clockTick;
        }else if (this.currentState === 'LeftWalk') {
            this.x -= 150 * this.game.clockTick;
        }
    }

    draw(ctx) {
        this.animations[this.currentState].drawFrame(this.game.clockTick, ctx, this.x, 200);
    }
}