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
}
