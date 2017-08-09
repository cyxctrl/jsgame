class GuaImage {
    constructor(game, name) {
        this.game = game
        this.image = game.textureByName(name)
        this.w = this.image.width
        this.h = this.image.height
    }

    static new(game) {
        return new this(game)
    }

    hasPoint(x, y) {
        var xIn = x >= this.x && x <= this.x + this.w
        var yIn = y >= this.y && y <= this.y + this.h
        return xIn && yIn
    }
}
