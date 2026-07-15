// 在此处添加您的代码

//% icon="\uf04a"
namespace mydev{

    export enum MyDropList1 {
        //% block="你"
        d1 = 1,
        //% block="好"
        d2 = 2
    }
    //% block
    export function dropList1(e: MyDropList1): void {
        serial.writeLine("" + e)
        basic.showNumber(e)
    }
    
    //% blockId=numberPicker2
    //% block="$value"
    //% blockHidden=true
    //% value.fieldEditor="numberdropdown"
    //% value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.data='[["你",1],["好",2]]'
    export function __numberPicker2(value: number): number {
        return value;
    }
    //% block
    //% value.shadow="numberPicker2"
    export function dropList2(value: number) {
    }
}
