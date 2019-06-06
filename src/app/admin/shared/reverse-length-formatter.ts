export function reverseLengthFormatter(length: string): number[] {
    let hours = 0;
    let minutes = 0;
    if (length.length > 10) {
        hours = +length.substring(0, length.indexOf("ó") - 1);
        minutes = +length.substring(length.indexOf("a") + 2, length.indexOf("p") - 1);
    } else {
        minutes = +length.substring(0, length.indexOf("p") - 1);
    }
    return [hours, minutes];
}