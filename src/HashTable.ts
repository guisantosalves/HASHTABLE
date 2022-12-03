class HashTable {
  private length: number;
  private valor: table[];
  private size: number;

  constructor(size: number) {
    this.valor = [];
    this.size = size;
    this.length = 0;
  }

  calculatingHashFunc(key: string): number {
    // tamanho da string móodulo tamanho da hash table
    return key.length % this.size;
  }

  // inserting key-value pair values
  add(key: string, value: number): void{
    let hashResult: number = this.calculatingHashFunc(key)
    
    // if(this.valor[hashResult]){
    //     // n tem uma key com esse valor da var hash
    //     this.valor.push({indice: hashResult, value: value})
    //     this.length++;
    //     return;
    // }

    this.valor[hashResult] = {
        indice: hashResult,
        value: value
    }
    this.length++
  }

  search(key: string): table | undefined {
    const hashResult: number = this.calculatingHashFunc(key)
    if(this.valor[hashResult].value && this.valor[hashResult].indice) {
        return this.valor[hashResult]
    }
  }

  remove(key: string): table{
    const hashResult: number = this.calculatingHashFunc(key);
    
    const valueThatIwillDelete = this.valor[hashResult]

    delete this.valor[hashResult]

    return valueThatIwillDelete;
  }

  sizeOfTable(): number{
    return this.length
  }

  clear(): void{
    this.valor = [];
    this.length = 0;
  }

  isEmpty(): boolean {
    if(this.length == 0){
        return true
    }else{
        return false
    }
  }
  
  getAllTable(): table[]{
    return this.valor;
  }
}

export default HashTable;