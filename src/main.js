const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();


ASSET_MANAGER.queueDownload("./resources/NightBorneWarrior.png"); // looked pixely to me
ASSET_MANAGER.queueDownload("./resources/Attack_1.png");
ASSET_MANAGER.queueDownload("./resources/Attack_2.png");
ASSET_MANAGER.queueDownload("./resources/Attack_3.png");
ASSET_MANAGER.queueDownload("./resources/Dead.png");
ASSET_MANAGER.queueDownload("./resources/Hurt.png");
ASSET_MANAGER.queueDownload("./resources/Idle.png"); 
ASSET_MANAGER.queueDownload("./resources/Jump.png"); 
ASSET_MANAGER.queueDownload("./resources/Run.png"); // looks kind off
ASSET_MANAGER.queueDownload("./resources/Run+Attack.png"); 
ASSET_MANAGER.queueDownload("./resources/walk.png");


ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false ; 

	gameEngine.addEntity (new NightbornWarrior(gameEngine, ctx));
	gameEngine.addEntity(new Werewolf(gameEngine, ctx));

	gameEngine.init(ctx);

	gameEngine.start();
});
