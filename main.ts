
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
* https://makecode.com/defining-blocks
* https://makecode.com/playground#basic-groups
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
 * mbe blocks
 */
//% weight=100 color=#0fbc11 icon=""
//% groups=['servo','testInput','others']
namespace mbe2 {

    /**
     * 270度舵机角度
     * @param value describe value here, eg: 5
     */
    //% block='270度：设置舵机角度 $v'
    //% group='servo'
    //% block.loc.cn='270度舵机 $v'
    //% v.min=0 v.max=270 v.defl=0
    export function arc270(v: number): number {
        return Math.map(v, 0, 270, 0, 180);
    }
    
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    //% group='others'
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
        basic.showString("Hello mbe!")
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    //% group='others'
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

}
