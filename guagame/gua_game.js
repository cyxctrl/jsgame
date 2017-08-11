// 瓜
class GuaGame {
    constructor(fps, images, runCallback) {
        window.fps = fps
        this.images = images
        this.runCallback = runCallback
        this.scene = null

        this.init()
    }

    // 单例
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }

    update() {
        this.scene.update()
    }

    draw() {
        this.scene.draw()
    }

    runloop() {
        // events
        var actions = Object.keys(this.scene.keyboardActions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (this.scene.keydowns[key]) {
                // 如果按键被按下, 调用注册的 action
                this.scene.keyboardActions[key]()
            }
        }
        // update
        this.update()
        // clear
        this.scene.context.clearRect(0, 0, this.scene.canvas.width, this.scene.canvas.height)
        // draw
        this.draw()
        // next run loop
        setTimeout(() => {
            this.runloop()
        }, 1000 / window.fps)
    }

    init() {
        // 预先载入所有图片
        var loads = []
        var names = Object.keys(this.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = this.images[name]
            let img = new Image()
            img.src = path
            img.onload = () => {
                // 存入 g.images 中
                this.images[name] = img
                // 所有图片都成功载入之后, 调用 run
                loads.push(1)
                if (loads.length == names.length) {
                    this.__start()
                }
            }
        }
    }
    //
    imageByName(name) {
        var g = this
        var img = g.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }

    textureByName(name) {
        var img = this.images[name]
        return img
    }

    runWithScene(scene) {
        this.scene = scene
        // 开始运行程序
        setTimeout(() => {
            this.runloop()
        }, 1000 / window.fps)
    }

    replaceScene(scene) {
        this.scene = scene
    }

    __start(scene) {
        this.runCallback(this)
    }
}
