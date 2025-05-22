class Game extends Phaser.Scene {
	constructor() {
		super("gameScene");
	}

	preload() {
		// player sprites
		this.load.spritesheet("fish", "assets/sprites/fish.png", {
			frameWidth: 64,
		});
		this.load.spritesheet("tetrapod", "assets/sprites/tetrapod.png", {
			frameWidth: 64,
		});
		this.load.spritesheet("mammal", "assets/sprites/mammal.png", {
			frameWidth: 64,
		});
		this.load.spritesheet("primate", "assets/sprites/primate.png", {
			frameWidth: 64,
		});
		this.load.spritesheet("human", "assets/sprites/human.png", {
			frameWidth: 64,
		});

		// trait sprites

		// backgrounds
		this.load.image("ocean", "assets/backgrounds/ocean.png");
		this.load.image("swamp", "assets/backgrounds/swamp.png");
		this.load.image("forest_ground", "assets/backgrounds/forest_ground.png");
		this.load.image("forest_canopy", "assets/backgrounds/forest_canopy.png");
		this.load.image("grassland", "assets/backgrounds/grassland.png");
		this.load.image("city", "assets/backgrounds/city.png");

		// popups
		this.load.image("intro", "assets/popups/intro.png");
		this.load.image("level1", "assets/popups/level1.png");
		this.load.image("level2", "assets/popups/level2.png");
		this.load.image("level3", "assets/popups/level3.png");
		this.load.image("level4", "assets/popups/level4.png");
		this.load.image("level5", "assets/popups/level5.png");
	}

	create() {
		// animations
		this.anims.create({
			key: "fish",
			frameRate: 5,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("fish", {
				start: 0,
				end: 5,
			})
		});

		// game state
		// 
		// 0 = showing instructions
		// 1 = showing objective
		// 2 = playing
		// 3 = transition level
		// 4 = end screen
		//
		// 0 -> 1 -> 2 -> 3 -> 1 -> 2 -> 3 -> 1 -> ... -> 3 -> 4
		this.gameState = 0;
		
		// stage
		this.stages = [
			"ocean",
			"swamp",
			"forest_ground",
			"forest_canopy",
			"grassland",
			"city",
		];
		this.stage = 0;

		// background
		this.background = this.add
			.tileSprite(
				0,
				0,
				this.cameras.main.width,
				this.cameras.main.height,
				this.stages[this.stage],
			)
			.setOrigin(0)
			.setDepth(0);

		this.menuScrollSpeed = 50;

		// player
		this.player = this.physics.add.sprite(100, 500, "fish");
		this.player.setCollideWorldBounds(true);
		this.player.body.setSize(this.player.width, this.player.height);

		this.playerSpeed = 100;

		this.player.play("fish");

		this.player.setVisible(false);

		// level
		this.timeUntilNextSpawn = 1000;
		
		this.physics.world.setBounds(0, this.cameras.main.height / 2, 640, 240);

		// pop up
		this.popUp = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, "intro");
		this.popUp.setDepth(100);

		this.popUp.setVisible(true);

		// input
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(time, deltaTime) {
		switch (this.gameState) {
			case 0:
				this.updateInstructions(time, deltaTime);
				break;
			case 1:
				this.updateObjective(time, deltaTime);
				break;
			case 2:
				this.updatePlaying(time, deltaTime);
				break;
			case 3:
				this.updateTransition(time, deltaTime);
				break;
			case 4:
				this.updateEndScreen(time, deltaTime);
				break;
		}
	}

	nextState() {
		this.gameState += 1;

		if (this.gameState == 4 && this.stage != 6)
			this.gameState = 1;

		switch (this.gameState) {
			case 1:
				this.popUp.setTexture(`level${this.stage + 1}`).setVisible(true);
				break;
			case 2:
				this.popUp.setVisible(false);
				break;
			case 4:
				this.popUp.setTexture("end_screen").setVisible(true);
				break;
		}
	}

	updateInstructions(time, deltaTime) {
		this.background.tilePositionX += (this.menuScrollSpeed * deltaTime) / 1000;
	}

	updateObjective(time, deltaTime) {
		this.background.tilePositionX += (this.menuScrollSpeed * deltaTime) / 1000;
	}

	updatePlaying(time, deltaTime) {
		// update background
		this.background.tilePositionX += (this.playerSpeed * deltaTime) / 1000;

		// update player
		let velocity = new Phaser.Math.Vector2(0, 0);

		if (this.cursors.up.isDown) velocity.y -= 1;
		if (this.cursors.down.isDown) velocity.y += 1;

		velocity.normalize();

		this.player
			.setVelocity(velocity.x * this.playerSpeed, velocity.y * this.playerSpeed)
			.setDepth(10 + this.player.y);

		// spawn objects
		this.timeUntilNextSpawn -= deltaTime;

		if (this.timeUntilNextSpawn <= 0) {
			this.spawnObject();

			this.timeUntilNextSpawn = this.rand(500, 2000);
		}
	}

	updateTransition(time, deltaTime) {
		
	}

	updateEndScreen(time, deltaTime) {
		
	}

	rand(min, max) {
		return (Math.random() * (max - min + 1)) + min;
	}

	spawnObject() {
		console.log("spawn");
	}
}
