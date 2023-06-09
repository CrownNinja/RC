input.onButtonPressed(Button.A, function () {
    radio.sendNumber(7)
})
input.onGesture(Gesture.LogoUp, function () {
    background = 1
    right = 0
    left = 0
    forward = 0
})
input.onGesture(Gesture.TiltLeft, function () {
    left = 1
    forward = 0
    background = 0
    right = 0
})
input.onGesture(Gesture.ScreenUp, function () {
    left = 0
    forward = 0
    background = 0
    right = 0
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(5)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(6)
})
input.onGesture(Gesture.TiltRight, function () {
    right = 1
    forward = 0
    left = 0
    background = 0
})
input.onGesture(Gesture.LogoDown, function () {
    forward = 1
    right = 0
    left = 0
    background = 0
})
let forward = 0
let left = 0
let right = 0
let background = 0
radio.setGroup(333)
basic.showLeds(`
    # # # # #
    # # # . #
    # # # # #
    # # # . #
    . # # # .
    `)
basic.forever(function () {
    if (background == 1) {
        radio.sendValue("name", 2)
    } else if (forward == 1) {
        radio.sendNumber(2)
    } else if (right == 1) {
        radio.sendString("move two")
    } else if (left == 1) {
        radio.sendString("move")
    } else {
    	
    }
})
