import calcBays from "../services/calcBays"

describe('calcBays function', () => {
    it('should distribute numbers into boxes correctly', () => {
        const input = "5.2, 3.5, 2.7, 1.8, 4.2, 2.0";
        const result = calcBays(input);
        const expectedResult = [
            [5.2, 4.2],
            [3.5, 2.7, 2.0, 1.8]
        ];
        expect(result).toEqual(expectedResult);
    });

    it('should handle numbers that are greater than 10', () => {
        const input = "5.2, 11.0, 3.5, 7.0";
        const result = calcBays(input);
        expect(result).toBeNull();
    });

    it('should distribute single number greater than 10 into separate box', () => {
        const input = "7.2, 8.5";
        const result = calcBays(input);
        const expectedResult = [
            [8.5],
            [7.2]
        ];
        expect(result).toEqual(expectedResult);
    });

    it('should handle empty input string', () => {
        const input = "";
        const result = calcBays(input);
        const expectedResult : number[][] = [];
        expect(result).toEqual(expectedResult);
    });
});