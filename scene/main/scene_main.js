class SceneMain extends GuaScene {
    constructor(game) {
        super(game)
        this.setup()
    }

    setup() {
        this.started = false
        this.score = 0
        this.enableDrag = false
        this.blocks = []
        this.paddle = Paddle.new(this.game)
        this.ball = Ball.new(this.game)
        this.addElement(this.paddle)
        this.addElement(this.ball)

        this.mouseActions = {
            "mousedown":  event => {
                var x = event.offsetX
                var y = event.offsetY
                // 检查是否点中了 ball
                if (this.ball.hasPoint(x, y)) {
                    // 设置拖拽状态
                    this.enableDrag = true
                }
            },
            "mousemove":  event => {
                if (this.enableDrag) {
                    this.ball.x = event.offsetX
                    this.ball.y = event.offsetY
                }
            },
            "mouseup":  event => {
                this.enableDrag = false
            },
        }
        this.setupActions()
    }

    setupActions() {
        this.registerKeyboardAction("a", () => {
            this.paddle.moveLeft()
        })
        this.registerKeyboardAction("d", () => {
            this.paddle.moveRight()
        })
        this.registerKeyboardAction("f", () => {
            this.started = true
        })
        this.registerKeyboardAction("1", () => {
            this.blocks = loadLevel(this.game, 1)
        })
        this.registerKeyboardAction("2", () => {
            this.blocks = loadLevel(this.game, 2)
        })
        this.registerKeyboardAction("3", () => {
            this.blocks = loadLevel(this.game, 3)
        })

        super.setupActions()
    }

    drawBlocks() {
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if (block.alive) {
                this.drawImage(block)
            }
        }
    }

    draw() {
        // draw 背景
        this.context.fillStyle = "#fff"
        this.context.fillRect(0, 0, 400, 300)
        // draw labels
        this.context.fillStyle = "#000"
        if (this.started) {
            this.context.fillText("score: " + this.score, 10, 290)
        } else {
            this.context.fillText('press "f" to start game', 10, 290)
        }
        this.drawBlocks()
        super.draw()
    }

    update() {
        if (window.paused) {
            return
        }

        if (this.started) {
            this.move()
        }

        // 判断相撞
        if (this.paddle.collide(this.ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            this.ball.rebound()
        }
        // 判断 ball 和 blocks 相撞
        for (var i = 0; i < this.blocks.length; i++) {
            var block = this.blocks[i]
            if (block.collide(this.ball)) {
                block.kill()
                this.ball.rebound()
                // 更新分数
                this.score += 100
            }
        }

        // 判断游戏结束
        if (this.ball.y > this.paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(this.game)
            this.game.replaceScene(end)
        }
    }

    move() {
        for (var i = 0; i < this.blocks.length; i++) {
            var b = this.blocks[i]
            b.speed = config.block_speed
            b.move()
        }
        this.ball.move()
    }
}
