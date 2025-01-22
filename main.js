const gameEngine = new GameEngine();
const timer = new Timer();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0009.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0010.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0011.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0012.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0013.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0014.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0015.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0016.png");

ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0009.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0010.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0011.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0012.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0013.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0014.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0015.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0016.png");

ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0009.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0010.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0011.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0012.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0013.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0014.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0015.png");
ASSET_MANAGER.queueDownload("./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0016.png");

ASSET_MANAGER.downloadAll(() => {
    const canvas = document.getElementById("gameWorld");
    const ctx = canvas.getContext("2d");

    const stickman1 = new Stickman([
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0009.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0010.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0011.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0012.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0013.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0014.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0015.png",
        "./Stick Figure Character Sprites 2D/Pistol sprites/pistol_walk_0016.png"
    ], -50, -150);

    const stickman2 = new Stickman([
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0009.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0010.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0011.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0012.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0013.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0014.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0015.png",
        "./Stick Figure Character Sprites 2D/Sword sprites/sword_walk_0016.png"
    ], -50, 50);

    const stickman3 = new Stickman([
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0009.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0010.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0011.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0012.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0013.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0014.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0015.png",
        "./Stick Figure Character Sprites 2D/Fighter sprites/fighter_walk_0016.png"
    ], -50, 250);

    gameEngine.addEntity(stickman1);
    gameEngine.addEntity(stickman2);
    gameEngine.addEntity(stickman3);

    gameEngine.init(ctx);

    function gameLoop() {
        const deltaTime = timer.tick(); // Get time elapsed since last frame
        gameEngine.update(deltaTime);
        gameEngine.draw(ctx);
        requestAnimationFrame(gameLoop);
    }

    gameEngine.start();
    requestAnimationFrame(gameLoop);
});