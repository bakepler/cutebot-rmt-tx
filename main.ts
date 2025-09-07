function adjustCenter (num: number) {
    V = num - 512
    return V
}
function sentTxValue (value: string) {
    if (value != "") {
        basic.showString(value)
        radio.sendString(value)
    }
}
function sendRocker (target: string, value: number) {
    r = adjustCenter(value)
    if (r > 20 || r < -20) {
        sentTxValue("" + target + r)
    }
}
let r = 0
let V = 0
joystickbit.initJoystickBit()
radio.setGroup(1)
basic.forever(function () {
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
        sentTxValue("c")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        sentTxValue("d")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        sentTxValue("e")
    }
    if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
        sentTxValue("f")
    }
    if (input.buttonIsPressed(Button.A)) {
        sentTxValue("a")
    }
    if (input.buttonIsPressed(Button.B)) {
        sentTxValue("b")
    }
    if (input.buttonIsPressed(Button.AB)) {
        sentTxValue("ab")
    }
    if (input.logoIsPressed()) {
        sentTxValue("logo")
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) != 0) {
        sendRocker("rockerX", joystickbit.getRockerValue(joystickbit.rockerType.X))
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) != 0) {
        sendRocker("rockerY", joystickbit.getRockerValue(joystickbit.rockerType.Y))
    }
})
