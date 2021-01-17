//veri türleri dönüşümü

let data;
data=20;
//sayıyı string tipine dönüştürme
data=String(20);
console.log(typeof(data));

//boolean string dönüşümü
data=String(false);
console.log(typeof(data));

//dates string dönüşümü
 data=String(new Date());
 console.log(typeof(data));

//array string dönüşümü
 data=String([0,1,2]);
console.log(typeof(data));

//string number dönüşümü
let data2="2";
data2=Number(data2);
console.log(typeof(data2));

//bool sayı dönüşümü
data=Number(true);
console.log(typeof(data));

//string number dönüşüm
//data=parseInt("1.2");//tam sayıyı verir(1 yazar)
data=parseFloat("1.5");//ondalıklı sayıyı yazar(1.5 yazar)
console.log(data);
console.log(typeof(data));
