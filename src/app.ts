
import HashTable from "./HashTable";

(() => {
    const ht = new HashTable(10);

    ht.add("canada", 300)
    ht.add("japao", 40)
    ht.add("china", 58)
    ht.add("portugal", 987)

    console.log(ht.sizeOfTable())
    
    console.log(ht.search("japao")?.value)

    console.log(ht.getAllTable())

    console.log(ht.remove("china"))

    console.log(ht.getAllTable())

    ht.clear()

    console.log(ht.isEmpty())
})()


