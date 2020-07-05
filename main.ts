let angle = 0
let millig = 0
pins.servoWritePin(AnalogPin.P0, 90)
basic.forever(function () {
    millig = input.acceleration(Dimension.X)
    angle = pins.map(
    millig,
    -1023,
    1023,
    0,
    180
    )
    pins.servoWritePin(AnalogPin.P0, angle)
})
