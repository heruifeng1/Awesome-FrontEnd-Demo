//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".
//
// Sample output:
//
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
function converter(inputNum: number): string | number {
    let result: string | number = inputNum;
    const canDividedByThree = inputNum % 3 === 0;
    const canDividedByFive = inputNum % 5 === 0;

    if (canDividedByThree) {
        result = 'fizz'
    }
    if (canDividedByFive) {
        result = 'buzz'
    }
    if (canDividedByThree && canDividedByFive) {
        result =  'fizzbuzz'
    }
    if(inputNum === 0){
        result = 0;
    }
    return result;
}

// ... etc up to 100
describe('fizzbuzz', function () {
    test.each([
        [0,0],
        [1, 1],
        [3, 'fizz'],
        [5, 'buzz'],
        [15, 'fizzbuzz']
    ])('should', (a, expected) => {
        //when
        const result = converter(a as number);

        //then
        expect(result).toBe(expected);
    });
    it('输出流', function () {
        // give
        const array = Array.from(new Array(100),(val,index)=>index);
        // when
        const result = array.map(converter)
        // then
        expect(result).toEqual([
            0,          1,      2,      'fizz',     4,      'buzz',
            'fizz',     7,      8,      'fizz',     'buzz', 11,
            'fizz',     13,     14,     'fizzbuzz', 16,     17,
            'fizz',     19,     'buzz', 'fizz',     22,     23,
            'fizz',     'buzz', 26,     'fizz',     28,     29,
            'fizzbuzz', 31,     32,     'fizz',     34,     'buzz',
            'fizz',     37,     38,     'fizz',     'buzz', 41,
            'fizz',     43,     44,     'fizzbuzz', 46,     47,
            'fizz',     49,     'buzz', 'fizz',     52,     53,
            'fizz',     'buzz', 56,     'fizz',     58,     59,
            'fizzbuzz', 61,     62,     'fizz',     64,     'buzz',
            'fizz',     67,     68,     'fizz',     'buzz', 71,
            'fizz',     73,     74,     'fizzbuzz', 76,     77,
            'fizz',     79,     'buzz', 'fizz',     82,     83,
            'fizz',     'buzz', 86,     'fizz',     88,     89,
            'fizzbuzz', 91,     92,     'fizz',     94,     'buzz',
            'fizz',     97,     98,     'fizz'
        ])
    });
});
