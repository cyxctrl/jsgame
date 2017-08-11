class Block extends GuaImage {
    constructor(game, position) {
        super(game, 'block')
        this.setup(position)
    }

    setup(position) {
        var p = position
        this.x = p[0]
        this.y = p[1]
        this.lifes = p[2] || 1
        this.alive = true
        this.speed = config.block_speed
    }

    static new(game, position) {
        return new this(game, position)
    }

    kill() {
        this.lifes--
        if (this.lifes < 1) {
            this.alive = false
        }
    }

    collide(b) {
        return this.alive && (rectIntersects(this, b) || rectIntersects(b, this))
    }

    move() {
        if (this.x > 400) {
            this.x = 0
        } else if (this.x < 0) {
            this.x = 400
        }
        else {
            this.x += this.speed
        }
    }
}
