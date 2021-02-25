describe('promise', function () {
    it('catch测试', function () {

    });
    it('finally 无视 promise 对象的状态,强制执行', function () {
        const fn = jest.fn()
        const promise = new Promise((resolve, reject) => {
            // 2. 设置一个 0-10 随机数
            const number = Math.floor(Math.random() * 10);

            // 3. 如果这个数大于 5，我们当它成功了
            if (number > 5) {
                resolve('大于 5'); // resolve 相当于解决的意思
            } else { // 4. 否则就是失败的
                reject('小于 5'); // reject 相当于处理失败的意思
            }
        });
        promise.then((res) => {
            console.log('成功：', res);
        }).catch((error) => {
            console.log('失败：', error);
        }).finally(() => {
            // 6. 注意 finally 就是剧终的意思，不管是好结局还是坏结局，都是结局
            fn()
            expect(fn).toBeCalledTimes(1)
        });
    });
});
