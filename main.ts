input.onGesture(Gesture.LogoUp, function () {
    radio.sendValue("name", 2)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("move")
})
radio.onReceivedString(function (receivedString) {
	
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(1)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("move two")
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendNumber(2)
})
radio.setGroup(1)
