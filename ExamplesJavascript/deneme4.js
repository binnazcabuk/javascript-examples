const isim="binnaz";
const yas=24;
const cumle="korona bizi bitirdi :(";
let sonuc;
let sonuc2;
sonuc=isim.concat(" "+ yas); //iki değişkeni birleştirdik
// \t tab atar 
// \n ile yeni satıra geçilir
// \' tek tırnağı kullanmak için

sonuc=isim.indexOf("i");//değerin sırasını döndürür. lastIndexOf sondan sırasını döndürür.
console.log(cumle.length); //karakter sayısını verir
sonuc=isim.charAt(3); // indise göre değer döndürür.
sonuc=cumle.substring(3,5);// iki parametre arası değeri döndürür.slice de aynı mantıkdadır tek fark eksili değer alamaz.

sonuc2=cumle.split(" "); //stringleri diziye çevirir.boşluklardan ayırarak.
console.log(sonuc2[2]);// dizinin 2. elemanını yazdırdık.

sonuc=cumle.replace("bizi","herkesi");// bizi kelimesini herkesi kelimesi ile değiştik.
console.log(cumle);

sonuc=cumle.includes("ama");// string ifadenin var mı yok mu olduğuna bakar true false değer döner

console.log(sonuc);