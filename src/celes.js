class celes {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
        this.x = 0;

        this.animations = {
            LeftAttack1: new animator(ASSET_MANAGER.getAsset("../resources/CelesAttack1.png"), 1280, 0, 128, 128, 10, 0.1, true, false),
            LeftAttack2: new animator(ASSET_MANAGER.getAsset("../resources/CelesAttack2.png"), 512, 0, 128, 128, 4, 0.15, true, false),
            //LeftCharge: new animator(ASSET_MANAGER.getAsset("../resources/CelesCharge.png"), 288, 0, 128, 128, 9, 0.15),
            LeftDead: new animator(ASSET_MANAGER.getAsset("../resources/CelesDead.png"), 640, 0, 128, 128, 5, 0.5, true, false),
            LeftHurt: new animator(ASSET_MANAGER.getAsset("../resources/CelesHurt.png"), 384, 0, 128, 128, 3, 0.15, true, false),
            LeftIdle: new animator(ASSET_MANAGER.getAsset("../resources/CelesIdle.png"), 896, 0, 128, 128, 7, 0.15, true, true),
            LeftJump: new animator(ASSET_MANAGER.getAsset("../resources/CelesJump.png"), 1024, 0, 128, 128, 8, 0.15, true, false),
            LeftLightBall: new animator(ASSET_MANAGER.getAsset("../resources/CelesLightBall.png"), 896, 0, 128, 128, 7, 0.15, true, false),
            LeftLightCharge: new animator(ASSET_MANAGER.getAsset("../resources/CelesLightCharge.png"), 1664, 0, 128, 128, 12, 0.1, true, false),
            LeftRun: new animator(ASSET_MANAGER.getAsset("../resources/CelesRun.png"), 1024, 0, 128, 128, 8, 0.1, true, true),
            LeftWalk: new animator(ASSET_MANAGER.getAsset("../resources/CelesWalk.png"), 896, 0, 128, 128, 7, 0.15, true, true),
            RightAttack1: new animator(ASSET_MANAGER.getAsset("../resources/CelesAttack1.png"), 0, 0, 128, 128, 10, 0.1, false, false),
            RightAttack2: new animator(ASSET_MANAGER.getAsset("../resources/CelesAttack2.png"), 0, 0, 128, 128, 4, 0.15, false, false),
            //RightCharge: new animator(ASSET_MANAGER.getAsset("../resources/CelesCharge.png"), 0, 0, 128, 128, 9, 0.15),
            RightDead: new animator(ASSET_MANAGER.getAsset("../resources/CelesDead.png"), 0, 0, 128, 128, 5, 0.5, false, false),
            RightHurt: new animator(ASSET_MANAGER.getAsset("../resources/CelesHurt.png"), 0, 0, 128, 128, 3, 0.15, false, false),
            RightIdle: new animator(ASSET_MANAGER.getAsset("../resources/CelesIdle.png"), 0, 0, 128, 128, 7, 0.15, false, true),
            RightJump: new animator(ASSET_MANAGER.getAsset("../resources/CelesJump.png"), 0, 0, 128, 128, 8, 0.15, false, false),
            RightLightBall: new animator(ASSET_MANAGER.getAsset("../resources/CelesLightBall.png"), 0, 0, 128, 128, 7, 0.15, false, false),
            RightLightCharge: new animator(ASSET_MANAGER.getAsset("../resources/CelesLightCharge.png"), 0, 0, 128, 128, 12, 0.1, false, false),
            RightRun: new animator(ASSET_MANAGER.getAsset("../resources/CelesRun.png"), 0, 0, 128, 128, 8, 0.1, false, true),
            RightWalk: new animator(ASSET_MANAGER.getAsset("../resources/CelesWalk.png"), 0, 0, 128, 128, 7, 0.15, false, true)
        }

        this.currentState = 'LeftIdle';
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
            this.x += 100 * this.game.clockTick;
        }else if (this.currentState === 'LeftWalk') {
            this.x -= 100 * this.game.clockTick;
        }
    }

    draw(ctx) {
        this.animations[this.currentState].drawFrame(this.game.clockTick, ctx, this.x, 200);
        ctx.scale(-1, 1)
    }
}