//document.body.style.background="grey"; //body arka planı değiştik.
const btn=document.querySelector(".button");
//var button = document.getElementById('button'); bu şekilde idisini kullanarakta yapabilirdik
const body =document.body;

btn.addEventListener("click",function(e){
const renkler=["red","blue","black","yellow","grey","brown","green","white"];
e.preventDefault();
const randomRenk=Math.floor(Math.random()*renkler.length);
// renkler uzunluğu ile çarprak 1-5 arasında rasgale sayı üretmesini  sağladık
//floor ilede yuvarladık
console.log(randomRenk);
document.body.style.background=renkler[randomRenk];

});



