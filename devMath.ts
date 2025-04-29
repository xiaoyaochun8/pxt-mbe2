
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

/**
 * devMath blocks
 */

namespace devMath {

    //% block='1 + 2 = ? $v'
    //% v.min=0 v.max=10 v.defl=0
    export function testCalc1(v: number): void {
        basic.showString("1")
    }
	
	//% block='1 + 3 = ? $v'
    //% v.min=0 v.max=10 v.defl=0
    export function testCalc2(v: number): void {
        basic.showString("2")
    }

	//% block='1 + 4 = ? $v'
    //% v.min=0 v.max=10 v.defl=0
    export function testCalc3(v: number): void {
        basic.showString("3")
    }
}
