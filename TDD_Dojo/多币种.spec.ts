class Money {
    protected amount: number;
    static dollar = (amount :number)=>{
        return new Dollar(amount);
    }
    static franc = (amount:number) =>{
        return new Franc(amount);
    }

    protected _currency: string;

    equals(money: Money) {
        return this.amount === money.amount;
    }
    get currency(){
        return undefined;
    }
}

class Dollar extends Money {
    constructor(number: number) {
        super();
        this.amount = number;
        this._currency = "USD"
    }

    times(number: number) {
        return Money.dollar(this.amount * number)
    }
    get currency(): string {
        return this._currency;
    }
}
class Franc extends Money{

    constructor(number: number) {
        super()
        this.amount = number
    }

    times(number: number) {
        return Money.franc(this.amount * number)
    }
    get currency(): string {
        return 'CHF';
    }
}

describe('', function () {
    it('测试乘法', function () {
        const money = Money.dollar(5);
        expect(money.times(2)).toEqual(Money.dollar(10));
        expect(money.times(3)).toEqual(Money.dollar(15));
    });
    it('测试法郎乘法', function () {
        const five = new Franc(5);
        expect(five.times(2)).toEqual(new Franc(10));
        expect(five.times(3)).toEqual(new Franc(15));
    });
    it('测试相等', function () {

        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy();
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy();
        expect(new Franc(5).equals(new Franc(5))).toBeTruthy();
        expect(new Franc(5).equals(new Franc(6))).toBeFalsy();
        // expect(new Franc(5).equals(Money.dollar(5))).toBeFalsy();
    });
    it('测试币种', function () {
        expect(Money.dollar(1).currency).toEqual('USD');
        expect(Money.franc(1).currency).toEqual('CHF')
    });
});
