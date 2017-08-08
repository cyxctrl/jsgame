class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.paddle = Paddle(game)
        this.ball = Ball(game)
        this.score = 0
        this.blocks = loadLevel(game, 1)
        this.enableDrag = false
        this.setup()
    }

    static new(game) {
        return new this(game)
    }

    setup() {
        this.registerAction("a", () => {
            this.paddle.moveLeft()
        })
        this.registerAction("d", () => {
            this.paddle.moveRight()
        })
        this.registerAction("f", () => {
            this.ball.fire()
        })

        this.registerAction("1", () => {
            this.blocks = loadLevel(this.game, 1)
        })

        this.registerAction("2", () => {
            this.blocks = loadLevel(this.game, 2)
        })

        this.registerAction("3", () => {
            this.blocks = loadLevel(this.game, 3)
        })

        // mouse event
        this.canvas.addEventListener("mousedown", event => {
            var x = event.offsetX
            var y = event.offsetY
            // 检查是否点中了 ball
            if (this.ball.hasPoint(x, y)) {
                // 设置拖拽状态
                this.enableDrag = true
            }
        })

        this.canvas.addEventListener("mousemove", event => {
            log('event', event)
            if (this.enableDrag) {
                this.ball.x = event.offsetX
                this.ball.y = event.offsetY
            }
        })

        this.canvas.addEventListener("mouseup", event => {
            var x = event.offsetX
            var y = event.offsetY
            this.enableDrag = false
        })
    }

    draw() {
        // draw 背景
        this.context.fillStyle = "#fff"
        this.context.fillRect(0, 0, 400, 300)

        // draw
        this.drawImage(this.paddle)
        this.drawImage(this.ball)

        // draw blocks
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if (block.alive) {
                this.drawImage(block)
            }
        }
        // draw labels
        this.context.fillStyle = "#000"
        this.context.fillText("分数: " + this.score, 10, 290)
    }

    update() {
        if (window.paused) {
            return
        }

        this.ball.move()
        // 判断游戏结束
        if (this.ball.y > this.paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
        // 判断相撞
        if (this.paddle.collide(this.ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            this.ball.反弹()
        }
        // 判断 ball 和 blocks 相撞
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if (block.collide(this.ball)) {
                block.kill()
                this.ball.反弹()
                // 更新分数
                this.score += 100
            }
        }
    }
}
