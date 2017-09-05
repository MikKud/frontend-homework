'use strict';
const font_ar = [1,4,5,9,10,40,50,90,100,400,500,900];
const font_rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

function to_roman(text) 
{
 if (!text) return '';
 let rezult = '';
 let n = font_ar.length - 1;
 while (text > 0) 
 {
    if (text >= font_ar[n]) 
    {
        rezult += font_rom[n];
        text -= font_ar[n];
    }
    else n--;
 }
 return rezult;
}

function to_arab(text) 
{
 let text = text.toUpperCase();
 let rezult = 0;
 let posit = 0;
 let n = font_ar.length - 1;
 while (n >= 0 && posit < text.length) 
 {
    if (text.substr(posit, font_rom[n].length) == font_rom[n]) 
    {
        rezult += font_ar[n];
        posit += font_rom[n].length;
    }
    else n--;
 }
 return rezult;
}

function roman(text)
{
 if(isNumeric(text))
 {
  return to_roman(text);
 }
 else
  return to_arab(text);
}
