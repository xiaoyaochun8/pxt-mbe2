
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
//% groups=['servo','testInput','others']
namespace mbe2 {

    /**
     * 270度舵机角度
     * @param value describe value here, eg: 5
     */
    //% block
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
     * test by me
     * @param e describe parameter here
     */
    //% block
    //% group='others'
    export function foo2(e: MyEnum2): void {
        // Add code here
        basic.showString("Hello mbe foo2!")
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

    /**
     * color
     * @param color describe parameter here
     */
    //% block
    //% group='testInput'
    //% color.shadow="colorNumberPicker"
    export function showColor(color: number) {
        basic.showString(color.toString())
    }

    /**
     * color
     * @param color describe parameter here
     */
    //% shim=TD_ID
    //% blockId=wordPicker
    //% block="$word"
    //% group='testInput'
    //% blockHidden=true
    //% word.fieldEditor="textdropdown"
    //% word.fieldOptions.decompileLiterals=true
    //% word.fieldOptions.values='hi,hello'
    //% word.defl='hello'
    export function __wordPicker(word: string): string {
        return word;
    }
    //% block="say textdropdown $word"
    //% group='testInput'
    //% word.shadow="wordPicker"
    export function testdropdown(word: string) {

    }

}
