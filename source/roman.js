'use strict';
//const font_ar = [1,4,5,9,10,40,50,90,100,400,500,900, 1000];
//const font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
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
function to_roman(text) 
{
 if (!text)
 {
     return '';
 }
 let rezult = '';
 //let n = font_ar.length - 1;
 /*while (text > 0)
 {
    if (text >= font_ar[n]) 
    {
        rezult += font_rom[n];
        text -= font_ar[n];
    }
    else n--;
 }*/
 for (let key in ArAndRom)
 {
     while(text >= ArAndRom[key])
     {
         rezult += key;
         text -= ArAndRom[key];
     }
 }
 return rezult;
}

function to_arab(text) 
{
 text = text.toUpperCase();
 let rezult = 0;
 let posit = 0;
 //let n = font_ar.length - 1;
 /*while (n >= 0 && posit < text.length)
 {
    if (text.substr(posit, font_rom[n].length) == font_rom[n])
    {
        rezult += font_ar[n];
        posit += font_rom[n].length;
    }
    else n--;
 }*/
 for (let key in ArAndRom)
 {
     if(posit === text.length)
     {
         break;
     }
     while(text.substr(posit, key.length) === key)
     {
         rezult += ArAndRom[key];
         posit += key.length;
     }
 }
 return rezult;
}

function roman(text)
{
    let result = isNaN(text) ? to_arab(text) : to_roman(text);
    return result;
   /* if(isNaN(text))
    {
        return to_arab(text);
    }
    else
        return to_roman(text);*/
}
