class Scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }
  
    preload(){
      this.load.image("background", "assets/images/background.png");
      this.load.image("YouDied", "assets/images/Udied.png");
      this.load.image("menuBkg", "assets/images/menubkg.png"); 
      this.load.audio("menuMusic", "assets/audio/Main-Menu.mp3");
      this.load.audio("deathMusic", "assets/audio/YouDied.mp3");
      this.load.audio("shoot", "assets/audio/shoot.mp3");
      this.load.audio("zombieSounds", "assets/audio/zombieSounds.mp3");
      this.load.audio("reload", "assets/audio/reload.mp3");
      this.load.audio("emptyClip", "assets/audio/empty-clip.mp3");
      //
      this.load.spritesheet("player", "assets/spritesheets/soldier/walk/survivor-move_rifle_0.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player1", "assets/spritesheets/soldier/walk/survivor-move_rifle_1.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player2", "assets/spritesheets/soldier/walk/survivor-move_rifle_2.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player3", "assets/spritesheets/soldier/walk/survivor-move_rifle_3.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player4", "assets/spritesheets/soldier/walk/survivor-move_rifle_4.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player5", "assets/spritesheets/soldier/walk/survivor-move_rifle_5.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player6", "assets/spritesheets/soldier/walk/survivor-move_rifle_6.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player7", "assets/spritesheets/soldier/walk/survivor-move_rifle_7.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player8", "assets/spritesheets/soldier/walk/survivor-move_rifle_8.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player9", "assets/spritesheets/soldier/walk/survivor-move_rifle_9.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player10", "assets/spritesheets/soldier/walk/survivor-move_rifle_10.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player11", "assets/spritesheets/soldier/walk/survivor-move_rifle_11.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player12", "assets/spritesheets/soldier/walk/survivor-move_rifle_12.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player13", "assets/spritesheets/soldier/walk/survivor-move_rifle_13.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player14", "assets/spritesheets/soldier/walk/survivor-move_rifle_14.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player15", "assets/spritesheets/soldier/walk/survivor-move_rifle_15.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player16", "assets/spritesheets/soldier/walk/survivor-move_rifle_16.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player17", "assets/spritesheets/soldier/walk/survivor-move_rifle_17.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player18", "assets/spritesheets/soldier/walk/survivor-move_rifle_18.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("player19", "assets/spritesheets/soldier/walk/survivor-move_rifle_19.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("shoot0", "assets/spritesheets/soldier/shoot/survivor-shoot_rifle_0.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("shoot1", "assets/spritesheets/soldier/shoot/survivor-shoot_rifle_1.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("shoot2", "assets/spritesheets/soldier/shoot/survivor-shoot_rifle_2.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload0", "assets/spritesheets/soldier/reload/survivor-reload_rifle_0.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload1", "assets/spritesheets/soldier/reload/survivor-reload_rifle_1.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload2", "assets/spritesheets/soldier/reload/survivor-reload_rifle_2.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload3", "assets/spritesheets/soldier/reload/survivor-reload_rifle_3.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload4", "assets/spritesheets/soldier/reload/survivor-reload_rifle_4.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload5", "assets/spritesheets/soldier/reload/survivor-reload_rifle_5.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload6", "assets/spritesheets/soldier/reload/survivor-reload_rifle_6.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload7", "assets/spritesheets/soldier/reload/survivor-reload_rifle_7.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload8", "assets/spritesheets/soldier/reload/survivor-reload_rifle_8.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload9", "assets/spritesheets/soldier/reload/survivor-reload_rifle_9.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload10", "assets/spritesheets/soldier/reload/survivor-reload_rifle_10.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload11", "assets/spritesheets/soldier/reload/survivor-reload_rifle_11.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload12", "assets/spritesheets/soldier/reload/survivor-reload_rifle_12.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload13", "assets/spritesheets/soldier/reload/survivor-reload_rifle_13.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload14", "assets/spritesheets/soldier/reload/survivor-reload_rifle_14.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload15", "assets/spritesheets/soldier/reload/survivor-reload_rifle_15.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload16", "assets/spritesheets/soldier/reload/survivor-reload_rifle_16.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload17", "assets/spritesheets/soldier/reload/survivor-reload_rifle_17.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload18", "assets/spritesheets/soldier/reload/survivor-reload_rifle_18.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("reload19", "assets/spritesheets/soldier/reload/survivor-reload_rifle_19.png",{
        frameWidth: 313,
        frameHeight: 206
      });
      this.load.spritesheet("crosshair", "assets/spritesheets/crosshair.png",{
        frameWidth: 400,
        frameHeight: 400
      });
      this.load.spritesheet("zombie0", "assets/spritesheets/zombie/moving/skeleton-move_0.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie1", "assets/spritesheets/zombie/moving/skeleton-move_1.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie2", "assets/spritesheets/zombie/moving/skeleton-move_2.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie3", "assets/spritesheets/zombie/moving/skeleton-move_3.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie4", "assets/spritesheets/zombie/moving/skeleton-move_4.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie5", "assets/spritesheets/zombie/moving/skeleton-move_5.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie6", "assets/spritesheets/zombie/moving/skeleton-move_6.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie7", "assets/spritesheets/zombie/moving/skeleton-move_7.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie8", "assets/spritesheets/zombie/moving/skeleton-move_8.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie9", "assets/spritesheets/zombie/moving/skeleton-move_9.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie10", "assets/spritesheets/zombie/moving/skeleton-move_10.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie11", "assets/spritesheets/zombie/moving/skeleton-move_11.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie12", "assets/spritesheets/zombie/moving/skeleton-move_12.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie13", "assets/spritesheets/zombie/moving/skeleton-move_13.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie14", "assets/spritesheets/zombie/moving/skeleton-move_14.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie15", "assets/spritesheets/zombie/moving/skeleton-move_15.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.spritesheet("zombie16", "assets/spritesheets/zombie/moving/skeleton-move_16.png",{
        frameWidth: 288,
        frameHeight: 311
      });
      this.load.image("bullet", "assets/spritesheets/bullet.png",{
        frameWidth: 12,
        frameHeight: 12
      });
  
      this.load.bitmapFont("pixelFont", "assets/font/font.png", "assets/font/font.xml");
    }
  
    create() {
      highScore = localStorage.getItem("highScore");
      
      if(!highScore)
        highScore = 0;
      
      this.background = this.add.image(0, 0, "menuBkg").setOrigin(0, 0);
        // Based on your game size, it may "stretch" and distort.
        this.background.displayWidth = config.width;
        this.background.displayHeight = config.height;

      var text = this.add.text(config.width/2,config.height/2, 'Press Space (or A) to Start', { fontSize: 32 });
      Phaser.Display.Align.In.Center(text, this.add.zone(config.width/2,config.height/2,config.width,config.height));
      this.add.text(5,5, "Difficulty", {fontSize: 32});
      var decreaseDifficultyBtn = this.add.text(5,50, "-").setInteractive();
      var increaseDifficultyBtn = this.add.text(80,50, "+").setInteractive();
      decreaseDifficultyBtn.on('pointerdown', () => { this.changeDifficulty(false); });
      increaseDifficultyBtn.on('pointerdown', () => { this.changeDifficulty(true); });
      var highScoreText = this.add.text(config.width/2,config.height/2, 'HighScore: ' + highScore, { fontSize: 32 });
      Phaser.Display.Align.In.TopRight(highScoreText, this.add.zone(config.width/2,config.height/2,config.width,config.height));

      var content = [
        "Instructions:",
        "   Move player with WASD (Right stick on controller).",
        "   Aim with your mouse (Left stick on controller).",
        "   Left-click to shoot (Right trigger on controller).",
        "   Press R to reload (X or SQUARE on controller)."
      ];

      var instructions = this.add.text(config.width/2,config.height/2, content, { fontSize: 32 }, { fontSize: 32 });
      Phaser.Display.Align.In.BottomLeft(instructions, this.add.zone(config.width/2,config.height/2,config.width,config.height));

      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      

      pads = this.input.gamepad.gamepads;

      displayDifficulty = this.add.text(20,50, 'Deez');
      difficulty = parseInt(localStorage.getItem("difficulty"));
      if(!difficulty)
        difficulty = 1;
      this.calculateDifficultyText();
      this.anims.create({
        key: "zombieWalk",
        frames: [
          { key: 'zombie0' },
          { key: 'zombie1' },
          { key: 'zombie2' },
          { key: 'zombie3' },
          { key: 'zombie4' },
          { key: 'zombie5' },
          { key: 'zombie6' },
          { key: 'zombie7' },
          { key: 'zombie8' },
          { key: 'zombie9' },
          { key: 'zombie10' },
          { key: 'zombie11' },
          { key: 'zombie12' },
          { key: 'zombie13' },
          { key: 'zombie14' },
          { key: 'zombie15' },
          { key: 'zombie16' }
        ],
        frameRate: 15,
        repeat: -1
      });
      this.anims.create({
        key: "soldierWalk",
        frames: [
          { key: 'player' },
          { key: 'player1' },
          { key: 'player2' },
          { key: 'player3' },
          { key: 'player4' },
          { key: 'player5' },
          { key: 'player6' },
          { key: 'player7' },
          { key: 'player8' },
          { key: 'player9' },
          { key: 'player10' },
          { key: 'player11' },
          { key: 'player12' },
          { key: 'player13' },
          { key: 'player14' },
          { key: 'player15' },
          { key: 'player16' },
          { key: 'player17' },
          { key: 'player18' },
          { key: 'player19' },
        ],
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "soldierReload",
        frames: [
          { key: 'reload0' },
          { key: 'reload1' },
          { key: 'reload2' },
          { key: 'reload3' },
          { key: 'reload4' },
          { key: 'reload5' },
          { key: 'reload6' },
          { key: 'reload7' },
          { key: 'reload8' },
          { key: 'reload9' },
          { key: 'reload10' },
          { key: 'reload11' },
          { key: 'reload12' },
          { key: 'reload13' },
          { key: 'reload14' },
          { key: 'reload15' },
          { key: 'reload16' },
          { key: 'reload17' },
          { key: 'reload18' },
          { key: 'reload19' },
        ],
        frameRate: 20,
        repeat: 0
      });
      this.anims.create({
        key: "shoot",
        frames: [
          { key: 'shoot0' },
          { key: 'shoot1' },
          { key: 'shoot2' },
        ],
        frameRate: 10,
        repeat: 2
      });
    }

    startGame(){
      this.scene.start('playGame');
    }

    update(){
      if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
        this.startGame();
      }
      if((pads.length > 0)) {
        for (var i = 0; i < pads.length; i++){
          var gamepad = pads[i];
          if(gamepad.A)
            this.startGame();
        }
      }
    }
    changeDifficulty(upOrDown) {
      if(upOrDown == true) {
        difficulty += 1;
      } else {
        difficulty -= 1;
      }
      this.calculateDifficultyText();
    }
    calculateDifficultyText() {
      if(difficulty > 3) {
        difficulty = 3;
        localStorage.setItem("difficulty", difficulty);
      } else if(difficulty < 1) {
        difficulty = 1;
        localStorage.setItem("difficulty", difficulty);
      }
      localStorage.setItem("difficulty", difficulty);
      
      switch (difficulty) {
        
        case 1:
          difficultyText = "Easy";
          displayDifficulty.setText("Easy");
          break;
        case 2:
          difficultyText = "Medium";
          displayDifficulty.setText("Medium");
          break;
        case 3:
          difficultyText = "Hard";
          displayDifficulty.setText("Hard");
          break;
      }
    }
  }
  