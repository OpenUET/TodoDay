export const calcStreakNumber = (date1, date2) => {
    if (!date1 instanceof Date && !date2 instanceof Date) return 0
    if (date1 > date2) return 0

    const oneDay = 24 * 60 * 60 * 1000
    return Math.round(Math.abs((date1 - date2) / oneDay)) + 1
}