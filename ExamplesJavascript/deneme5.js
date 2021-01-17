//javascript html kodları ile kullanma
const isim="fikret";
const yas=30;


/* eski kullanım
htmlCode="<nav> <ul><li><isim: " +
isim+ 
"</li><li><yasım: " +
yas+
 "</li></ul></nav>";
*/


//es6 standartları yazım kuralına göre
var htmlCode= `<nav><ul><li>isim:${isim}</li><li>yas:${yas}</li>`;
document.body.innerHTML = htmlCode;
