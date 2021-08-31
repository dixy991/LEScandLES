var datum=new Date();
$(document).ready(function() {
    ispisMenija();
    ispisSlicki();
    ispisKartica();
    ispisKategorija();
    ispisMirisa();
    ispisaFavorita();
    ispisKorpa();
    ispisUnutarForme();
    brojiKolicinu();
    sakrij();
    alertovati();
    hoveruj();
    vrtiSlike(1);
    skroler();
    otvoriMeni();
    toglovati();
});
window.onload = function(){
    // plugin
    new SimpleLightbox({
    elements: '.gallery a',
    // more options here
  });

    //dogadjaji

    let zgrabiSve=document.querySelectorAll(".tekstPolja");
    for(let i=0;i<zgrabiSve.length;i++){
        zgrabiSve[i].addEventListener("blur", zaTekstPolja);
    }
    document.querySelector("#saljiDalje").addEventListener("click", zaOstatakForme);
}

//dzejom

function vrtiSlike(slika) {
    var ukupnoSlika = $('#mirisi .grliSlike:eq(1) img').length;
    slika = slika % ukupnoSlika;
      
    $('#mirisi .grliSlike:eq(1) img').eq(slika).fadeOut(function() {
          // re-order the z-index
      $('#mirisi .grliSlike:eq(1) img').each(function(i) {
        $(this).css(
          'zIndex', ((ukupnoSlika - i) + slika) % ukupnoSlika
        );
      });
      $(this).show();
      setTimeout(function() {vrtiSlike(++slika);}, 3000);
    });
  }
function brojiKolicinu(){
    let broj=1;
        $('.minus').click(function(){
            $(this).next().val(--broj);
            let stanje=$(this).next().val();
            if(stanje<0){
                alert("Heey!!!It's a mistake");
                stanje=$(this).next().val("0");
                broj=1
            }
        });
        $('.plus').click(function(){
            let stanje=$(this).prev().val(broj++);
        });
}
function sakrij(){     
            $('.spoiler').hide();
            $('.revealer').click(function(e){
                e.preventDefault();
              $(this).hide();
              $(this).prev().fadeIn();
            });
}
function otvoriMeni(){
    var ispodMeni= $('#otvori').hide();
    $('#goreDole').click(function(e){
        e.preventDefault();
        ispodMeni.slideToggle('fast');
    })
}
function alertovati(){
    $('.alertuj').click(function(e){
        alert("Sorry, you have to log in first!");
    });
}
function toglovati(){
    $('.mirisniTekst').hide();
        $('.togluj').click(function(){
          $(this).prev().slideToggle("slow");
        });
}
function hoveruj(){
        $('.prosoHover').hover(function(){
            $(this).find(".srednje").toggleClass("opasiti");
            $(this).find("img").toggleClass("opasitiSlike");
        }, function(){
            $(this).find(".srednje").toggleClass("opasiti");
            $(this).find("img").toggleClass("opasitiSlike");
        });
}
function skroler(){
    var strelica=$('#strelica').hide();
    var logo=$('#logo').hide();
    strelica.on('click',function() {

        $('html').animate({scrollTop: 0}, 'slow');

    });
    $(window).scroll(function(){

        if($(this).scrollTop() > 650) {

            $('#meni').css('background-color','rgba(255, 255, 255, 0.7');
            $('#meni a').css({ "font-size": "25px"});
            logo.show();

        } else {
        
            $('#meni').css('backgroundColor','transparent');
            $('#meni a').css({ "font-size": "27px"});
            logo.hide();

        }

        if($(this).scrollTop() > 1000) {

            strelica.fadeIn();

        } else strelica.fadeOut(0);

    })
}

//dzavom

function ispisMenija(){
    var asocijala=document.querySelector("#mreze");
    var mreze=["facebook","instagram","twitter","user ml-4","shopping-cart"];
    for(let i=0;i<mreze.length;i++){
        if(i==3 || i==4){
            asocijala.innerHTML+=`<a href="#" class="text-dark"><i class="fa fa-${mreze[i]} mx-2" aria-hidden="true"></i></a>`;
            continue;
        }
        asocijala.innerHTML+=`<a href="https://${mreze[i]}.com" target="_blank" class="text-dark"><i class="fa fa-${mreze[i]} mx-2" aria-hidden="true"></i></a>`;
    }
}
function ispisSlicki(){

    var ispodSlicki=["Free Shipping with $75 Purchase","50th Anniversary Celebration","100% Happiness Guarantee"];
    for(let j=0;j<2;j++){
    for(let i=0;i<ispodSlicki.length;i++){
        document.getElementsByClassName("slicke")[j].innerHTML+=`
        <div class="col-lg-4 col-md-6  py-5 col-sm-12">
            <figure class=" border-right border-left" >
                <img src="img/slicka${i}.gif" class="mx-auto d-block" alt="Slicka${i}" />
                <figcaption class="text-center mt-4">${ispodSlicki[i]}</figcaption>
            </figure>
        </div>`;
    }}

}
function ispisKartica(){

    var nasloviKartica=["Personalized candles","The most amazing candle","Holiday gift guide"];
    var teksticiKartica=["CO2","Coconut","Chocolate"];
    for(let j=0;j<3;j++){
    for(let i=0;i<nasloviKartica.length;i++){
        document.getElementsByClassName("kartice")[j].innerHTML+=`
        <div class="col-lg-4 col-md-6 my-2 d-flex justify-content-center text-center">
            <div class="card" style="width: 25rem;">
                <img src="img/kendl${i}.jpg" class="rounded-top rounded-bottom card-img-top" alt="Kendl${i}"/>
            <div class="card-body">
                <h5 class="card-title">${nasloviKartica[i]}</h5>
                <p class="card-text spoiler">${teksticiKartica[i]}</p>
                <a href="#" class="btn revealer mb-3 ">Check the smell</a></br>
                <button type="button" class="btn btn-block alertuj">Shop</button>
            </div>
        </div>
      </div>`;
    }}
}
function ispisKategorija(){

    var kategorije=["Candles","Gelstins","Accessories","Home fragrance","NEW Collection","Gifts&Gift card"];
    for(let i=0;i<6;i++){
        document.getElementById("kategorije").innerHTML+=`
            <div class="col-lg-2 col-md-4 mx-auto col-sm-6  text-center">
                <figure class="prosoHover ">
                    <img src="img/kategorija${i}.jpg" class="w-100 rounded-top rounded-bottom rounded-lg slikaIspod" alt="Kategorija${i}"/>
                    <div class="srednje">
                        <figcaption class="tekstPreko">${kategorije[i]}</figcaption>
                    </div>
                </figure>
            </div>
        `;
    }
}
function ispisMirisa(){

    var tekstMirisa=["The history of candles","Finishing a candle with a...","Candle making business"];
    var nizTeksta=["The history of candles is truly fascinating! What was once an ancient day necessity has now evolved to become a modern day luxury. Now, the variety…"
,"Have you ever wondered how to achieve perfectly smooth tops on your candles? Well, we are spilling the secret…",
"Are you ready to take your candle making hobby to the next level and make it a candle making business? Or perhaps you have never even…"];
        for(let i=0;i<tekstMirisa.length;i++){
            document.getElementById("mirisi").innerHTML+=`<div class="col-lg-4 col-md-6 py-5 col-sm-12">
                <figure class="grliSlike">
                </figure>
                <h5 class="text-center  mt-4">${tekstMirisa[i]}</h5>
                <p class="mirisniTekst">${nizTeksta[i]}</p>
                <button type="button" class="btn togluj btn-block">Read more</button>
            </div>`;
            if(i==1){
                for(let j=0;j<3;j++){
                    document.getElementsByClassName("grliSlike")[i].innerHTML+=`
                    <img src="img/miris${j}.jpg" class="rounded-top rounded-bottom rounded-lg mx-auto w-100 d-block" alt="Miris${j}" />
                    `;
                }
                document.getElementsByClassName("grliSlike")[i].setAttribute("id", "jelRadiOvo");
            }
            else{
                document.getElementsByClassName("grliSlike")[i].innerHTML+=`
                    <img src="img/cesvica${i}.jpg" class="rounded-top rounded-bottom rounded-lg mx-auto w-100 d-block" alt="Miris${i}" />
                    `;
                
        }
    }
}
function ispisaFavorita(){
    for(let i=0;i<6;i++){
        document.getElementById("favorito").innerHTML+=`
        <div class="col-lg-2 col-md-4 col-sm-6 my-3">
              <div class="gallery card bg-dark text-white text-center">
                    <a title="Fan number ${i}" href="img/sendas${i}.jpeg">
                    <img src="img/sendas${i}.jpeg" class="card-img" alt="Fan${i}"/>
                    </a>
                </div>
        </div>`;
    }
}
function ispisKorpa(){

    var naslovKorpi=["Christmas breath","Stormy","Bad&&Bougie"];
    var cena=["20.00&euro;","39.2&euro;","80.00&euro;"]
    for(let j=0;j<3;j++){
    for(let i=0;i<naslovKorpi.length;i++){
        document.getElementsByClassName("korpa")[j].innerHTML+=`
        <div class="col-lg-4 col-sm-12 col-md-6 mb-4">
             <div class="card">
            <img src="img/rito${i}.jpg" class="rounded-top rounded-bottom rounded-lg card-img-top" alt="Slika proizvoda${i}"/>
                <div class="card-body ">
                    <h5 class="card-title">${naslovKorpi[i]}</h5>
                    <p class="card-text"> ${cena[i]}</p>     
                        <div class="povecaj text-center">
                        <div class="minus">-</div>
                        <input type="text" class="kolicina" value="0"/>
                        <div class="plus">+</div>
                        </div>
                        <div class="dodaj text-center pt-2">Add</div>
                </div>
            </div>
        </div>`;
    }}
}
function ispisUnutarForme(){

    var listaG="<select name='ddlListaG' class='form-control bg-' id='godine'>";
    listaG+=`<option value="0">Choose carefully</option>`;
    for(let i=1970;i<=2019;i++){
        listaG+=`<option value="${i}">${i}</option>`;
    }
    listaG+="</select>";
    document.getElementById("upisiGodine").innerHTML+=listaG + `<span id="greskaGodine"></span>`;

    var nizDrzava=["Austria","Italy","Belgium","Latvia","Bulgaria","Lithuania","Croatia","Luxembourg","Cyprus","Malta","Czechia","Netherlands","Denmark","Poland" ,"Estonia","Portugal" ,"Finland	","Romania" ,"France","Slovakia","Germany","Slovenia" ,"Greece","Spain","Hungary","Sweden","Ireland","United Kingdom"];
    var listaD="<select name='ddlListaD' class='form-control bg-' id='drzave'>";
    listaD+=`<option value="0">Choose carefully</option>`;
    for(let i=0;i<nizDrzava.length;i++){
        listaD+=`<option value="${nizDrzava[i]}">${nizDrzava[i]}</option>`;
    }
    listaD+="</select>";
    document.getElementById("upisiDrzave").innerHTML+=listaD +`<span id="greskaDrzave"></span>`;

}
function zaTekstPolja(){

    let ime,prezime,mejl,sifra;

    ime = document.querySelector("#ime").value.trim();
    prezime = document.querySelector("#prezime").value.trim();
    mejl=document.querySelector("#mejl").value.trim();
    sifra = document.querySelector("#sifra").value.trim();

    let reImePrezime,reMejl,reSifra;

    reImePrezime = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,25})+$/;
    reMejl= /^[a-z][a-z\d\-\_\.]+\@[a-z\d]+(\.[a-z]{2,4})+(\.[a-z]{2,4})*$/;
    reSifra=/^[A-Z][0-9a-zA-Z]{10,}$/;
    
    let greskaIme,greskaPrezime,greskaMejl,greskaSifre

    greskaIme = document.querySelector("#greskaIme");
    greskaPrezime = document.querySelector("#greskaPrezime");
    greskaMejl = document.querySelector("#greskaMejl");
    greskaSifre = document.querySelector("#greskaSifre");

    if(ime == ""){
        greskaIme.innerHTML = "You have to fill in!"
    }
    else{
        if(!reImePrezime.test(ime)){
            greskaIme.innerHTML = "Bad format";
        }else{
            greskaIme.innerHTML = "";
        }
    }

    if(prezime == ""){
        greskaPrezime.innerHTML = "You have to fill in!"
    }
    else{
        if(!reImePrezime.test(prezime)){
            greskaPrezime.innerHTML = "Bad format";
        }else{
            greskaPrezime.innerHTML = "";
        }
    }

    if(mejl == ""){
        greskaMejl.innerHTML = "You have to fill in!"
    }
    else{
        if(!reMejl.test(mejl)){
            greskaMejl.innerHTML = "Bad format...";
        }
        else{
            greskaMejl.innerHTML = "";
        }
    }

    if(sifra == ""){
        greskaSifre.innerHTML = "You have to fill in!"
    }
    else{
        if(!reSifra.test(sifra)){
            greskaSifre.innerHTML = "Bad format...";
        }
        else{
            greskaSifre.innerHTML = "";
        }
    }
}
function zaOstatakForme(){

    
        let sveOk=true;
    
     //hvatanje vrednosti forme
    
       let ime = document.querySelector("#ime").value.trim();
      let  prezime = document.querySelector("#prezime").value.trim();
      let  mejl=document.querySelector("#mejl").value.trim();
      let  sifra = document.querySelector("#sifra").value.trim();
    let godinaRodjenja=document.querySelector("#godine").value;
    let drzavaBoravka = document.querySelector("#drzave").value;
    let pol = document.getElementsByName("pol");
    let slanjeVesti = document.getElementsByName("vesti");
    let uslovi = document.querySelector("#uslov");
    
    //regexovi

      let  reImePrezime = /^[A-Z][a-z]{2,15}(\s[A-Z][a-z]{2,25})+$/;
      let  reMejl= /^[a-z][a-z\d\-\_\.]+\@[a-z\d]+(\.[a-z]{2,4})+(\.[a-z]{2,4})*$/;
      let  reSifra=/^[A-Z][0-9a-zA-Z]{10,}$/;
    

    //hvatanje za ispis gresaka

    let  greskaIme = document.querySelector("#greskaIme");
    let greskaPrezime = document.querySelector("#greskaPrezime");
    let greskaMejl = document.querySelector("#greskaMejl");
    let greskaSifre = document.querySelector("#greskaSifre");
    let greskaGodine = document.querySelector("#greskaGodine");
    let greskaDrzave = document.querySelector("#greskaDrzave");
    let greskaPola = document.querySelector("#greskaPola");
    let greskaVesti = document.querySelector("#greskaVesti");
    let greskaUslova = document.querySelector("#greskaUslova");
    

    //ispitivanje

        if(ime == ""){
            sveOk = false;
            greskaIme.innerHTML = "You have to fill in!"
        }
        else{
            if(!reImePrezime.test(ime)){
                sveOk = false;
                greskaIme.innerHTML = "Bad format";
            }else{
                greskaIme.innerHTML = "";
            }
        }
    
        if(prezime == ""){
            sveOk = false;
            greskaPrezime.innerHTML = "You have to fill in!"
        }
        else{
            if(!reImePrezime.test(prezime)){
                sveOk = false;
                greskaPrezime.innerHTML = "Bad format";
            }else{
                greskaPrezime.innerHTML = "";
            }
        }
    
        if(mejl == ""){
            sveOk = false;
            greskaMejl.innerHTML = "You have to fill in!"
        }
        else{
            if(!reMejl.test(mejl)){
                sveOk=false;
                greskaMejl.innerHTML = "Bad format";
            }
            else{
                greskaMejl.innerHTML = "";
            }
        }
    
        if(sifra == ""){
            sveOk = false;
            greskaSifre.innerHTML = "You have to fill in!"
        }
        else{
            if(!reSifra.test(sifra)){
                sveOk = false;
                greskaSifre.innerHTML = "Bad format";
            }
            else{
                greskaSifre.innerHTML = "";
            }
        }
    
    if(godinaRodjenja == "0"){
        sveOk = false;
        greskaGodine.innerHTML = "You have to choose";
    }
    else if(godinaRodjenja>datum.getFullYear()-18){
        sveOk = false;
        greskaGodine.innerHTML = "You have to be older then 18";
    }
    else{
        greskaGodine.innerHTML = "";
    }
    if(drzavaBoravka =="0"){
        sveOk = false;
        greskaDrzave.innerHTML = "You have to choose";
    }
    else{
        greskaDrzave.innerHTML = "";
    }
    //radiola
    let biranPol = "";
    for(let i = 0; i < pol.length; i++){
        if(pol[i].checked){
            biranPol = pol[i].value;
            break;
        }
    }

    if(biranPol == ""){
        sveOk = false;
        greskaPola.innerHTML = "This is required too!";
    }
    else{
        greskaPola.innerHTML = "";
    }

    let biranOdobrenje = "";
    for(let i = 0; i < slanjeVesti.length; i++){
        if(slanjeVesti[i].checked){
            biranOdobrenje = slanjeVesti[i].value;
            break;
        }
    }

    if(biranOdobrenje == ""){
        sveOk = false;
        greskaVesti.innerHTML = "This is required too!";
    }
    else{
        greskaVesti.innerHTML = "";
    }

    //chechka

    if(!uslovi.checked){
        sveOk = false;
        greskaUslova.innerHTML = "You know it...";
    }
    else{
        greskaUslova.innerHTML = "";
    }
    if(sveOk) {
        document.querySelector('#kraj').innerHTML = `Finally`;
    }
    else{
        document.querySelector('#kraj').innerHTML = `All fields are required`;
    }
}

