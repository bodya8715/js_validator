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

        if ( typeof this.to !== 'undefined' && number > this.to ) {
            throw new RangeError('Число "from" больше "to');
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
            throw new RangeError('Число "to" меньше "from"');
        }

        this._to = number;
    }

    get range() {
        return [this.from, this.to];
    }

    validate(number) {
        if ( isNaN(number) || typeof number !== 'number' ) {
            throw TypeError('Not a number');
        }
        if( number >= this.from && number <= this.to ) {
            return number;
        }
        
        throw new RangeError("Число не входит в указанный диапазон");
    }
}

let objectWithNumbers = new RangeValidator(3,5);

console.log(objectWithNumbers);