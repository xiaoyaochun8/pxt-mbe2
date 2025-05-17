// 在此处添加您的代码
//% icon="\uf04a"
namespace mydev{
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% block="character128x64"
    //% imageLiteral=1
    //% imageLiteralColumns=64
    //% imageLiteralRows=32
    //% imageLiteralScale=1
    //% shim=images::createImage
    export function oledCharacterPixels12864(i: string): Image {
        return <Image><any>i;
    }

    //% subcategory="test"
    //% block
    export function drawImgByPixels(im: Image): void {
        OLED12864_I2C.init(60)
        for (let y = 0; y < 32; y++) {
            for (let x = 0; x < 64; x++) {
                if (im.pixel(x, y)) {
                    OLED12864_I2C.pixel(x, y, 1)
                }
            }
        }
    }
}
