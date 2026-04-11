
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
enum MyDelimiters {
    //% block="new line"
    NewLine = 1,
    //% block=","
    Comma = 2
}

/**
 * mbe blocks
 */
//% weight=100 color=#0fbc11 icon=""
//% groups=['testInput','others']
namespace mbe2 {

    //% block="斐波那契数列 $value"
    //% group='testInput'
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
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
    }

    //% block
    //% group='others'
    //% advanced=true
    export function foo2(n: number, s: string, e: MyEnum): void {
    }

    //% subcategory="数学"
    //% block="setA_Sub_B"
    export function setA_Sub_B(): void {
    }

}
