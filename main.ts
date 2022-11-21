let hluk = 0
let zvuk = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.stopAllSounds()
    hluk = 0
})
basic.forever(function () {
    if (hluk > 50) {
        basic.showIcon(IconNames.Sad)
    }
})
basic.forever(function () {
    if (hluk < 50) {
        basic.showIcon(IconNames.Happy)
    }
})
basic.forever(function () {
    serial.writeValue("zvuk", zvuk)
    serial.writeValue("hluk", hluk)
    zvuk = input.soundLevel()
    if (zvuk > 100) {
        hluk += 10
    } else if (hluk > 50) {
        music.playTone(220, music.beat(BeatFraction.Double))
    } else if (zvuk < 99) {
        hluk += -1
    } else {
    	
    }
    if (hluk < 0) {
        hluk = 0
    }
})
