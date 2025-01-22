class Werewolf {
	constructor(game, ctx) {
		this.game = game;
		this.ctx =ctx
		this.x = 100;
		this.y = 25;
		this.speed = 300;
		this.animators = {
			WalkRight: new Animator(ASSET_MANAGER.getAsset("./resources/walk.png"), 0, 0, 128, 128, 11, 0.1, false, true),
			runRight: new Animator(ASSET_MANAGER.getAsset("./resources/Run.png"), 0, 0, 128, 128, 9, 0.1, false, true),
			run_attackRight: new Animator(ASSET_MANAGER.getAsset("./resources/Run+Attack.png"), 0, 0, 128, 128, 7, 0.1, false, false),
			JumpRight: new Animator(ASSET_MANAGER.getAsset("./resources/Jump.png"), 0, 0, 128, 128, 11, 0.1, false, false),
			idleRight: new Animator(ASSET_MANAGER.getAsset("./resources/Idle.png"), 0, 0, 128, 128, 8, 0.1, false, true),
			HurtRight: new Animator(ASSET_MANAGER.getAsset("./resources/Hurt.png"), 0, 0, 128, 128, 2, 0.15, false, false),
			DeadRight: new Animator(ASSET_MANAGER.getAsset("./resources/Dead.png"), 0, 0, 128, 128, 2, 0.2, false, false),
			Attack_3Right: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_3.png"), 0, 0, 128, 128, 5, 0.1, false, false),
			Attack_2Right: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_2.png"), 0, 0, 128, 128, 4, 0.1, false, false),
			Attack_1Right: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_1.png"), 0, 0, 128, 128, 6, 0.1, false, false),
			WalkLeft: new Animator(ASSET_MANAGER.getAsset("./resources/walk.png"), 1408, 0, 128, 128, 11, 0.1, true, true),
			runLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Run.png"), 1152, 0, 128, 128, 9, 0.1, true, true),
			run_attackLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Run+Attack.png"), 896, 0, 128, 128, 7, 0.1, true, false),
			JumpLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Jump.png"), 1408, 0, 128, 128, 11, 0.1, true, false),
			idleLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Idle.png"), 1024, 0, 128, 128, 8, 0.1, true, true),
			HurtLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Hurt.png"), 256, 0, 128, 128, 2, 0.15, true, false),
			DeadLeft: new Animator(ASSET_MANAGER.getAsset("./resources/Dead.png"), 256, 0, 128, 128, 2, 0.2, true, false),
			Attack_3Left: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_3.png"), 640, 0, 128, 128, 5, 0.1, true, false),
			Attack_2Left: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_2.png"), 512, 0, 128, 128, 4, 0.1, true, false),
			Attack_1Left: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_1.png"), 768, 0, 128, 128, 6, 0.1, true, false)
		}
		this.State = 'idleLeft';
	};

	setState(state) {
		if (this.animators[state]) {
			this.State = state;
		} else {
			console.error("State '${state}' does not exist.");
		}

	};
	update() {
		if (this.State === 'WalkRight') {
			this.x += this.speed/2 * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} else if (this.State === 'runRight') {
			this.x += this.speed * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} 
		else if (this.State === 'WalkLeft') {
			this.x -= this.speed/2 * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} else if (this.State === 'runLeft') {
			this.x -= this.speed * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} 
		
	};

	draw(ctx) { 
		this.animators[this.State].drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}