enum StatusInPromise {
    PENDING = 'pending',
    FullFilled = 'fullFilled',
    Rejected = 'rejected'
}

class myPromise {
    private status: StatusInPromise = StatusInPromise.PENDING
    private value: any;
    private reason: any;
    private onFullFilledCallBacks: Function[] = [];
    private onRejectedCallBacks: Function[] = [];

    constructor(executor: (resolve, reject) => void) {
        let resolve = (value) => {
            if (this.status !== StatusInPromise.PENDING) return;
            this.value = value;
            this.changeStatus(StatusInPromise.FullFilled)
        }
        let reject = (reason) => {
            if (this.status !== StatusInPromise.PENDING) return;
            this.reason = reason;
            this.changeStatus(StatusInPromise.Rejected)
        }
        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    private changeStatus(status: StatusInPromise) {
        if([StatusInPromise.FullFilled,StatusInPromise.Rejected].includes(status)) return;
        this.status = status
        if(this.status === StatusInPromise.FullFilled){
            this.onFullFilledCallBacks.forEach(cb=>{
                cb()
            })

        }
        if(this.status === StatusInPromise.Rejected){
            this.onRejectedCallBacks.forEach(cb=>{
                cb()
            })
        }
    }

    then(onFullFilled: (value: any) => void, onReject: (reason: any) => void) {
        let reason = this.reason;
        let value = this.value;
        if(this.status === StatusInPromise.PENDING){
           this.onFullFilledCallBacks.push(()=>{
               onFullFilled(value)
           })
           this.onRejectedCallBacks.push(()=>{
               onReject(reason)
           })
       }else{
            if (this.status === StatusInPromise.FullFilled) {
                onFullFilled(value)
            } else  {
                onReject(reason)
            }
        }


    }

}

describe('myPromise', function () {
    it('当成功时,那么then中第一个参数函数被执行', function () {
        const promise = new myPromise((resolve, reject) => {
            try {
                resolve(1)
            } catch (e) {
                reject(e)
            }
        })
        promise.then((data) => {
            expect(data).toBe(1)
        }, (reason) => {
        })
    });
    it('当失败时,then 中第二个参数被执行', function () {
        const promise = new myPromise((resolve, reject) => {
            reject(1)
        })
        promise.then(() => {
        }, (reason) => {
            expect(reason).toBe(1)
        })
    });
    it('创建时,延时改变其状态', function () {
        const promise = new myPromise(((resolve, reject) => {
            jest.useFakeTimers()
            setTimeout(() => {
                resolve(1)
            }, 100)
        }))
        promise.then((data) => {

            expect(data).toBe(0)
        }, () => {

        })
    });
    it('should ', function () {
        const fn = jest.fn();
        jest.useFakeTimers()

        setTimeout(fn,1000)
        expect(setTimeout).toBeCalledTimes(1)
    });
});
