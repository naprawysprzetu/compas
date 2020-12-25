basic.forever(function () {
    if (input.compassHeading() <= 5 || input.compassHeading() >= 355) {
        basic.showString("N")
    } else if (input.compassHeading() > 5 && input.compassHeading() < 85) {
        basic.showLeds(`
            . . # # #
            . . . # #
            . . # . #
            . # . . .
            # . . . .
            `)
    } else if (input.compassHeading() > 275 && input.compassHeading() < 355) {
        basic.showLeds(`
            # # # . .
            # # . . .
            # . # . .
            . . . # .
            . . . . #
            `)
    } else if (input.compassHeading() >= 85 && input.compassHeading() <= 95) {
        basic.showString("E")
    } else if (input.compassHeading() > 95 && input.compassHeading() < 175) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . #
            . . . # #
            . . # # #
            `)
    } else if (input.compassHeading() >= 175 && input.compassHeading() <= 185) {
        basic.showString("S")
    } else if (input.compassHeading() >= 265 && input.compassHeading() <= 275) {
        basic.showString("W")
    } else {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            # # . . .
            # # # . .
            `)
    }
})
