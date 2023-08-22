let bearing = 0
basic.forever(function () {
    bearing = input.compassHeading()
    if (bearing < 45 || bearing > 315) {
        basic.showString("N")
    } else {
        if (bearing < 135 || bearing > 225) {
            basic.showString("S")
        } else {
            if (bearing < 135 || bearing > 45) {
                basic.showString("E")
            } else {
                if (bearing < 315 || bearing > 225) {
                    basic.showString("W")
                } else {
                    basic.clearScreen()
                }
            }
        }
    }
})
