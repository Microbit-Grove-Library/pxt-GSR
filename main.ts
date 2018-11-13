

enum GroveGsrPins {
    //% block=P0
    P0 = 7,
    //% block=P1
    P1 = 8,
    //% block=P2
    P2 = 9,
    //% block=P3
    P3 = 10
}


/**
 * Functions to operate Grove module.
 */
//% weight=10 color=#9F79EE icon="\uf108" block="Grove - GSR"
namespace grovegsr {
    let gsr_data: number[] = [700, 670, 640, 610, 580, 550, 520, 490, 460, 430, 400, 370, 340, 310, 280, 250];
    
    /**
     * Get Grove - GSR index 
     * @param pin the analog pin
     */
    //% blockId=gsr_get_gsr block="get GSR index at pin|%pin|"
    export function getGSR(pin: GroveGsrPins) {
        let num: number;
        let p: number = pin;
        num = pins.analogReadPin(<AnalogPin>p);
        let index: number = 0;
        while (num < gsr_data[index]) {
            index++;
        }
        return (index);
    }

    /**
     * Display 
     * @param level the level of bar, from 0 to 15
     */
    //% blockId=gsr_show_bar block="show bar at level|%level|"
    //% level.min=0 level.max=15
    export function showBar(level: number) {
        switch (level % 16) {
            case 0:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
                break;
            case 1:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    `)
                break;
            case 2:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # # .
                    `)
                break;
            case 3:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    `)
                break;
            case 4:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . # . .
                    # # # # #
                    `)
                break;
            case 5:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . # # # .
                    # # # # #
                    `)
                break;
            case 6:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    # # # # #
                    # # # # #
                    `)
                break;
            case 7:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . # . .
                    # # # # #
                    # # # # #
                    `)
                break;
            case 8:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . # # # .
                    # # # # #
                    # # # # #
                    `)
                break;
            case 9:
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 10:
                basic.showLeds(`
                    . . . . .
                    . . # . .
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 11:
                basic.showLeds(`
                    . . . . .
                    . # # # .
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 12:
                basic.showLeds(`
                    . . . . .
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 13:
                basic.showLeds(`
                    . . # . .
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 14:
                basic.showLeds(`
                    . # # # .
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
            case 15:
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                break;
        }
    }

}








