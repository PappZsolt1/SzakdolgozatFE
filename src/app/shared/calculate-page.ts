export function calculatePage(page: number, size: number, total: number): number {
    if ((page - 1) * size + 1 > total) {
        return Math.ceil(total / size);
    } else {
        return page;
    }
}