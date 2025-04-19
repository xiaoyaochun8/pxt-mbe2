// 在此处添加您的代码
namespace mydev{
    /**
     * Create a 5x8 pixel matrix for use as a custom character.
     */
    //% subcategory="oled"
    //% block="character"
    //% imageLiteral=1
    //% imageLiteralColumns=19
    //% imageLiteralRows=19
    //% imageLiteralScale=0.001
    //% shim=images::createImage
    //% weight=59
    export function oledCharacterPixels(i: string): Image {
        return <Image><any>i;
    }
}