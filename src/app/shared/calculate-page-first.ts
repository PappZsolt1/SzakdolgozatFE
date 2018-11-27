export function calculatePageFirst(page: number, size: number, total: number): number {
    if (total == 0) {
        return 0;
    } else {
        return (page - 1) * size + 1;
    }
}