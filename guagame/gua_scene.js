class GuaScene {
    constructor(game) {
        this.game = game
        this.canvas = document.querySelector("#id-canvas")
        this.context = this.canvas.getContext("2d")
        this.mouseActions = {}
        this.keyboardActions = {}
        this.keydowns = {}
        this.elements = []
    }

    static new(game) {
        return new this(game)
    }

    setupActions() {
        // mouse events
        var map = this.mouseActions
        for (var key in map) {
            if (map.hasOwnProperty(key)) {
                this.registerMouseAction(key, map[key])
            }
        }
        // keyboard events
        window.addEventListener("keydown", event => {
            this.keydowns[event.key] = true
        })
        window.addEventListener("keyup", event => {
            this.keydowns[event.key] = false
        })
    }

    addElement(element) {
        this.elements.push(element)
    }

    drawImage(img) {
        this.context.drawImage(img.image, img.x, img.y)
    }

    registerKeyboardAction(key, callback) {
        this.keyboardActions[key] = callback
    }

    registerMouseAction(key, callback) {
        window.addEventListener(key, callback)
    }

    draw() {
        for (var i = 0; i < this.elements.length; i++) {
            this.drawImage(this.elements[i])
        }
    }

    update() {}
}
