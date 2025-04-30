
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

/**
 * devMath blocks
 */

namespace devMath {
	//% block="检查结果"
    export function checkRet(v:number) {
        basic.showIcon(IconNames.Yes)
        // basic.showIcon(IconNames.No)
    }
    //% block="a - b = ? $v"
    export function setA_Sub_B(v:number) {
    }
    //% block="a + b = ? $v"
    export function setA_Plus_B(v:number) {
    }
    //% block="b = $v"
    //% v.defl=2
    export function setB(v:number) {
    }
    //% block="a = $v"
    //% v.defl=1
    export function setA(v:number) {
    }
}