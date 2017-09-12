'use strict';

const ArAndRom = {
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

function roman(text)
{
    let result = isNaN(text) ? to_arab(text) : to_roman(text);
    return result;
}

function to_roman(text)
{
    if (!text)
    {
        return '';
    }
    let rezult = '';

    Object.keys(ArAndRom).forEach( key => {
        while(text >= ArAndRom[key])
    {
        rezult += key;
        text -= ArAndRom[key];
    }
    });
    return rezult;
}

function to_arab(text) {
    text = text.toUpperCase();
    let rezult = 0;
    let posit = 0;

    Object.keys(ArAndRom).forEach(function (key, i, arr) {
        /*if (posit === text.length) {
            break;
        }*/
        while (text.substr(posit, key.length) === key) {
            rezult += ArAndRom[key];
            posit += key.length;
        }
    });
    return rezult;
}
