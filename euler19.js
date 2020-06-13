
var aydakiGunler = [0,31,0,31,30,31,30,31,31,30,31,30,31];
function subatGunler(yil) {
    if (yil % 4 != 0) return 28;
    if (yil % 100 == 0 && yil % 400 != 0) return 28;
    return 29;
}

function pazarSay() {
    var gun = 1;
    var pazarSayi = 0;
    for (var ay = 0; ++ay < 13;) {
        
        gun += (ay == 2) ? subatGunler(1900) : aydakiGunler[ay];
    }
    for (var yil = 1900; ++yil < 2001;) {   
        for (ay = 0; ++ay < 13;) {
            if (gun % 7 == 0) pazarSayi++;
            gun += (ay == 2) ? subatGunler(yil) : aydakiGunler[ay];
        }
    }
    return pazarSayi;
}
var say=0;
say += pazarSay();        
    console.log('1 Ocak 1901 ile 31 Aralık 2000 arasında '+say+' kez ayın ilk günü pazar olmuştur.');