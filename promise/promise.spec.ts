interface Listen {
    type:string,
    cb:Function
}
class EventBus {
    listeners:Array<Listen>=[]

    constructor() {
        this.listeners = []

    }

    on(xxx: string, cb: any) {
        this.listeners.push({type:xxx,cb})
    }

    emit(xxx: string) {
        const abc = [12,23]
        console.log(abc.f`ind)
        const listens = this.listeners.filter(lister=>lister.type === xxx);
        if(listens && listens.length){
            listens.forEach(listen => {
                (listen.cb) && listen.cb();
            })
        }
    }
}
function isFunction(cb: Function) {
    return typeof cb === 'function'
}

const eventBus = new EventBus();
eventBus.on('xxx', ()=>{console.log(1)});
eventBus.emit('xxx');
