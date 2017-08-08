class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.registerAction("k", function() {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.context.fillText('press "k" to start game', 100, 100)
    }

    update() {}
}
