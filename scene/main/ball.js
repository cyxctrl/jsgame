class Ball extends GuaImage{
    constructor(game) {
        super(game, 'ball')
        this.x = 100
        this.y = 200
        this.speedX = 5
        this.speedY = 5
        this.fired = false
    }

    fire() {
        this.fired = true
    }

    move() {
        if (this.fired) {
            if (this.x < 0 || this.x > 400) {
                this.speedX = -this.speedX
            }
            if (this.y < 0 || this.y > 300) {
                this.speedY = -this.speedY
            }
            // move
            this.x += this.speedX
            this.y += this.speedY
        }
    }
    rebound() {
        this.speedY *= -1
    }
}
