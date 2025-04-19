// 在此处添加您的代码
namespace devShadow{
    /**
     * Play a tone
     * @param note pitch of the tone to play in Hertz (Hz)
     */
    //% blockId=music_play_note
    //% block="play tone $note"
    //% note.shadow="device_note"
    //% note.defl=Note.C
    export function playTone(note: number) {
    }

    /**
     * Turns by an angle between 0 and 180
     */
    //% block="turn $angle"
    //% angle.shadow="protractorPicker"
    export function turn(angle: number) {
    }

    /**
     * Runs the motor at the given speed
     */
    //% block="crickit run at $speed \\%"
    //% speed.shadow="speedPicker"
    export function run(speed: number) {
    }

    /**
     * Steers two motors by the given ratio
     */
    //% block="steer $turnRatio"
    //% turnRatio.min=-200 turnRatio.max=200
    //% turnRatio.shadow=turnRatioPicker
    export function steer(turnRatio: number) {
    }

    //% block="say textdropdown $word"
    //% word.shadow="wordPicker"
    export function testdropdown(word: string) {
    }

    /**
     * color
     * @param color describe parameter here
     */
    //% block
    //% color.shadow="colorNumberPicker"
    export function showColor(color: number) {
        basic.showString(color.toString())
        serial.writeLine(color.toString())
    }
}