class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.registerAction("r", function() {
            var s = SceneTitle.new(game)
            game.replaceScene(s)
        })
    }

    draw() {
        // draw labels
        this.context.fillText('press "r" back to title', 100, 290)
    }

    update() {}
}
