//ebob bulma

function ebobBulma(a,b){

    let obeb;
    if(a>b){
        obeb=b;
    }
    else{
        obeb=a;
    }
    while(a%obeb!=0 || b%obeb!=0){

        obeb--;
    }
    return obeb;
}
console.log(ebobBulma(18,6));
document.write(ebobBulma(18,6));