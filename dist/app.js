"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const HashTable_1 = __importDefault(require("./HashTable"));
(() => {
    var _a;
    const ht = new HashTable_1.default(10);
    ht.add("canada", 300);
    ht.add("japao", 40);
    ht.add("china", 58);
    ht.add("portugal", 987);
    console.log(ht.sizeOfTable());
    console.log((_a = ht.search("japao")) === null || _a === void 0 ? void 0 : _a.value);
    console.log(ht.getAllTable());
    console.log(ht.remove("china"));
    console.log(ht.getAllTable());
    ht.clear();
    console.log(ht.isEmpty());
})();
