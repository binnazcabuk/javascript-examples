var ad="binnaz";
//let ad="binnaz"; var ile aynı görevde değişken tanımlamaya yarar.
//const değişken tanımlamak için kullanılır tek fark atanan değer değiştirilemez.!!!

//const ad="binnaz"; ad="melek"; şeklinde değişmek istediğimizde hata alırız.Const sabit bir değişkendir.


//alert(ad);  ----> pop up penceresinde gösterir.
//document.write(ad);

console.log(ad); 
// tarayıcı konsolunda 

ad="umay"; // ad değişti.
console.log(ad);

//var soyad;  bu şekilde bir tanımlama yaparsam hata verir değişkene değer atamak gerek.
// var ad="ayşe"; ile var AD="veli"; farklı bir değişkendir. Büyük harf duyarlılığı  vardır.
//değişken tanımları sayı ile başlayamaz!!


//**nesne yada dizi tanımladığımızda const kullanırsak farklı değişken atayabiliriz */
//normal yerel değişken olursa farklı atama yapamıyoruz!!! 

const hobiler={ //var yada let olarakta tanımlayabilirdim.
    spor:"koşu",
    oyun:"playstation"
};
hobiler.spor="body";// hobilerimdeki özelliklere ulaşıp değiştirebilirim.
hobiler.sinema="yabancı"; //yeni özellik ekleme

console.log(hobiler);// hobilerimi yazdırabilirim.
document.write(hobiler.oyun) //ekrana yazdırma


const dizi=["kadın","yasak elma"];
dizi.push("doktorlar");// push ile ekleme yapabiliriz.
console.log(dizi);

