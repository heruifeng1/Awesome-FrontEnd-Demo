//Write a program that prints the numbers from 1 to 100, but...
//
// numbers that are exact multiples of 3, or that contain 3, must print a string containing "Fizz"
//    For example 9 -> "...Fizz..."
//    For example 31 -> "...Fizz..."
//
// numbers that are exact multiples of 5, or that contain 5, must print a string containing "Buzz"
//    For example 10 -> "...Buzz..."
const FIZZ = "Fizz";
const BUZZ = 'Buzz';
const FIZZBUZZ = 'FizzBuzz';

function converter(inputNum: number): number | string {
    let result: number | string = '';
    const canDividedByThree = inputNum % 3 === 0;
    const canDividedByFive = inputNum % 5 === 0;
    const isContain3 = String(inputNum).includes('3');
    const isContain5 = String(inputNum).includes('5');
    if (canDividedByThree || isContain3) {
        result = FIZZ
    }
    if (canDividedByFive || isContain5) {
        result += BUZZ
    }
    if (inputNum === 0) {
        result = 0
    }
    return result || inputNum
}

//    For example 51 -> "...Buzz..."
describe('fizzbuzzplus', function () {
    test.each([
        [0, 0],
        [1, 1],
        [3, FIZZ],
        [6, FIZZ],
        [13, FIZZ]
    ])('3的倍数或者包含 3 返回fizz', (a, expected) => {
        //when
        const result = converter(a as number);

        //then
        expect(result).toBe(expected);
    });
    test.each([
        [0, 0],
        [5, BUZZ],
        [10, BUZZ],
        [15, FIZZBUZZ]
    ])('5的倍数或者包含5返回buzz', (a, expected) => {
        //when
        const result = converter(a as number);

        //then
        expect(result).toBe(expected);
    });
    test.each([
        [0, 0],
        [15, FIZZBUZZ],//3的倍数,且是 5 的倍数
        [45, FIZZBUZZ],//3的倍数,且包含 5
        [35, FIZZBUZZ],//包含 3,且是 5 的倍数
        [235, FIZZBUZZ],//包含 3,且包含 5
    ])('3的规则与五的规则混合,4种混合', (a, expected) => {
        //when
        const result = converter(a as number);

        //then
        expect(result).toBe(expected);
    });

});
