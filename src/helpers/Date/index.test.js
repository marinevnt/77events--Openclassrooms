/**
 * 
 */

import { getMonth } from ".";

describe("Date helper", () => {
    describe("When getMonth is called", () => {
        it("the function return janvier for 2022-01-01 as date", () => {
            const januaryDate = new Date("2022-01-01");
            expect (getMonth(januaryDate)).toBe("janvier");
        });
        it("the function return juillet for 2022-07-08 as date", () => {
            const julyDate = new Date("2022-07-08");
            expect (getMonth(julyDate)).toBe("juillet");
        });
        it("the function return august for 2022-08-10 as a date", () => {
            const originalDate = global.Date;
            global.Date = class extends Date {
              constructor() {
                super("2022-08-10");
              }
            };

            expect(getMonth(new Date("2022-08-10"))).toBe("août");

            global.Date = originalDate;
        });
    });
})

