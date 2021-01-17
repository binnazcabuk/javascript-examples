var zarbir=document.getElementById("oyuncu1").children[3];
//oyuncu1 idili div içindeki img nesnesine eriştik
var zariki=document.getElementById("oyuncu2").children[3];

var salla1=document.getElementById("oyuncu1").children[6];
//butonlara eriştik
var salla2=document.getElementById("oyuncu2").children[6];

var skorbir=document.getElementById("skorbir").children[3];
//spanlara eriştik
var skoriki=document.getElementById("skoriki").children[3];

salla2.disabled=true;
//en başta oyuncu 2 butonu aktıi değil çünkü ilk 1 başlıyor
var random=0;
var sıra=0;
var skor1=0;
var skor2=0;
var oyunBitti=false;

function Salla(oyuncu){
 if(!oyunBitti){ //oyun skoru 50'ye ulaşmadığı sürece if içeriği çalışır.
    sira=oyuncu;
    zarsalla=setInterval(zar,100);
//1sn de bir zar metodu çalış
 }   

}

var zar=function(){
    // bu metodda random olarak 1-6 arası sayı döner ve sayıya karşılık gelen durum çalışır
    //gelen sayıya göre de img değişir.
    
    random=Math.ceil(Math.random()*6);
    if(sira==1){
        salla1.disabled=true;
        // 1. oyuncu salla tuşuna bastıktan sonra buton tıklama aktifliğini kaldırmış olur.

        switch(random){
            case 1:
                zarbir.src="Resim/zar"+1+".jpg";
            break;
    
            case 2:
                zarbir.src="Resim/zar"+2+".jpg";
            break;
    
            case 3:
                zarbir.src="Resim/zar"+3+".jpg";
            break;
    
            case 4:
                zarbir.src="Resim/zar"+4+".jpg";
            break;
    
            case 5:
                zarbir.src="Resim/zar"+5+".jpg";
            break;
            
            case 6:
                zarbir.src="Resim/zar"+6+".jpg";
            break;
            
        }

    }

    if(sira==2){
        salla2.disabled=true;
        //2. oyuncu sallaya bastıktan sonra buton aktifliği kalkar
        switch(random){
            case 1:
                zariki.src="Resim/zar"+1+".jpg";
            break;
    
            case 2:
                zariki.src="Resim/zar"+2+".jpg";
            break;
    
            case 3:
                zariki.src="Resim/zar"+3+".jpg";
            break;
    
            case 4:
                zariki.src="Resim/zar"+4+".jpg";
            break;
    
            case 5:
                zariki.src="Resim/zar"+5+".jpg";
            break;
            
            case 6:
                zariki.src="Resim/zar"+6+".jpg";
            break;
            
        }

    }

}

function At(){
clearInterval(zarsalla);
    if(sira==1){
       //oyuncu1 işlemi bittikten sonra oyuncu2' nin  butonu aktifleşir
        skor1+=random;
        //gelen zar değerini skora ekleme
        skorbir.innerHTML=skor1;
        //span içeriğine (skorbir değişkeni )skor değerini atatık
        if(skor1>=50){//skor 50 veya büyükse
            oyunBitti=true;
            alert("KAZANAN 1.OYUNCU");
        }
        else{//oyun bitmediyse oyuncu 1'e sıra geçer ve oyuncu1 buton aktifleşir
            salla2.disabled=false;
        }
       
    }
    if(sira==2){
       //oyuncu2 işlemi bitince oyuncu1 butonu aktifleşir.
        skor2+=random;
        skoriki.innerHTML=skor2;   
        if(skor2>=50){//skor 50 veya büyükse
            oyunBitti=true;
            alert("KAZANAN 2.OYUNCU");
        }
        else{//oyun bitmediyse oyuncu 1'e sıra geçer ve oyuncu1 buton aktifleşir
            salla1.disabled=false;
        }
    }
}