import { lengthFormatter } from "./length-formatter";

describe('lengthFormatter', () => {

    it('should return "10 óra 30 perc"', () => {
        let hours = 10;
        let minutes = 30;
        expect(lengthFormatter(hours, minutes)).toEqual("10 óra 30 perc");
    });

    it('should return "5 óra 0 perc"', () => {
        let hours = 5;
        let minutes = 0;
        expect(lengthFormatter(hours, minutes)).toEqual("5 óra 0 perc");
    });

    it('should return "43 perc"', () => {
        let hours = 0;
        let minutes = 43;
        expect(lengthFormatter(hours, minutes)).toEqual("43 perc");
    });
});