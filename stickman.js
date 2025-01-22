class Stickman {
    constructor(spritePaths, x, y) {
        this.animator = new Animator(spritePaths, 0.1); 
        this.x = x;
        this.y = y;
    }

    update(deltaTime) {
        this.animator.update(deltaTime);
    
        const speed = 100; // Movement speed in pixels per second
        this.x += speed * deltaTime;
    
        // Reset position when moving off-screen
        if (this.x > this.canvasWidth) {
            this.x = 0 - this.getSpriteWidth(); // Start from left, accounting for sprite width
        }
    }
    
    draw(ctx) {
        // Store canvas width dynamically
        this.canvasWidth = ctx.canvas.width;
    
        // Draw the current animation frame
        this.animator.draw(ctx, this.x, this.y);
    }
    
    // Helper function to get the current sprite's width
    getSpriteWidth() {
        const currentSprite = ASSET_MANAGER.getAsset(this.animator.spritePaths[this.animator.currentFrameIndex]);
        return currentSprite ? currentSprite.width : 0;
    }
}