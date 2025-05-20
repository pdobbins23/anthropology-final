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

		// obstacle sprites

		// pickup sprites

		// backgrounds
		this.load.image("ocean", "assets/backgrounds/ocean.png");
		this.load.image("swamp", "assets/backgrounds/swamp.png");
		this.load.image("forest_ground", "assets/backgrounds/forest_ground.png");
		this.load.image("forest_canopy", "assets/backgrounds/forest_canopy.png");
		this.load.image("grassland", "assets/backgrounds/grassland.png");
	}

	create() {
		// stage
		this.stages = [
			"ocean",
			"swamp",
			"forest_ground",
			"forest_canopy",
			"grassland",
		];
		this.stage = this.stages[0];

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

		// player
		this.player = this.physics.add.sprite(100, 500, "fish");
		this.player.setCollideWorldBounds(true);
		this.player.body.setSize(this.player.width, this.player.height);

		this.playerSpeed = 200;

		// level
		this.timeUntilNextSpawn = 1000;
		
		this.physics.world.setBounds(0, this.cameras.main.height / 2, 640, 240);

		// input
		this.cursors = this.input.keyboard.createCursorKeys();
	}

	update(time, deltaTime) {
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

	rand(min, max) {
		return (Math.random() * (max - min + 1)) + min;
	}

	spawnObject() {
		console.log("spawn");
	}
}
