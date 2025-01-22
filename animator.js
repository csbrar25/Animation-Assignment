class Animator {
    constructor(spritePaths, frameDuration) {
        this.spritePaths = spritePaths;
        this.frameDuration = frameDuration; // Time each frame is displayed (in seconds)
        this.currentFrameIndex = 0;
        this.elapsedTime = 0;
    }

    update(deltaTime) {
        this.elapsedTime += deltaTime;
        if (this.elapsedTime > this.frameDuration) {
            this.elapsedTime -= this.frameDuration;
            this.currentFrameIndex = (this.currentFrameIndex + 1) % this.spritePaths.length;
        }
    }

    draw(ctx, x, y) {
        const currentSprite = ASSET_MANAGER.getAsset(this.spritePaths[this.currentFrameIndex]);
        if (currentSprite) {
            ctx.drawImage(currentSprite, x, y);
        } else {
            console.error("Sprite not found in cache:", this.spritePaths[this.currentFrameIndex]);
        }
    }
    
}
