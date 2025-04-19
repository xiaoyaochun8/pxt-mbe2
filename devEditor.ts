// 在此处添加您的代码
namespace devEditor{
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

    //% block
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=520
    //% gesture.fieldOptions.columns=3
    export function onGesture(gesture: Gesture) {
    }

    //% block
    //% myOledPos.fieldEditor="gridpicker"
    //% myOledPos.fieldOptions.width=520
    //% myOledPos.fieldOptions.columns=10
    export function getPos(myOledPos: MyOledPos) {
    }
}