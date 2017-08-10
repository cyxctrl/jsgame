class GuaScene {
    constructor(game) {
        this.game = game
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext("2d")
        this.elements = []
        // events
        window.addEventListener("keydown", event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener("keyup", event => {
            this.keydowns[event.key] = false
        })
    }

    static new(game) {
        return new this(game)
    }

    addElement(element) {
        this.elements.push(element)
    }

    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    registerAction(key, callback) {
        this.actions[key] = callback
    }

    drawElements() {
        for (var i = 0; i < this.elements.length; i++) {
            this.drawImage(this.elements[i])
        }
    }

    draw() {
        this.drawElements()
    }

    update() {}
}
