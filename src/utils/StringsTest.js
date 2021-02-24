let a = 5
let b = 6

function zipTag(strings, ...args) {
  return strings[0] + args.map((e, i) => `${e}${strings[i + 1]}`).join('')
}

let untaggedResult = `${a} + ${b} = ${a + b}`;
let taggedResult = zipTag`${a} + ${b} = ${a + b} + ${11}  + ${12}`;
console.log(untaggedResult)
console.log(taggedResult)

console.log(String.raw`\u00A9`);

function printRaw(strings) {
  console.log('Actual characters:');
  for (const string of strings) {
    console.log(string);
  }
  console.log('Escaped characters;');
  for (const rawString of strings.raw) {
    console.log(rawString);
  }
}
printRaw`\u00A9${'and'}\n`;


let symbol1 = Symbol('1')
let symbol2 = Symbol('1')
console.log(symbol1 === symbol2)

class Foo {
  async *[Symbol.asyncIterator]() { }
}
let f = new Foo();
console.log(f[Symbol.asyncIterator]());

class Emitter {
  constructor(max) {
    this.max = max;
    this.asyncIdx = 0;
  }
  async *[Symbol.asyncIterator]() {
    while (this.asyncIdx < this.max) {
      yield new Promise((resolve) => resolve(this.asyncIdx++));
    }
  }
}
async function asyncCount() {
  let emitter = new Emitter(5);
  for await (const x of emitter) {
    console.log(x);
  }
}
asyncCount();


class Bar {}
class Baz extends Bar {
  static [Symbol.hasInstance]() {
    return false
  }
}

let bBaz = new Baz()
console.log(Bar[Symbol.hasInstance](bBaz))
console.log(bBaz instanceof Bar)

console.log(Baz[Symbol.hasInstance](bBaz))
console.log(bBaz instanceof Baz)

let initArr = [1];
let secArr = [2];
console.log(secArr[Symbol.isConcatSpreadable]);
console.log(initArr.concat(secArr));
secArr[Symbol.isConcatSpreadable] = false;
console.log(initArr.concat(secArr));

let res1 = 23 & 3
console.log(res1)
console.log(typeof('50'%7))
console.log('50' + 7)