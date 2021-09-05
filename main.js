const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arr){
        this._field = arr;
        this._position = arr[0][0];
    }

    print(){
        console.log(this._field)
    }
}