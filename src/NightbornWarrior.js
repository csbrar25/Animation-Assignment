class NightbornWarrior {
	constructor(game, ctx) {
		this.game = game;
		this.ctx = ctx;
		this.x = 25;
		this.y = 25;
		this.speed = 200; //350 for run, 75 for attack and idle, 250 for death and hurt
		this.spritesheet = ASSET_MANAGER.getAsset("./resources/NightBorne.png");

		this.animators = {

			idle: new Animator(this.spritesheet, 0, 0, 80, 80, 9, .15 ),
		  	run:  new Animator(this.spritesheet, 0, 80, 80, 80, 6, .1 ),
		    Attack: new Animator(this.spritesheet, 0, 160, 80, 80, 12, .1 ),
		  	Hurt:  new Animator(this.spritesheet, 0, 240, 80, 80, 5, .1 ),
		 	Death: new Animator(this.spritesheet, 0, 320, 80, 80, 23, .1 )
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
		if (this.State === 'run') {
			this.x += this.speed*2 * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		}
		
	};

	draw(ctx) { 
		this.animators[this.State].drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}