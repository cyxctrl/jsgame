class Paddle extends GuaImage {
    constructor(game) {
        super(game, 'paddle')
        this.setup()
    }

    setup() {
        this.x = 100
        this.y = 250
        this.speed = 15
    }

    move(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - this.w) {
            x = 400 - this.w
        }
        this.x = x
    }

    moveLeft() {
        this.move(this.x - this.speed)
    }

    moveRight() {
        this.move(this.x + this.speed)
    }

    aInb(x, x1, x2) {
        return x >= x1 && x <= x2
    }

    collide(ball) {
        var a = this
        var b = ball
        if (this.aInb(a.x, b.x, b.x + b.w) || this.aInb(b.x, a.x, a.x + a.w)) {
            if (this.aInb(a.y, b.y, b.y + b.h) || this.aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
}
