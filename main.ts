basic.forever(function () {
    if (hummingbird.getSensor(SensorType.Dial, ThreePort.Two) > 1) {
        music.playMelody("C5 C C5 C C5 C C5 C ", 150)
    } else {
    	
    }
})
