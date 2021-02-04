//Write a program to generate all potential anagrams of an input string.
//
// For example, the potential anagrams of "biro" are
//
// biro bior brio broi boir bori
// ibro ibor irbo irob iobr iorb
// rbio rboi ribo riob roib robi
// obir obri oibr oirb orbi orib

//任务分解
//1.一开始只有一个字母,那么就只返回一个字母
//2.2 个字母时,分解为初始 string,新增加的字母插入 string 的所有间隙
function def(s: string, a: string) {
    if (s === '') {
        return [s + a]
    }
    let result = [];
    const length = s.length;
    const sArr = s.split('')
    for (let i = 0; i <= length; i++) {
        const newArr = sArr.slice(0);
        newArr.splice(i,0,a)
        const newS = newArr.join('');
        result.push(newS)
    }
    return result
}

function f(b: string) {
    if(b.length === 0 ){
        return ['']
    }
    if(b.length === 1){
        return [b];
    }
    const strArr = b.split('');
    return strArr.reduce((acc, char)=>{
        if(acc.length ===0){
            acc.push(char)
            return acc;
        }
        const thislayer = acc.reduce((prevAcc,curr)=>{
            prevAcc= prevAcc.concat(def(curr,char))
            return prevAcc
        },[])
        acc = thislayer
        return acc
    },[])

}

//3.多个字母,可以用递归的方式继续进行
describe('', function () {
    it('初始化只有一个字母', function () {
        // give
        const input = 'a'
        // when
        const abc = def('', 'a')
        // then
        expect(abc).toEqual(['a'])
    });
    it('有 1 个字母了,追加一个字母', function () {
        // give
        const input = 'b'
        // when
        const abc = def('a', 'b')
        // const defg = def('a', 'a')
        // then
        expect(abc).toEqual(['ba', 'ab'])
        // expect(defg).toBe(['aa'])
    });
    test.each([
        ['a' ,['a'] ],
        ['ab',['ba','ab']],
        ['abc',["cba","bca","bac","cab","acb","abc"]]
    ])('\'多字符,改为单字符\'', ( b, expected) => {
        //when
        const result = f( b);

        //then
        expect(result).toEqual(expected);
    });
});
