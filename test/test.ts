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
        const listenr = this.listeners.find(lister=>lister.type === xxx);listenr
        if(listenr){
            listenr()
        }
    }
}

const eventBus = new EventBus();
eventBus.on('xxx', ()=>{console.log(1)});
eventBus.emit('xxx');
