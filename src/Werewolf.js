class Werewolf {
	constructor(game, ctx) {
		this.game = game;
		this.ctx =ctx
		this.x = 25;
		this.y = 25;
		this.speed = 300;
		this.animators = {
			Walk: new Animator(ASSET_MANAGER.getAsset("./resources/walk.png"), 0, 0, 128, 128, 11, 0.1),
			run: new Animator(ASSET_MANAGER.getAsset("./resources/Run.png"), 0, 0, 128, 128, 9, 0.1),
			run_attack: new Animator(ASSET_MANAGER.getAsset("./resources/Run+Attack.png"), 0, 0, 128, 128, 7, 0.1),
			Jump: new Animator(ASSET_MANAGER.getAsset("./resources/Jump.png"), 0, 0, 128, 128, 11, 0.1),
			idle: new Animator(ASSET_MANAGER.getAsset("./resources/Idle.png"), 0, 0, 128, 128, 8, 0.1),
			Hurt: new Animator(ASSET_MANAGER.getAsset("./resources/Hurt.png"), 0, 0, 128, 128, 2, 0.15),
			Dead: new Animator(ASSET_MANAGER.getAsset("./resources/Dead.png"), 0, 0, 128, 128, 2, 0.2),
			Attack_3: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_3.png"), 0, 0, 128, 128, 5, 0.1),
			Attack_2: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_2.png"), 0, 0, 128, 128, 4, 0.1),
			Attack_1: new Animator(ASSET_MANAGER.getAsset("./resources/Attack_1.png"), 0, 0, 128, 128, 6, 0.1)
		}
		this.State = 'idle';
	};

	setState(state) {
		if (this.animators[state]) {
			this.State = state;
		} else {
			console.error("State '${state}' does not exist.");
		}

	};
	update() {
		if (this.State === 'Walk') {
			this.x += this.speed/2 * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} else if (this.State === 'run') {
			this.x += this.speed * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} else if (this.State === 'run_attack') {
			this.x += this.speed * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		}
		
	};

	draw(ctx) { 
		this.animators[this.State].drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}