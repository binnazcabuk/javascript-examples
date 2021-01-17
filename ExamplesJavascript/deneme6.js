//nesneler

const nesne ={
    isim:"fikret",
    soyad:"çevik",
    yas:30,
    email:"abc@gmail.com",
    hobiler:["kitap","spor"],// dizi şeklinde ekleme yapabiliriz.

    ogrenim:{           //nesne içinde nesne tanımlayabiliriz
        ilkokul:"konya",
        ortaokul:"imkb",
    },
    dogumgunu:function(){ //nesne içinde fonksiyon tanımlayabiliriz.
        return 1998;
    },
};
let sonuc=nesne.isim;
//let sonuc=nesne["isim"]; şeklinde de isim değerine ulaşabiliriz
//let sonuc=nesne.hobiler[0]; şeklinde dizi içindeki değerleri çekebilirim.
//let sonuc=nesne.ogrenim["ilkokul"]; 
//yada let sonuc=nesne.ogrenim.ilkokul  şeklinde nesne içinde nesne tanımı içindeki istediğim özellik bilgisini çekerim.
//let sonuc=nesne.dogumgunu(); şeklinde fonksiyonu kullanırız ve içindeki değeri döndürür. 

console.log(sonuc);
