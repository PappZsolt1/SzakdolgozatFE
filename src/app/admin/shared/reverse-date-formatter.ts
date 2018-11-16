export function reverseDateFormatter(bDate: string): string {
    let dot = bDate.indexOf(".");
    return bDate.substring(0, dot) + "-" + bDate.substr(dot + 2, 2) + "-" +  bDate.substr(dot + 6, 2);
}