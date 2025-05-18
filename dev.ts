// 在此处添加您的代码
//% icon="\uf04a"
//% groups=['oled-shape','oled-face','oled-paint']
namespace mydev{
    //% subcategory="oled"
    //% group='oled-shape'
    //% block
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
    //% group='oled-shape'
    //% block
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
    //% group='oled-face'
    //% block
    //% iSize.min=1 iSize.max=3 iSize.defl=1
    export function oledDrawFace(iSize: Number): void {
        OLED12864_I2C.init(60);
        if (iSize == 3) {
            OLED12864_I2C.rect(0, 0, 60, 30, 1);
        } else if (iSize == 2) {
            OLED12864_I2C.rect(0, 0, 40, 20, 1);
        } else {
            OLED12864_I2C.rect(0, 0, 20, 10, 1);
        }
    }
}
