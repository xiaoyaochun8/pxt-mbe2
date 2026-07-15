// 在此处添加您的代码

//% icon="\uf04a"
namespace mydev{

    export enum MyDropList1 {
        //% block="d1"
        d1 = 1,
        //% block="d2"
        d2 = 2
    }
    //% block
    export function dropList1(e: MyDropList1): void {
    }
    
    //% blockId=numberPicker2
    //% block="$value"
    //% blockHidden=true
    //% value.fieldEditor="numberdropdown"
    //% value.fieldOptions.decompileLiterals=true
    //% value.fieldOptions.data='[["a",1],["b",2]]'
    export function __numberPicker2(value: number): number {
        return value;
    }
    //% block
    //% value.shadow="numberPicker2"
    export function dropList2(value: number) {
    }
}
