class Animator {
	constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, reverse, loop) {
		Object.assign(this, { spritesheet, xStart, yStart, width, height, frameCount, frameDuration, reverse, loop });

		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
		this.loop = loop;
        this.reverse = reverse;
	};

	drawFrame(tick, ctx, x, y) {
		this.elapsedTime += tick;
		if (this.isDone()) {
            if (this.loop) {
                this.elapsedTime = 0;
            } else {
                this.elapsedTime = this.elapsedTime - tick;
            }
        }
		let frame = this.reverse ?  this.frameCount - this.currentFrame() - 1 : this.currentFrame();
		//const frame = this.reverse ?  this.frameCount - this.currentFrame() - 1 : this.currentFrame();

		ctx.drawImage(this.spritesheet,
			this.xStart + this.width*frame, this.yStart,
			this.width, this.height,
			x, y,
			this.width*4, this.height*4);
	};

	currentFrame(){
		return Math.floor(this.elapsedTime / this.frameDuration);
	};

	isDone() {
		return (this.elapsedTime >= this.totalTime);
	};
}