
describe('event', function () {
    const event = {
        listeners:[],
        on:function (fn:Function){
            this.listeners.push(fn)
        },
        emit:function (){
            this.listeners.forEach(f=>f());
        },
    }
    it('注册事件,并可以被emit触发', function () {
        const fn = jest.fn()
        event.on(fn);
        event.emit();
        expect(fn).toBeCalledTimes(1)
    });
});

class Subject {
    observers:Observer[] = []

    addObserver(observer: Observer) {
        this.observers.push(observer)
    }

    trigger(param: { payload: string; type: string }) {
        this.observers.forEach(
            (observer)=>{
                observer.update(param)
            }
        )
    }
}

class Observer {
    testValue:string
    update(param: {type:string,payload:string}){
        this.testValue = param.payload
    }
}

describe('观察者模式', function () {
    it('should ', function () {
        const subject = new Subject();
        const observer = new Observer();
        subject.addObserver(observer)
        subject.trigger({type:'a',payload:'a'});
        expect(observer.testValue).toEqual('a')
    });
});
