'use strict';

const RomanToArabic = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};

function roman(text) {
    return isNaN(text) ? to_arab(text) : to_roman(text);
}

function to_roman(text) {
    let result = '';

    Object.keys(RomanToArabic).forEach( key => {
        while(text >= RomanToArabic[key]){
         result += key;
         text -= RomanToArabic[key];
        }
    });
    return result;
}

function to_arab(text) {
    text = text.toUpperCase();
    let result = 0;
    let posit = 0;

    Object.keys(RomanToArabic).forEach(key => {
        while (text.substr(posit, key.length) === key) {
            result += RomanToArabic[key];
            posit += key.length;
        }
    });
    return result;
}
