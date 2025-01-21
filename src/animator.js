class animator {
    constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, reverse, loop) {
        Object.assign(this, {spritesheet, xStart, yStart, width, height, frameCount, frameDuration});

        this.loop = loop;
        this.reverse = reverse;
        this.elapsedTime = 0;
        this.totalTime = frameCount * frameDuration;
        this.isAnimating = true;
    };

    drawFrame(tick, ctx, x, y) {
        if (this.isAnimating) {
            this.elapsedTime += tick;

            if (this.isDone()) {
                if (this.loop) {
                    if (this.elapsedTime > this.totalTime) {
                        this.elapsedTime -= this.totalTime;
                    }
                } else {
                    this.isAnimating = false;
                    this.elapsedTime = this.totalTime;
                }
            }
            const frame = this.reverse ? this.frameCount - this.currentFrame() - 1 : this.currentFrame();

            ctx.drawImage(this.spritesheet,
                this.xStart + this.width*frame, this.yStart,
                this.width, this.height,
                x, y,
                this.width*4, this.height*4);
        } else {
            const frame = this.reverse ? this.frameCount - 1 : this.frameCount - 1;

            ctx.drawImage(this.spritesheet,
                this.xStart + this.width*frame, this.yStart,
                this.width, this.height,
                x, y,
                this.width*4, this.height*4);
        }
    };

    currentFrame() {
        return Math.floor(this.elapsedTime / this.frameDuration);
    };

    isDone() {
        return (this.elapsedTime >= this.totalTime);
    };
}