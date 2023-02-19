import React, { useEffect } from 'react';
import './style.css';

export default function App() {
  let name = 'karthik';

  useEffect(() => {
    //reverseStr(name);
    //    maxChars(name);
    //fixBuzz(20)

    //  chunk([1, 2, 3, 4], 2);
    //chunk([1, 2, 3, 4,5,7,8], 3);

    /*  anagrams('rail safety', 'fairy tales') 
anagrams('RAIL! SAFETY!', 'fairy tales')
anagrams('Hi there', 'Bye there') */

    /* capitalize('a short sentence')// --> 'A Short Sentence'
capitalize('a lazy fox') //--> 'A Lazy Fox'
capitalize('look, it is working!') //--> 'Look, It Is Working!' */
    steps(2);
    //    '# '
    //    '##'

    steps(3);
    //    '#  '
    //    '## '
    //    '###'

    steps(4);
    //    '#   '
    //    '##  '
    //    '### '
    //    '####'
  }, []);
  function steps(n) {
    /*    let str = '#'
  for(let i = 1; i <= n;i++){
  console.log(str.toString().padEnd(n-1,'-'),n)
 // if(i){str = str * i}
 str = str+'#' */

    for (let i = 0; i <= n; i++) {
      let str = '';
      for (let j = 0; j < n; j++) {
        if (j <= i) {
          str += '#';
        } else str += '-';
      }

      console.log(str);
    }
  }
  function capitalize(str) {
    console.log(
      str
        .split(' ')
        .map((item) => item[0].toUpperCase() + item.slice(1))
        .join(' ', ' ')
    );
    return str
      .split(' ')
      .map((item) => item[0].toUpperCase() + item.slice(1))
      .join(' ', ' ');
  }
  function anagrams(stringA, stringB) {
    let strA = maxChars(stringA.replace(/[^\w]/g, '').toLowerCase());
    let strB = maxChars(stringB.replace(/[^\w]/g, '').toLowerCase());
    let result = true;
    // console.log('anagrams',strA,strB)
    if (Object.entries(strA).length === Object.entries(strB).length) {
      Object.entries(strB).map((item) => {
        //console.log(Object.entries(strB),Object.entries(strA),item)
        let strAresult = Object.entries(strA).filter((f, index) => {
          return f[0] === item[0] && f[1] === item[1];
        });
        if (!strAresult) {
          result = false;
        }
        //   console.log(strAresult )
      });
      Object.entries(strA).map((item) => {
        //  console.log(Object.entries(strB),Object.entries(strA),item)
        let strAresult = Object.entries(strB).filter((f, index) => {
          return f[0] === item[0] && f[1] === item[1];
        });
        if (!strAresult) {
          result = false;
        }
        console.log(strAresult);
      });
    } else {
      result = false;
    }
    console.log('anagrams---------------' + stringA + stringA, result);

    return result;
  }

  const sliceStr = (arr, size) => {
    arr.slice(0, size);
  };
  const chunk = (arr, size) => {
    const newArr = [];
    /* 
    arr.map((i, index) => {
   let last = newArr[newArr.length-1]
   console.log('last',last)
      if (!last || last.length === size) {
        newArr?.push([i]);

      } else {
        last?.push(i)
      } */
    if (arr.length > 0) {
    }

    console.log('newArr', newArr);
    // });
    return newArr;
  };

  const fixBuzz = (n) => {
    // console.log('n',n)

    for (let i = 0; i <= n; i++) {
      //console.log('i',i)
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizbuzz');
      } else if (i % 3 === 0) {
        console.log('buzz');
      } else if (i % 5 === 0) {
        console.log('fiz');
      } else {
        console.log(i);
      }
    }
  };

  const reverseStr = (str) => {
    let arr = [];
    str.split('').map((item) => {
      arr.unshift(item);
    });

    // console.log(arr.reverse().join().replaceAll(',',''))
    console.log(arr.join().replaceAll(',', ''));
    return arr.join().replaceAll(',', '');
  };

  const maxChars = (str) => {
    let chars = {};
    for (let char of str) {
      chars[char] = chars[char] + 1 || 1;
    }
    var pChar;
    for (let mChar of Object.entries(chars)) {
      pChar = pChar ? (mChar[1] > pChar[1] ? mChar : pChar) : mChar;
    }
    console.log('chars', chars);
    //   console.log('phars', pChar[0]);
    return chars;
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
