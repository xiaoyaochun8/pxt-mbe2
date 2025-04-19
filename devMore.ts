
/**
* 使用此文件来定义自定义函数和图形块。
* 想了解更详细的信息，请前往 https://makecode.microbit.org/blocks/custom
*/

/**
 * devMore blocks
 */
namespace devMore {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 5
     * @param s describe parameter here, eg: "Hello"
     * @param e describe parameter here
     */
    //% block="base $n $s"
    export function foo(n: number, s: string): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block="devAdvanced $value"
    //% advanced=true
    export function devAdvanced(value: number): number {
        return 1;
    }
}
