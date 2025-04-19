// 在此处添加您的代码
namespace devShadow{
    /**
     * Play a tone
     * @param note pitch of the tone to play in Hertz (Hz)
     */
    //% blockId=music_play_note
    //% block="device_note $note"
    //% note.shadow="device_note"
    //% note.defl=Note.C
    export function playTone(note: number) {
    }

    /**
     * Turns by an angle between 0 and 180
     */
    //% block="protractorPicker $angle"
    //% angle.shadow="protractorPicker"
    export function turn(angle: number) {
    }

    /**
     * Runs the motor at the given speed
     */
    //% block="speedPicker $speed \\%"
    //% speed.shadow="speedPicker"
    export function run(speed: number) {
    }

    /**
     * Steers two motors by the given ratio
     */
    //% block="turnRatioPicker $turnRatio"
    //% turnRatio.min=-200 turnRatio.max=200
    //% turnRatio.shadow=turnRatioPicker
    export function steer(turnRatio: number) {
    }

    /**
     * color
     * @param color describe parameter here
     */
    //% block="colorNumberPicker $color"
    //% color.shadow="colorNumberPicker"
    export function showColor(color: number) {
        basic.showString(color.toString())
        serial.writeLine(color.toString())
    }

    //% block="colorWheelPicker $color"
    //% color.shadow="colorWheelPicker"
    export function showColorWheel(color: number) {

    }

    //% block="colorWheelHsvPicker $color"
    //% color.shadow="colorWheelHsvPicker"
    export function showColorWheelHsv(color: number) {

    }

    /**
     * color
     * @param color describe parameter here
     */
    //% shim=TD_ID
    //% blockId=wordPicker
    //% block="$word"
    //% blockHidden=true
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='hi,hello'
    //% word.defl='hello'
    export function __wordPicker(word: string): string {
        return word;
    }
    //% block="wordPicker $word"
    //% word.shadow="wordPicker"
    export function testdropdown(word: string) {
    }
}