radio.onReceivedNumber(function (receivedNumber) {
    POTATO = receivedNumber
})
input.onButtonPressed(Button.AB, function () {
    POTATO = randint(10, 20)
})
input.onGesture(Gesture.Shake, function () {
    if (POTATO == 0) {
        radio.sendNumber(POTATO)
        POTATO = -1
    }
})
let POTATO = 0
POTATO = -1
radio.setGroup(1)
basic.forever(function () {
    if (POTATO == 0) {
        basic.showIcon(IconNames.Skull)
    }
    if (POTATO == 0) {
        basic.clearScreen()
    }
    if (POTATO == 0) {
        basic.showIcon(IconNames.Chessboard)
    }
})
