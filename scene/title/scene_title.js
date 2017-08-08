class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction("k", function() {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('press "k" to start game', 100, 100)
    }

    update() {}
}
