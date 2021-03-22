function newPos (rot: number, oldPos: number) {
    let newPosRet = oldPos+rot*sensitivity
    if (newPosRet < 0) {
        return 0
    } else if (newPosRet > 4) {
        return 4
    } else {
        return newPosRet
    }
}
let index = null
let y = randint(0, 4)
let x = randint(0, 4)
let timeRemaining = 10
let sensitivity = 1/16
basic.forever(function () {
    x = newPos(input.rotation(Rotation.Roll), x)
    y = newPos(input.rotation(Rotation.Pitch), y)
    basic.clearScreen()
    led.plot(Math.round(x), Math.round(y))
    if (Math.round(x) == 2 && Math.round(y) == 2) {
        timeRemaining--
        if(timeRemaining <= 0) {
            y = randint(0, 4)
            x = randint(0, 4)
            timeRemaining = 10
            sensitivity += 1/16
            basic.showString("Level" + sensitivity*16)
        }
    } else {
        timeRemaining = 10
    }
    basic.pause(10)
})
