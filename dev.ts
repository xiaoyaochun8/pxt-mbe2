// 在此处添加您的代码
//% icon="\uf04a"
namespace mydev{
    /**
     * Create a 19x19 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% block="character19"
    //% imageLiteral=1
    //% imageLiteralColumns=19
    //% imageLiteralRows=19
    //% imageLiteralScale=0.001
    //% shim=images::createImage
    export function oledCharacterPixels(i: string): Image {
        return <Image><any>i;
    }

    /**
     * Create a 16x16 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% block="character16"
    //% imageLiteral=1
    //% imageLiteralColumns=16
    //% imageLiteralRows=16
    //% imageLiteralScale=0.001
    //% shim=images::createImage
    export function oledCharacterPixels2(i: string): Image {
        return <Image><any>i;
    }

    /**
     * Create a 19x19 pixel matrix for use as a custom character.
     */
    //% subcategory="test"
    //% block
    export function getImgPixels(im: Image): void {
        for (let y = 0; y < 19; y++) {
            for (let x = 0; x < 19; x++) {
                if (im.pixel(x, y)) {
                    serial.writeLine(x.toString()+'-'+y.toString())
                }
            }
        }
    }
}