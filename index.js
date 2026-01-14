let code1;
code1 = 7 + 3;
console.log(code1);

const code2 = 100 / 2 - 10;
console.log(code2);

const code3 = 36 + (15 % 4);
console.log(code3);

const message = `The vault has been secured. The combination is:`;
const codeA = message + ` ` + code1 + `-` + code2 + `-` + code3;
console.log(codeA);

const codeB = `${code1}-${code2}-${code3}`;
console.log(codeB);
