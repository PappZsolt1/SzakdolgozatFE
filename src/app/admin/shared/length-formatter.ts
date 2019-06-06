export function lengthFormatter(hours: number, minutes: number): string {
    return (hours > 0 ? hours.toString() + " óra " : "") + minutes.toString() + " perc";
}