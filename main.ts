input.onButtonPressed(Button.A, function () {
    radio.sendString("shoot")
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
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
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
radio.setGroup(1)
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
