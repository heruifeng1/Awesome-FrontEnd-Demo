import {createElement, createTextElement} from "./Didact";

describe('CreateElement', function () {
    it('支持输入type,不输入第二个参数就返回空的 children', function () {
        // give
            const element = createElement('div')
        // then
        expect(element).toEqual({type:'div',props:{children:[]}})
    });
    it('第二个参数为空,第三个参数可以为多个座位 children', function () {
        const element = createElement('div',null,'a','b')
        expect(element).toEqual({
            type:'div',
            props:{children:[createTextElement('a'),createTextElement('b')]}
        })
    });
    it('第二个参数放入 props 中合并', function () {
        const element = createElement('div',{id:'foo'},'a','b')
        expect(element).toEqual({
            type:'div',
            props:{id:'foo',children:[createTextElement('a'),createTextElement('b')]}
        })
    });
});
