input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
    basic.pause(2000)
    basic.clearScreen()
    music.playMelody("G B A G C5 B A B ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.playMelody("A F E F D G E F ", 80)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        # . # . #
        . . # . .
        # # . # #
        . . # . .
        # . # . #
        `)
    music.playMelody("E B C5 A B G A F ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("C5 B A G F E D C ", 120)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.pause(2000)
    basic.clearScreen()
})
basic.showIcon(IconNames.Heart)
basic.showString("ARK")
