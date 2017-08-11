class SceneEnd extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.setupActions()
    }

    setupActions() {
        this.registerKeyboardAction("r", () => {
            var s = SceneTitle.new(this.game)
            this.game.replaceScene(s)
        })
        super.setupActions()
    }

    draw() {
        // draw labels
        this.context.fillText('press "r" back to title', 100, 290)
    }

    update() {}
}
