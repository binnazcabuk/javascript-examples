

var bitis=document.getElementById("bitis").offsetLeft-110;
//120 çıkardık çünkü benim at resimlerimin genişliği 100px 20 de bitiş cubuğu için
//ve ben atın kafası bitişe gelince dursun istiyorum
// bitis cizgisinin sol noktasındaki değeri alır.
var atUzaklık=0;
var atUzaklık2=0;
var atUzaklık3=0;
var atUzaklık4=0;

var kontrol=false;
const nesne=document.querySelector("#kapsayici");
const resim1=document.querySelector("#at1");
const resim2=document.querySelector("#at2");
const resim3=document.querySelector("#at3");
const resim4=document.querySelector("#at4");

const yeniResim1=document.createElement("img");
yeniResim1.src="Resimler/at1.gif";
yeniResim1.id="at1";

const yeniResim2=document.createElement("img");
yeniResim2.src="Resimler/at2.gif";
yeniResim2.id="at2";

const yeniResim3=document.createElement("img");
yeniResim3.src="Resimler/at3.gif";
yeniResim3.id="at3";

const yeniResim4=document.createElement("img");
yeniResim4.src="Resimler/at5.gif";
yeniResim4.id="at4";

function Baslat(){
    
nesne.replaceChild(yeniResim1,at1);
nesne.replaceChild(yeniResim2,at2);
nesne.replaceChild(yeniResim3,at3);
nesne.replaceChild(yeniResim4,at4);
baslat2();

}
function baslat2(){ 
    
yarisma=setInterval(Yarisma,1000);}
//her 1 sn de bir çalışsın

var Yarisma =function  (){
    atKos();
    atKos2();
    atKos3();
    atKos4();
    //1 sn de bir bu metodu çalıştır.
}
 






var sayiUret=function(){
   
    var sayi;
    do{
        sayi=Math.floor(Math.random()*100);
    }
        //1-100 arası rastgele bir sayı ürettik.
        //floor virgüllü değeri kaldırıp bir tam sayı elde etmek için
    while(sayi<50){

        return sayi;
    }
} 
function atKos(){
    var at1=document.getElementById("at1");
  
    if(atUzaklık<bitis){ // uzaklık bitisten küçükse 
        atUzaklık+=sayiUret();// sayi üret
        if(atUzaklık>=bitis){// üreliten sayı bitişten büyük mü
            
            atUzaklık=bitis; //at uzaklığı bitişe eşittir yani bitiş noktasında
            clearInterval(yarisma);// intervali kapat

            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("kazanan at 1");},2000);
                //ilk bitişe ulaşan at kontrol değerini true yapar
                // bitişe ulaştıktan 2sn sonra kazanan yazızı belirir.
            }

            at1.style.marginLeft=bitis+"px";// at1 resmi soldan ne kadar pz uzakta.Bittiği için bitiş noktası değerini verdik

            

        }else{ //uzaklık hala küçükse

            at1.style.marginLeft=atUzaklık+"px";// resme sol uzaklık değeri eklemeye devam
        }
    }
   
   
/*
   üretilen rastgele sayıyı belirttiğim uzaklık 
   değişkenine atıyoruz. at1 resminin
   sol kenar uzaklık değerine bu sayıyı atıyoruz.
   bu şekilde üretilen rasgele sayı ile birlikte
   bu uzaklık değeri artacak ve resim sağa doğru hareket ediyormuş
   gibi görünecek
   */
}
function atKos2(){
    var at2=document.getElementById("at2");
    if(atUzaklık2<bitis){ // uzaklık bitisten küçükse 
        atUzaklık2+=sayiUret();// sayi üret
        if(atUzaklık2>=bitis){// üreliten sayı bitişten büyük mü
            
            atUzaklık2=bitis; //at uzaklığı bitişe eşittir yani bitiş noktasında
            clearInterval(yarisma);// intervali kapat

            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("kazanan at 2");},2000);
            }
            at2.style.marginLeft=bitis+"px";// at1 resmi soldan ne kadar pz uzakta.Bittiği için bitiş noktası değerini verdik

            

        }else{ //uzaklık hala küçükse

            at2.style.marginLeft=atUzaklık2+"px";// resme sol uzaklık değeri eklemeye devam
        }
    }
}

function atKos3(){
    var at3=document.getElementById("at3");
    if(atUzaklık3<bitis){ // uzaklık bitisten küçükse 
        atUzaklık3+=sayiUret();// sayi üret
        if(atUzaklık3>=bitis){// üreliten sayı bitişten büyük mü
            
            atUzaklık3=bitis; //at uzaklığı bitişe eşittir yani bitiş noktasında
            clearInterval(yarisma);// intervali kapat

            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("kazanan at 3");},2000);
            }

            at3.style.marginLeft=bitis+"px";
            // at1 resmi soldan ne kadar pz uzakta.Bittiği için bitiş noktası değerini verdik
            
        }else{ //uzaklık hala küçükse

            at3.style.marginLeft=atUzaklık3+"px";// resme sol uzaklık değeri eklemeye devam
        }
    }
}
function atKos4(){
    var at4=document.getElementById("at4");
    if(atUzaklık4<bitis){ // uzaklık bitisten küçükse 
        atUzaklık4+=sayiUret();// sayi üret
        if(atUzaklık4>=bitis){// üreliten sayı bitişten büyük mü
            
            atUzaklık4=bitis; //at uzaklığı bitişe eşittir yani bitiş noktasında
            clearInterval(yarisma);// intervali kapat

            if(!kontrol){
                kontrol=true;
                setTimeout(function(){alert("kazanan at 4");},2000);
            }
            at4.style.marginLeft=bitis+"px";// at1 resmi soldan ne kadar pz uzakta.Bittiği için bitiş noktası değerini verdik
            
        }else{ //uzaklık hala küçükse

            at4.style.marginLeft=atUzaklık4+"px";// resme sol uzaklık değeri eklemeye devam
        }
    }
}