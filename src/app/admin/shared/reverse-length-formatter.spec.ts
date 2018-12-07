import { reverseLengthFormatter } from "./reverse-length-formatter";

describe('reverseLengthFormatter', () => {

    it('should return 2 and 53', () => {
        let length = "2 óra 53 perc";
        expect(reverseLengthFormatter(length)[0]).toEqual(2);
        expect(reverseLengthFormatter(length)[1]).toEqual(53);
    });

    it('should return 23 and 9', () => {
        let length = "23 óra 9 perc";
        expect(reverseLengthFormatter(length)[0]).toEqual(23);
        expect(reverseLengthFormatter(length)[1]).toEqual(9);
    });

    it('should return 0 and 5', () => {
        let length = "5 perc";
        expect(reverseLengthFormatter(length)[0]).toEqual(0);
        expect(reverseLengthFormatter(length)[1]).toEqual(5);
    });

    it('should return 1 and 0', () => {
        let length = "1 óra 0 perc";
        expect(reverseLengthFormatter(length)[0]).toEqual(1);
        expect(reverseLengthFormatter(length)[1]).toEqual(0);
    });
});