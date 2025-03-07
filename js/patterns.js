let p = "";
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= i; j++) {
    p += j;
  }
  p += "\n";
}
console.log(p);

// Solution 2
let result = "";
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  result += row + "\n";
}

// 1
// 12
// 123
// 1234
// 12345
// 123456

let pa = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pa += i;
  }
  pa += "\n";
}
console.log(pa);

// 1
// 22
// 333
// 4444
// 55555

let pat = "";
let v = 1;
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    pat += v + " ";
    v++;
  }
  pat += "\n";
}
console.log(pat);

// 1
// 2 3
// 4 5 6
// 7 8 9 10

let patt = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 6 - i; j++) {
    patt += j;
  }
  patt += "\n";
}
console.log(patt);

// 12345
// 1234
// 123
// 12
// 1

let patte = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    patte += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    patte += i;
  }
  patte += "\n";
}
console.log(patte);

//     1
//    222
//   33333
//  4444444
// 555555555

let patter = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    patter += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    patter += k;
  }
  patter += "\n";
}
console.log(patter);

//     1
//    123
//   12345
//  1234567
// 123456789

let v1 = 1;
let pattern = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    pattern += "  ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern += v1; //pattern += String(v1),padStart(2, ' ');
    v1++;
  }
  pattern += "\n";
}
console.log(pattern);

//         1
//       234
//     56789
//   10111213141516
// 171819202122232425

let pattern2 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    pattern2 += "*";
  }
  pattern2 += "\n";
}
console.log(pattern2);

// *****
// *****
// *****
// *****
// *****

let pattern3 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5; j++) {
    if (i == 1 || i == 5) pattern3 += "*";
    else {
      if (j == 1 || j == 5) {
        pattern3 += "*";
      } else {
        pattern3 += " ";
      }
    }
  }
  pattern3 += "\n";
}
console.log(pattern3);

// *****
// *   *
// *   *
// *   *
// *****

let pattern4 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    pattern4 += " ";
  }
  for (let k = 1; k <= i; k++) {
    pattern4 += "*";
  }
  pattern4 += "\n";
}
console.log(pattern4);

//     *
//    **
//   ***
//  ****
// *****

let pattern5 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern5 += "*";
  }
  pattern5 += "\n";
}
console.log(pattern5);

// *
// **
// ***
// ****
// *****

let pattern6 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 5 - i; j++) {
    pattern6 += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    pattern6 += "*";
  }
  pattern6 += "\n";
}
console.log(pattern6);

//     *
//    ***
//   *****
//  *******
// *********

let pattern7 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    pattern7 += j;
  }
  pattern7 += "\n";
}
console.log(pattern7);

// 54321
// 5432
// 543
// 54
// 5

let pattern8 = "";

for (let i = 1; i <= 5; i++) {
  for (let j = 6 - i; j >= 1; j--) {
    pattern8 += j;
  }
  pattern8 += "\n";
}
console.log(pattern8);

// 54321
// 4321
// 321
// 21
// 1

let pattern9 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern9 += i;
  }
  pattern9 += "\n";
}
console.log(pattern9);

// 1
// 22
// 333
// 4444
// 55555

let pattern10 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    if (j === 1 || j === i || i === 5) {
      pattern10 += "*";
    } else {
      pattern10 += " ";
    }
  }
  pattern10 += "\n";
}
console.log(pattern10);

// *
// **
// * *
// *  *
// *****

let pattern11 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 6 - i; j++) {
    pattern11 += "*";
  }
  pattern11 += "\n";
}
console.log(pattern11);

// *****
// ****
// ***
// **
// *

let pattern12 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern12 += "A";
  }
  pattern12 += "\n";
}
console.log(pattern12);

// A
// AA
// AAA
// AAAA
// AAAAA

let pattern13 = "";
for (let i = 1; i <= 5 - 1; i++) {
  for (let j = 1; j <= i; j++) {
    pattern13 += "$";
  }
  pattern13 += "\n";
}
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 6 - i; j++) {
    pattern13 += "%";
  }
  pattern13 += "\n";
}
console.log(pattern13);

// $
// $$
// $$$
// $$$$
// %%%%%
// %%%%
// %%%
// %%
// %

let pattern14 = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 6 - i; j++) {
    pattern14 = pattern14 + "A ";
  }
  pattern14 = pattern14 + "\n";
}
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern14 = pattern14 + "B ";
  }
  pattern14 = pattern14 + "\n";
}
console.log(pattern14);

// A A A A A
// A A A A
// A A A
// A A
// A
// B
// B B
// B B B
// B B B B
// B B B B B

let pattern15 = "";
for (let i = 5; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    pattern15 += "* ";
  }
  pattern15 += "\n";
}
for (let i = 2; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern15 += "* ";
  }
  pattern15 += "\n";
}
console.log(pattern15);

//same as above

for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= 6 - i; j++) {
    pattern = pattern + "* ";
  }
  pattern = pattern + "\n";
}
for (let i = 2; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
    pattern = pattern + "* ";
  }
  pattern = pattern + "\n";
}
console.log(pattern);

// * * * * *
// * * * *
// * * *
// * *
// *
// * *
// * * *
// * * * *
// * * * * *


