// 在此处添加您的代码
enum OledFace{
    //% block="开心"
    Happy,
    //% block="伤心"
    Sad,
    //% block="生气"
    Angry,
    //% block="惊讶"
    Amazed,
    //% block="睡觉"
    Sleep,
}


//% icon="\uf04a"
//% groups=['oled-形状','oled-表情','oled-画图']
namespace mydev{
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画正方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawSquare(iSize: Number): void {
        OLED12864_I2C.init(60);
        if(iSize == 3){
            OLED12864_I2C.rect(0, 0, 30, 30, 1);
        }else if(iSize == 2){
            OLED12864_I2C.rect(0, 0, 20, 20, 1);
        }else{
            OLED12864_I2C.rect(0, 0, 10, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-形状'
    //% block="oled画长方形 $iSize"
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawRectangle(iSize: Number): void {
        OLED12864_I2C.init(60);
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 60, 30, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 40, 20, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 20, 10, 1);
        }
    }
    //% subcategory="oled"
    //% group='oled-表情'
    //% block="oled画表情 $iSize"
    //% gesture.fieldEditor="gridpicker"
    //% gesture.fieldOptions.width=220
    //% gesture.fieldOptions.columns=3
    export function oledDrawFace(oledFace: OledFace): void {
        OLED12864_I2C.init(60);
    }
}
