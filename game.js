var gameSettings = {
    playerSpeed: 200,
    playerLookSpeed: 700,
    zombieSpeed: 185,
    maxPowerups: 2,
    powerUpVel: 50,
    spawnTime: 1500
  }
  
  var config = {
    width: window.innerWidth - 15,
    height: window.innerHeight - 15,
    zoom: 10,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2, Scene3],
    input: {
      gamepad: true
    },
    pixelArt: true,
    physics: {
      default: "arcade",
      arcade:{
          debug: false,
          debugShowVelocity: false
      }
    }
  }
  
  var player = null;
  var killer = null;
  var healthpoints = null;
  var crosshair = null;
  var moveKeys = null;
  var playerBullets = null;
  var enemyBullets = null;
  var time = 0;
  var zombieAmount = 5;
  var zombieMinSpeed = 5;
  var zombieMaxSpeed = 5;
  var ammoAmount = null;
  var ammoScoreCounter = null;
  var ammoScoreCounterText = null;
  var reloading = false;
  var reloadTimer = null;
  var hasShot = false;
  var pads = null;
  var score = null;
  var highScore = null;
  var music = null;
  var zombieSounds = null;
  var difficulty = null;
  var difficultyText = null;
  var displayDifficulty = null;

  function reloadEvent(){
    ammoScoreCounter.data.set('ammo', ammoAmount = 10);
    reloading = false;
  }
  
  var game = new Phaser.Game(config);