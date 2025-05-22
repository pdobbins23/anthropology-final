const STAGE_TRAITS = [
	{"tetrapod_diet": 0, "tetrapod_lungs": 0, "tetrapod_skin": 0, "tetrapod_skull": 0},
	{"small_mammal_claws": 0, "small_mammal_diet": 0, "small_mammal_hair": 0, "small_mammal_jaw_bone": 0},
	{"primate_diet2": 0, "primate_grasping_hand": 0, "brain_pink": 0, "primate_binocular_eyes": 0},
	{"early_human_diet_nuts": 0, "early_human_teeth_incisors": 0, "early_human_tool": 0, "early_human_upright": 0},
	{"modern_human_art": 0, "modern_human_diet": 0, "modern_human_language": 0, "modern_human_weapon": 0},
];

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
			frameWidth: 128,
		});
		this.load.spritesheet("small_mammal", "assets/sprites/small_mammal.png", {
			frameWidth: 128,
			frameHeight: 61,
		});
		this.load.spritesheet("primate", "assets/sprites/primate.png", {
			frameWidth: 128,
		});
		this.load.spritesheet("early_human", "assets/sprites/early_human.png", {
			frameWidth: 128,
		});
		this.load.spritesheet("modern_human", "assets/sprites/modern_human.png", {
			frameWidth: 64,
		});

		// trait sprites
		this.load.image("brain_gray", "assets/icons/brain_gray.png");
		this.load.image("brain_pink", "assets/icons/brain_pink.png");
		this.load.image("early_human_art", "assets/icons/early_human_art.png");
		this.load.image("early_human_diet_meat", "assets/icons/early_human_diet_meat.png");
		this.load.image("early_human_diet_nuts", "assets/icons/early_human_diet_nuts.png");
		this.load.image("early_human_teeth_incisors", "assets/icons/early_human_teeth_incisors.png");
		this.load.image("early_human_tool", "assets/icons/early_human_tool.png");
		this.load.image("early_human_upright", "assets/icons/early_human_upright.png");
		this.load.image("modern_human_art", "assets/icons/modern_human_art.png");
		this.load.image("modern_human_art2", "assets/icons/modern_human_art2.png");
		this.load.image("modern_human_diet", "assets/icons/modern_human_diet.png");
		this.load.image("modern_human_hammer", "assets/icons/modern_human_hammer.png");
		this.load.image("modern_human_language", "assets/icons/modern_human_language.png");
		this.load.image("modern_human_weapon", "assets/icons/modern_human_weapon.png");
		this.load.image("primate_binocular_eyes", "assets/icons/primate_binocular_eyes.png");
		this.load.image("primate_diet", "assets/icons/primate_diet.png");
		this.load.image("primate_diet2", "assets/icons/primate_diet2.png");
		this.load.image("primate_fingernails", "assets/icons/primate_fingernails.png");
		this.load.image("primate_grasping_hand", "assets/icons/primate_grasping_hand.png");
		this.load.image("primate_opposable_toe", "assets/icons/primate_opposable_toe.png");
		this.load.image("primate_skull", "assets/icons/primate_skull.png");
		this.load.image("small_mammal_claws", "assets/icons/small_mammal_claws.png");
		this.load.image("small_mammal_diet", "assets/icons/small_mammal_diet.png");
		this.load.image("small_mammal_hair", "assets/icons/small_mammal_hair.png");
		this.load.image("small_mammal_jaw_bone", "assets/icons/small_mammal_jaw_bone.png");
		this.load.image("tetrapod_diet", "assets/icons/tetrapod_diet.png");
		this.load.image("tetrapod_lungs", "assets/icons/tetrapod_lungs.png");
		this.load.image("tetrapod_skin", "assets/icons/tetrapod_skin.png");
		this.load.image("tetrapod_skull", "assets/icons/tetrapod_skull.png");

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
		this.load.image("end_screen", "assets/popups/end_screen.png");
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
		this.anims.create({
			key: "tetrapod",
			frameRate: 5,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("tetrapod", {
				start: 0,
				end: 11,
			})
		});
		this.anims.create({
			key: "small_mammal",
			frameRate: 15,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("small_mammal", {
				start: 0,
				end: 8,
			})
		});
		this.anims.create({
			key: "primate",
			frameRate: 5,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("primate", {
				start: 0,
				end: 9,
			})
		});
		this.anims.create({
			key: "early_human",
			frameRate: 5,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("early_human", {
				start: 0,
				end: 11,
			})
		});
		this.anims.create({
			key: "modern_human",
			frameRate: 5,
			repeat: -1,
			frames: this.anims.generateFrameNumbers("modern_human", {
				start: 0,
				end: 7,
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

		this.stageTraits = JSON.parse(JSON.stringify(STAGE_TRAITS));

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

		// traits
		this.traitsGroup = this.physics.add.group();

		// player
		this.playerSprites = [
			"fish",
			"tetrapod",
			"small_mammal",
			"primate",
			"early_human",
			"modern_human",
		];
		
		this.player = this.physics.add.sprite(100, 500, null);
		this.player.setCollideWorldBounds(true);
		this.player.body.setSize(this.player.width, this.player.height);

		this.playerSpeed = 100;

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
		this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
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

		if (this.gameState == 4) {
			this.gameState = 1;
			this.stage += 1;
		}

		if (this.stage == 5) {
			this.gameState = 4;
		}

		switch (this.gameState) {
			case 1:
				this.player.setVisible(false);
				this.player.setCollideWorldBounds(true);

				this.player.anims.stop();
				this.player.setTexture(this.playerSprites[this.stage])
				this.player.body.setSize(this.player.width, this.player.height);

				this.background.setTexture(this.stages[this.stage]);

				this.popUp.setTexture(`level${this.stage + 1}`).setVisible(true);

				break;
			case 2:
				this.player.setVisible(true);
				this.popUp.setVisible(false);

				this.player.play(this.playerSprites[this.stage]);

				this.player.setX(100);

				break;
			case 3:
				this.player.setCollideWorldBounds(false);

				this.traitsGroup.clear(true, true);

				break;
			case 4:
				this.popUp.setTexture("end_screen").setVisible(true);

				this.player.setX(100).setY(this.cameras.main.height - 200);

				this.player.setTexture("modern_human");
				this.player.play("modern_human");
				
				break;
		}
	}

	updateInstructions(time, deltaTime) {
		this.background.tilePositionX += (this.menuScrollSpeed * deltaTime) / 1000;

		if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
			this.nextState();
		}
	}

	updateObjective(time, deltaTime) {
		this.background.tilePositionX += (this.menuScrollSpeed * deltaTime) / 1000;

		if (Phaser.Input.Keyboard.JustDown(this.enterKey)) {
			this.nextState();
		}
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

		// check progress
		let traits = Object.keys(this.stageTraits[this.stage]);
		let done = true;

		for (let i = 0; i < traits.length; i++) {
			let trait = traits[i];
			
			if (this.stageTraits[this.stage][trait] == 0) {
				done = false;
				break;
			}
		}

		if (done) {
			this.timeUntilNextSpawn = this.rand(1000, 3000);
			this.nextState();
			
			return;
		}

		// spawn objects
		this.timeUntilNextSpawn -= deltaTime;

		if (this.timeUntilNextSpawn <= 0) {
			this.spawnObject();

			this.timeUntilNextSpawn = this.rand(1000, 3000);
		}
	}

	updateTransition(time, deltaTime) {
		this.player.setVelocity(300, 0);

		if (this.player.x > this.cameras.main.width + 300) {
			this.nextState();
		}
	}

	updateEndScreen(time, deltaTime) {
		
	}

	rand(min, max) {
		return (Math.random() * (max - min + 1)) + min;
	}

	spawnObject() {
		let y = this.rand(this.cameras.main.height / 2, this.cameras.main.height - 64);
		let speed = this.rand(100, 150);

		let traits = Object.keys(this.stageTraits[this.stage]);

		let idx = Math.floor(this.rand(0, traits.length - 1));
		let randomTrait = traits[idx];

		let obj = this.traitsGroup.create(this.cameras.main.width + 100, y, randomTrait)
			.setVelocity(-speed, 0)
			.setDepth(10 + y);

		let targetWidth = 64;
		let targetHeight = 64;

		let scaleX = targetWidth / obj.width;
		let scaleY = targetHeight / obj.height;

		let scale = Math.min(scaleX, scaleY);

		obj.setScale(scale);

		this.physics.add.collider(this.player, obj, this.playerObjectCollisionHandler, null, this);
	}

	playerObjectCollisionHandler(player, obj) {
		this.stageTraits[this.stage][obj.texture.key] += 1;

		obj.destroy();
	}
}
