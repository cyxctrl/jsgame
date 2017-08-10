class SceneTitle extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.setupActions()
    }

    setupActions() {
        this.registerKeyboardAction("k", () => {
            var s = SceneMain.new(this.game)
            this.game.replaceScene(s)
        })
        this.registerKeyboardAction("e", () => {
            var s = SceneEditor.new(this.game)
            this.game.replaceScene(s)
        })
        super.setupActions()
    }

    draw() {
        // draw labels
        this.context.fillText('press "k" to start game', 100, 100)
        this.context.fillText('press "e" to edit game', 100, 120)
    }

    update() {}
}
