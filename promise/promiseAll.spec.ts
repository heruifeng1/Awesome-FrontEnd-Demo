describe('promise.all', function () {
    it('传入的是空迭代对象,那么返回一个 resolved 状态的 promise', function () {
        // give
        const input =  [];
        // when
        const result = Promise.all(input);
        // then
        result.then(data=>{
            expect(data).toEqual([])
        })
    });
    it('传入的是空迭代对象,那么返回一个 resolved 状态的 promise', function () {
        // give
        const input =  [1];
        // when
        const result = Promise.all(input);
        // then
        result.then(data=>{
            expect(data).toEqual([1])
        })
    });

    it('接受一个可迭代对象,内部为多个promise,返回一个 promise', function () {
        Promise.all([Promise.resolve(3), 42])
            .then((data) => {
                console.log(1)
                expect(data).toEqual([3,42])
            })
    });
    it('所有的 promise 都 resolve 之后,才返回', function () {

    });
    it('只要任何一个输入为reject或者输入不合法的 promise,会立即抛出错误,reject 抛出的是第一个 抛出的错误信息', function () {

    });
});
