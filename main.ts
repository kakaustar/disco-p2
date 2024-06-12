basic.showIcon(IconNames.Heart)
basic.forever(function () {
    led.plotBarGraph(
    0,
    input.soundLevel()
    )
})
