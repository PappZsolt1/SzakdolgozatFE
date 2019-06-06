import { calculatePageFirst } from "./calculate-page-first";

describe('calculatePageFirst', () => {

    it('should return 0 (p: 1, s: 10, t: 0)', () => {
        let page = 1;
        let size = 10;
        let total = 0;
        expect(calculatePageFirst(page, size, total)).toEqual(0);
    });

    it('should return 11 (p: 2, s: 10, t: 23)', () => {
        let page = 2;
        let size = 10;
        let total = 23;
        expect(calculatePageFirst(page, size, total)).toEqual(11);
    });

    it('should return 121 (p: 5, s: 30, t: 432)', () => {
        let page = 5;
        let size = 30;
        let total = 432;
        expect(calculatePageFirst(page, size, total)).toEqual(121);
    });

    it('should return 61 (p: 4, s: 20, t:99)', () => {
        let page = 4;
        let size = 20;
        let total = 99;
        expect(calculatePageFirst(page, size, total)).toEqual(61);
    });
});