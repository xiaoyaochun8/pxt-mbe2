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
     * wordPicker
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
    /**
     * To create a dropdown for number values, use numberdropdown instead
     * of textdropdown for the fieldEditor.
     */
    //% shim=TD_ID
    //% blockId=numberPicker
    //% block="$value"
    //% blockHidden=true
    //% value.fieldEditor="numberdropdown"
    //% value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.values='1,2,23.5,5'
    //% value.defl='5'
    export function __numberPicker(value: number): number {
        return value;
    }
    //% block="show numberdropdown $value"
    //% value.shadow="numberPicker"
    export function testdropdownNumber(value: number) {
    }
}