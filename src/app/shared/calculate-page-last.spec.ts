import { calculatePageLast } from "./calculate-page-last";

describe('calculatePageLast', () => {

    it('should return 0 (p: 1, s: 20, t: 0)', () => {
        let page = 1;
        let size = 20;
        let total = 0;
        expect(calculatePageLast(page, size, total)).toEqual(0);
    });

    it('should return 50 (p: 5, s: 10, t: 51)', () => {
        let page = 5;
        let size = 10;
        let total = 51;
        expect(calculatePageLast(page, size, total)).toEqual(50);
    });

    it('should return 40 (p: 2, s: 20, t: 40)', () => {
        let page = 2;
        let size = 20;
        let total = 40;
        expect(calculatePageLast(page, size, total)).toEqual(40);
    });

    it('should return 67 (p: 3, s: 30, t: 67)', () => {
        let page = 3;
        let size = 30;
        let total = 67;
        expect(calculatePageLast(page, size, total)).toEqual(67);
    });

    it('should return 51 (p: 6, s: 10, t: 51)', () => {
        let page = 6;
        let size = 10;
        let total = 51;
        expect(calculatePageLast(page, size, total)).toEqual(51);
    });

    it('should return 740 (p: 25, s: 30, t: 740)', () => {
        let page = 25;
        let size = 30;
        let total = 740;
        expect(calculatePageLast(page, size, total)).toEqual(740);
    });

    it('should return 143 (p: 8, s: 20, t: 143)', () => {
        let page = 8;
        let size = 20;
        let total = 143;
        expect(calculatePageLast(page, size, total)).toEqual(143);
    });

    it('should return 30 (p: 3, s: 10, t: 80)', () => {
        let page = 3;
        let size = 10;
        let total = 80;
        expect(calculatePageLast(page, size, total)).toEqual(30);
    });
});