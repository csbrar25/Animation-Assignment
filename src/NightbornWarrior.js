class NightbornWarrior {
	constructor(game, ctx) {
		this.game = game;
		this.ctx = ctx;
		this.x = 25;
		this.y = 25;
		this.speed = 200; //350 for run, 75 for attack and idle, 250 for death and hurt
		this.spritesheet = ASSET_MANAGER.getAsset("./resources/NightBorneWarrior.png");

		this.animators = {

			idleLeft: new Animator(this.spritesheet, 1080, 0, 80, 80, 9, .15, true, true),
			runLeft: new Animator(this.spritesheet, 1320, 80, 80, 80, 6, .1, true, true),
			AttackLeft: new Animator(this.spritesheet, 840, 160, 80, 80, 12, .1, true, false),
			HurtLeft: new Animator(this.spritesheet, 1400, 240, 80, 80, 5, .1, true, false),
			DeathLeft: new Animator(this.spritesheet, 0, 320, 80, 80, 23, .1, true, false), // frame is a litle off
			idleRight: new Animator(this.spritesheet, 1840, 0, 80, 80, 9, .15, false , true ),
		  	runRight:  new Animator(this.spritesheet, 1840, 80, 80, 80, 6, .1, false, true ),
		    AttackRight: new Animator(this.spritesheet, 1840, 160, 80, 80, 12, .1, false, false ),
		  	HurtRight:  new Animator(this.spritesheet, 1840, 240, 80, 80, 5, .1, false, false ),
		 	DeathRight: new Animator(this.spritesheet, 1840, 320, 80, 80, 23, .1, false, false )
			
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
		if (this.State === 'runRight') {
			this.x += this.speed*2 * this.game.clockTick; 
			if (this.x > 1024 ) this.x = 0;
		} else if (this.State === "runLeft") {
			this.x -= this.speed*2 * this.game.clockTick; 
		}
		
	};

	draw(ctx) { 
		this.animators[this.State].drawFrame(this.game.clockTick, ctx, this.x, this.y);
	};
}