function promiseWithError() {
    return Promise.resolve(42).then(
        function fulfilled(msg) {
            // 数字没有string函数，所以会抛出错误
            console.log(msg.toLowerCase());
        }
    );
}

describe('promise 错误处理', function () {
    it('try catch无法捕获(异步错误) promise 错误', function () {
        const fn = jest.fn()

        function foo() {
            setTimeout(() => {
                baz()
            }, 0)
        }

        try {
            foo()
        } catch (e) {
            fn() //这里不应该被执行
        }
        expect(fn).toBeCalledTimes(0)
    });
    it('should ', function () {
        const result = new Promise((resolve,reject)=>{
            try {
                promiseWithError()
                console.log(22)
                resolve();
            } catch (e) {
                reject(e);
            }
        }).then((data)=>{console.log(data,123)},(e)=>{
            console.log(e)
        })
    });
    it('catch应该捕获错误 ', function () {
        const fn = jest.fn()

        promiseWithError().catch(() => {
            fn();
            expect(fn).toBeCalledTimes(1);
        });
    });
    it('catch后的promise,如果没有抛出错误或者一个 rejected promise, 应该是fullfilled状态', function () {
        const fn1 = jest.fn()
        const fn2 = jest.fn()

        promiseWithError().catch(() => {
            fn1();
            expect(fn1).toBeCalledTimes(1);
        }).then((data) => {
            fn2()
            expect(fn2).toBeCalledTimes(1)
        });
    });
    it('catch如果抛出错误或者 rejected promise,应该是返回一个 rejected promise ', function () {
        const fn1 = jest.fn()

        promiseWithError().catch(() => {
            fn1();
            expect(fn1).toBeCalledTimes(1);
            throw new Error('error')
        }).then((data) => {

        }, (reason) => {
            expect(reason).toEqual(new Error('error'))
        });
    });
    it('catch内部也出错了,那么返回的是 reject 状态', function () {
        const fn1 = jest.fn()
        const fn2 = jest.fn()
        const fn3 = jest.fn()

        promiseWithError()
            .catch((e) => {
                fn1();
                expect(fn1).toBeCalledTimes(1);
                console.log(a)
            }).then(() => {
            fn2()
            expect(fn2).toBeCalledTimes(0)
        }, () => {
            fn3()
            expect(fn3).toBeCalledTimes(1)
        });
    });
});
