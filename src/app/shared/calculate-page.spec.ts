import { calculatePage } from "./calculate-page";

describe('calculatePage', () => {

    it('should return 1 (p: 1, s: 10, t: 1)', () => {
        let page = 1;
        let size = 10;
        let total = 1;
        expect(calculatePage(page, size, total)).toEqual(1);
    });

    it('should return 2 (p: 2, s: 20, t: 43)', () => {
        let page = 2;
        let size = 20;
        let total = 43;
        expect(calculatePage(page, size, total)).toEqual(2);
    });

    it('should return 4 (p: 4, s: 10, t: 40)', () => {
        let page = 4;
        let size = 10;
        let total = 40;
        expect(calculatePage(page, size, total)).toEqual(4);
    });

    it('should return 4 (p: 5, s: 30, t: 100)', () => {
        let page = 5;
        let size = 30;
        let total = 100;
        expect(calculatePage(page, size, total)).toEqual(4);
    });

    it('should return 3 (p: 12, s: 20, t: 53)', () => {
        let page = 12;
        let size = 20;
        let total = 53;
        expect(calculatePage(page, size, total)).toEqual(3);
    });

    it('should return 5 (p: 6, s: 10, t: 48)', () => {
        let page = 6;
        let size = 10;
        let total = 48;
        expect(calculatePage(page, size, total)).toEqual(5);
    });

    it('should return 5 (p: 7, s: 20, t: 100)', () => {
        let page = 7;
        let size = 20;
        let total = 100;
        expect(calculatePage(page, size, total)).toEqual(5);
    });
});