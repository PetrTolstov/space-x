function calcBays(numbers: string) {
    let numbersStrList = numbers.split(",")
    if (numbersStrList.at(0) == '') return []
    let numbersList = numbersStrList.map((el) => parseFloat(el))
        .sort((a, b) => b - a)

    const boxesList: number[][] = []
    for (const number of numbersList) {
        if (number > 10) {
            console.error("Error: Number is greater than 10")
            return null
        }
        let p = false
        for (const box of boxesList) {
            const sum = (box.reduce((acc, val) => acc + val, 0) + number)
            if (parseFloat(sum.toFixed(2)) <= 10) {
                box.push(number)
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