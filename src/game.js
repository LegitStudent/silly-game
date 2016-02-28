var game = new Phaser.Game(800, 600, Phaser.AUTO, '');

game.state.add("play", {
  preload: function() {
    game.load.image("skeleton", "assets/allacrost_enemy_sprites/skeleton.png")
  },
  create: function() {
    var skeletonSprite = game.add.spite(450, 290, 'skeleton');
    skeletonSpite.anchor.setTo(0.5, 0.5);
  },
  render: function() {
    game.debug.text("Adventure Awaits!", 250, 290);
  }
});
