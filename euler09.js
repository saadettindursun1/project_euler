var a,b,c;
for (c = 0; ; c++) {
    for (b = 0; b < c ; b++) {
        for (a = 0; a < b ; a++) {
          if(a*a+b*b==c*c)
          {
            if(a+b+c==1000)
            { 
                var sonuc = a*b*c;
                console.log('Sonuç'+sonuc);
            }
          }
        }
    }
}