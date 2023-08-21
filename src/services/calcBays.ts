function calcBays(numbers: string) {
    const numbersList = numbers.split(",")
        .map((el) => parseFloat(el))
        .sort((a, b) => b - a)
    const boxesList: number[][] = []
    for (const number of numbersList) {
        let p = false
        for (const box of boxesList) {
            const sum = (box.reduce((acc, val) => acc + val, 0) + number)
            if (parseFloat(sum.toFixed(2)) <= 10) {
                box.push(number)
                console.log(box);
                p = true
                break
            }
        }
        if (!p) {
            boxesList.push([number])
        }
    }
    return boxesList
}

export default calcBays