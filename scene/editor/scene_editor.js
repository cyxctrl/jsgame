class SceneEditor extends GuaScene {
    constructor(game) {
        super(game)
        this.blocks = []
        this.enableDrag = false
        this.movingBlock = null

        this.setup()
    }

    addBlock() {
        var p = [0, 0]
        var b = Block.new(this.game, p)
        this.blocks.push(b)
        this.elements.push(b)
    }

    setup() {
        window.addEventListener("keydown", event => {
            var key = event.key
            if (key == 'n') {
                this.addBlock()
            } else if (key == 'Enter') {
                var s = SceneMain.new(this.game)
                s.blocks = this.blocks
                this.game.replaceScene(s)
            }
        }, true)

        // mouse event
        this.canvas.addEventListener("mousedown", event => {
            var x = event.offsetX
            var y = event.offsetY
            // 检查是否点中了 block
            for (var i = 0; i < this.blocks.length; i++) {
                var b = this.blocks[i]
                if (b.hasPoint(x, y)) {
                    // 设置拖拽状态
                    this.enableDrag = true
                    this.movingBlock = b
                }
            }
        })

        this.canvas.addEventListener("mousemove", event => {
            // log('event', event)
            if (this.enableDrag) {
                this.movingBlock.x = event.offsetX
                this.movingBlock.y = event.offsetY
            }
        })

        this.canvas.addEventListener("mouseup", event => {
            this.enableDrag = false
            this.movingBlock = null
        })
    }

    draw() {
        this.drawElements()
        this.context.fillText('press "n" to add block', 100, 260)
        this.context.fillText('press "Enter" to start game', 100, 280)
    }

    update() {}
}
