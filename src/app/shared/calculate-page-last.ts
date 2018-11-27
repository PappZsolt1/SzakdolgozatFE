export function calculatePageLast(page: number, size: number, total: number): number {
    if (total == 0) {
        return 0;
    } else {
        let pageMax = ((page - 1) * size + 1) + (size - 1);
        return pageMax < total ? pageMax : total;
    }
}