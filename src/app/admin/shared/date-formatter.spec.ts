import { dateFormatter } from "./date-formatter";

describe('dateFormatter', () => {

    it('should return "2018. 01. 20."', () => {
        let date = "2018-01-20";
        expect(dateFormatter(date)).toEqual("2018. 01. 20.");
    });
});