// 在此处添加您的代码
//% icon="\uf04a"
namespace mydev{
    /**
     * Create a 128x64 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% block="character128x64"
    //% imageLiteral=1
    //% imageLiteralColumns=128
    //% imageLiteralRows=64
    //% imageLiteralScale=0.001
    //% shim=images::createImage
    export function oledCharacterPixels12864(i: string): Image {
        return <Image><any>i;
    }

    //% subcategory="test"
    //% block
    export function getImgPixels(im: Image): void {
        for (let y = 0; y < 64; y++) {
            for (let x = 0; x < 128; x++) {
                if (im.pixel(x, y)) {
                    serial.writeLine(x.toString()+'-'+y.toString())
                    //todo call < OLED12864_I2C.pixel(x, y, color) >
                }
            }
        }
    }
}
