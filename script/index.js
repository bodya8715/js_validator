class RangeValidator {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }

    get from() {
        return this._from;
    }

    set from(number) {
        if (isNaN(number) || typeof number !== 'number') {
            throw new TypeError("Not a number");
        }

        if (number > this.to && typeof this.to !== 'undefined' ) {
            throw new RangeError('Число не входит в диапазон');
        }
        
        this._from = number;
        
    }
    
    get to() {
        return this._to;
    }

    set to(number) {
        if ( isNaN(number) || typeof number !== 'number' ) {
            throw TypeError('Not a number');
        }

        if (number < this.from) {
            throw new RangeError('Число не входит в диапазон');
        }

        this._to = number;
    }

    getterRange() {
        return [].push(this.from, this.to);
    }

    // validate(number) {
    //     if (isNaN(number) || typeof number !== 'number') {
    //         throw new TypeError("Not a number");
    //     }

    //     if ((number >= this.from) && (number <= this.to)) {
    //         return number;
    //     } else {
    //         throw new RangeError('Число не входит в диапазон');
    //     }
    // }
}

function compare(num1, num2) {

}

let objectWithNumbers = new RangeValidator(5,3);

console.log(objectWithNumbers);