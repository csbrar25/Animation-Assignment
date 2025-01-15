const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("../resources/Azucena.png")
ASSET_MANAGER.queueDownload("../resources/Reina.png")
ASSET_MANAGER.queueDownload("../resources/Lightning.png")
ASSET_MANAGER.queueDownload("../resources/GorgonAttack1.png")
ASSET_MANAGER.queueDownload("../resources/GorgonAttack2.png")
ASSET_MANAGER.queueDownload("../resources/GorgonAttack3.png")
ASSET_MANAGER.queueDownload("../resources/GorgonDead.png")
ASSET_MANAGER.queueDownload("../resources/GorgonHurt.png")
ASSET_MANAGER.queueDownload("../resources/GorgonIdle1.png")
ASSET_MANAGER.queueDownload("../resources/GorgonIdle2.png")
ASSET_MANAGER.queueDownload("../resources/GorgonRun.png")
ASSET_MANAGER.queueDownload("../resources/GorgonSpecial.png")
ASSET_MANAGER.queueDownload("../resources/GorgonWalk.png")

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new azucendaIdle(gameEngine, ctx))
	gameEngine.addEntity(new reinaIdle(gameEngine, ctx))
	gameEngine.addEntity(new lightning(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonAttack1(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonAttack2(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonAttack3(gameEngine, ctx))
	//ameEngine.addEntity(new gorgonDead(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonHurt(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonIdle1(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonIdle2(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonRun(gameEngine, ctx))
	//gameEngine.addEntity(new gorgonSpecial(gameEngine, ctx))
	gameEngine.addEntity(new gorgonWalk(gameEngine, ctx))

	gameEngine.init(ctx);

	gameEngine.start();
});
