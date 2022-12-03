"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class HashTable {
    constructor(size) {
        this.valor = [];
        this.size = size;
        this.length = 0;
    }
    calculatingHashFunc(key) {
        // tamanho da string móodulo tamanho da hash table
        return key.length % this.size;
    }
    // inserting key-value pair values
    add(key, value) {
        let hashResult = this.calculatingHashFunc(key);
        // if(this.valor[hashResult]){
        //     // n tem uma key com esse valor da var hash
        //     this.valor.push({indice: hashResult, value: value})
        //     this.length++;
        //     return;
        // }
        this.valor[hashResult] = {
            indice: hashResult,
            value: value
        };
        this.length++;
    }
    search(key) {
        const hashResult = this.calculatingHashFunc(key);
        if (this.valor[hashResult].value && this.valor[hashResult].indice) {
            return this.valor[hashResult];
        }
    }
    remove(key) {
        const hashResult = this.calculatingHashFunc(key);
        const valueThatIwillDelete = this.valor[hashResult];
        delete this.valor[hashResult];
        return valueThatIwillDelete;
    }
    sizeOfTable() {
        return this.length;
    }
    clear() {
        this.valor = [];
        this.length = 0;
    }
    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    getAllTable() {
        return this.valor;
    }
}
exports.default = HashTable;
