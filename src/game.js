var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add("play", {
  preload: function() {
    // Background loading
    this.game.load.image('forest-back', 'assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
    this.game.load.image('forest-lights', 'assets/parallax_forest_pack/layers/parallax-forest-lights.png');
    this.game.load.image('forest-middle', 'assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
    this.game.load.image('forest-front', 'assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');

    //Monster loading
    this.game.load.image("aerocephal", "assets/allacrost_enemy_sprites/aerocephal.png");
    this.game.load.image("arcana_drake", "assets/allacrost_enemy_sprites/arcana_drake.png");
    this.game.load.image("aurum_drakueli", "assets/allacrost_enemy_sprites/aurum_drakueli.png");
    this.game.load.image("bat", "assets/allacrost_enemy_sprites/bat.png");
    this.game.load.image("daemarbora", "assets/allacrost_enemy_sprites/daemarbora.png");
    this.game.load.image("deceleon", "assets/allacrost_enemy_sprites/deceleon.png");
    this.game.load.image("demonic_essence", "assets/allacrost_enemy_sprites/demonic_essence.png");
    this.game.load.image("dune_crawler", "assets/allacrost_enemy_sprites/dune_crawler.png");
    this.game.load.image("green_slime", "assets/allacrost_enemy_sprites/green_slime.png");
    this.game.load.image("nagaruda", "assets/allacrost_enemy_sprites/nagaruda.png");
    this.game.load.image("rat", "assets/allacrost_enemy_sprites/rat.png");
    this.game.load.image("scorpion", "assets/allacrost_enemy_sprites/scorpion.png");
    this.game.load.image("skeleton", "assets/allacrost_enemy_sprites/skeleton.png");
    this.game.load.image("snake", "assets/allacrost_enemy_sprites/snake.png");
    this.game.load.image("spider", "assets/allacrost_enemy_sprites/spider.png");
    this.game.load.image("stygian_lizard", "assets/allacrost_enemy_sprites/stygian_lizard.png");
  },
  create: function() {
    var state = this;
    this.background = this.game.add.group();

    ['forest-back', 'forest-lights', 'forest-middle', 'forest-front']
      .forEach(function(image){
        var bg = state.game.add.tileSprite(0, 0, state.game.world.width,
          state.game.world.height, image, '', state.background);
        bg.tileScale.setTo(4,4);
      });

    var skeletonSprite = game.add.sprite(450, 290, 'skeleton');
    skeletonSprite.anchor.setTo(0.5, 0.5);
  },
  render: function() {
    game.debug.text("Adventure Awaits!", 250, 290);
  }
});

game.state.start("play");
