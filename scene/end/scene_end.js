class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        game.registerAction("r", function() {
            var s = Scene.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.game.context.fillText('press "r" back to title', 100, 290)
    }

    update() {}
}
