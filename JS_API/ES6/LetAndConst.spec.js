describe('变量声明', function () {
    // xit('同一作用域下面不能重复声明', function () {
    //     try {
    //         let a = 1;
    //         let a = 2;
    //     }
    //     catch (e) {
    //         console.log(e);
    //     }
    // });
    it('let 不进行预解析', function () {
            // give
            let a = 1;
            let test = function () {
                console.log(a);
                let a = 2;
                a++;
            }
            // when
            try {
                test()
            } catch (e) {
                expect(e.message).toBe('Cannot access \'a\' before initialization')
            }
        }
    );
    it('var 进行预解析', function () {
            // give
            var a = 1;
            let test = function () {
                console.log(a);
                var a = 2;
                a++;
            }
            // when
            test()
            // then
        expect()

        }
    );
});
