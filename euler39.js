var cevreKombinasyonSayıları = [];

for(a = 1; a < 999; a++){
    for(b = a; b < (999-a); b++){
        var c = Math.sqrt(a*a + b*b);
        if(c%1 == 0){
            var cevre = a + b + c;
            if(cevre <= 1000){
                cevreKombinasyonSayıları[cevre] = (cevreKombinasyonSayıları[cevre] || 0) + 1;
            }
        }
    }
}

var maxKombinasyon = 0;
var maxCevreKombinasyon = 0;

for(var cevre = 0; cevre <= 1000; cevre++){
    var kombinasyon = cevreKombinasyonSayıları[cevre];
    if(kombinasyon && kombinasyon > maxKombinasyon){
        console.log('Çevre: ' + cevre + '  Kombinasyon: ' + kombinasyon);
        maxKombinasyon = kombinasyon;
        maxCevreKombinasyon = cevre;
    }        
}
        
console.log(maxCevreKombinasyon);

