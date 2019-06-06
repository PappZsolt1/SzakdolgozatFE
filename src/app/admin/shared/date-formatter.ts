export function dateFormatter(bDate: string): string {
    let dash = bDate.indexOf("-");
    return bDate.substring(0, dash) + ". " + bDate.substr(dash + 1, 2) + ". " + bDate.substr(dash + 4, 2) + ".";
}