// 在此处添加您的代码
namespace devEditor{
    /**
     * range
     * @param x describe parameter here
     */
    //% block
    //% group='testInput'
    //% x.min=-100 x.max=100
    export function range(x: number): void {
        // Add code here
        basic.showString(x.toString())
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