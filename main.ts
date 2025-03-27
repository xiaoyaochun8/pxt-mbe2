
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

enum MyEnum2 {
    //% block="P0"
    P0 = AnalogPin.P0,
    //% block="P1"
    P1 = AnalogPin.P1
}

/**
 * mbe blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace mbe2 {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block
    export function foo(n: number, s: string, e: MyEnum): void {
        // Add code here
        basic.showString("Hello mbe!")
    }

    /**
     * test by me
     * @param e describe parameter here
     */
    //% block
    export function foo2(e: MyEnum2): void {
        // Add code here
        basic.showString("Hello mbe foo2!")
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }

    /**
     * 270度舵机角度
     * @param value describe value here, eg: 5
     */
    //% block
    export function arc270(value: number): number {
        return Math.map(value, 0, 270, 0, 180);
    }
}
