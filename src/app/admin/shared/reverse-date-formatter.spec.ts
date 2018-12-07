import { reverseDateFormatter } from "./reverse-date-formatter";

describe('reverseDateFormatter', () => {

    it('should return "2017-11-03"', () => {
        let date = "2017. 11. 03.";
        expect(reverseDateFormatter(date)).toEqual("2017-11-03");
    });
});