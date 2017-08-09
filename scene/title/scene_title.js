class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.registerAction("k", function() {
            var s = SceneMain.new(game)
            game.replaceScene(s)
        })
        this.registerAction("e", function() {
            var s = SceneEditor.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.context.fillText('press "k" to start game', 100, 100)
        this.context.fillText('press "e" to edit game', 100, 120)
    }

    update() {}
}
