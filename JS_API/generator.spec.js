describe('', function () {
    it('返回一个遍历器对象,通过 next 来到达下一个 yield 或者 return ', function () {
        function* helloWorldGenerator(){
            yield 'hello';
            yield 'world';
            return 'ending';
        }
        var hw = helloWorldGenerator();
        expect(hw.next()).toEqual({value:'hello',done:false});
        expect(hw.next()).toEqual({value:'world',done:false});
        expect(hw.next()).toEqual({value:'ending',done:true});
        expect(hw.next()).toEqual({value:undefined,done:true});
    });


});
