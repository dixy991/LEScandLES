//MENI
var zaMeni=document.getElementById("meni");
var meni=["Home","Shop"];
zaMeni.innerHTML+="<ul>";
for(let i=0;i<meni.length;i++){
    zaMeni.innerHTML+=` <li class="nav-item active list-inline-item">
    <a class="nav-link text-dark text-uppercase" href="#">${meni[i]}</a>
</li>`;
}
zaMeni.innerHTML+="</ul>";

var asocijala=document.querySelector("#mreze");
var mreze=["facebook","instagram","twitter","user ml-4","shopping-cart"];
for(let i=0;i<mreze.length;i++){
    if(i==3 || i==4){
        asocijala.innerHTML+=`<a href="#" class="text-dark"><i class="fa fa-${mreze[i]} mx-2" aria-hidden="true"></i></a>`;
        continue;
    }
    asocijala.innerHTML+=`<a href="https://${mreze[i]}.com" target="_blank" class="text-dark"><i class="fa fa-${mreze[i]} mx-2" aria-hidden="true"></i></a>`;
}
//CENTAR artikli
var naslovi=["T-shirts","Hoodies"];
for(let i=0;i<naslovi.length;i++){
document.getElementById("probam").innerHTML+=`
<div class="row">
    <div class="col-lg-12 text-center">
        <h1 class="my-5">${naslovi[i]}</h1>
            <div class="row artikli d-flex justify-content-center">`
            for(let j=0;j<4;j++){
                document.getElementsByClassName("artikli")[i].innerHTML+=`<div class="col-lg-3 col-md-6 col-sm-12">
                <figure>
                    <img src="img/majca${j}.jpg" alt="Majica${j}" />
                    <figcaption>B99 shirt</figcaption>
                </figure>
                </div>`;
            }`
            </div>
    </div>
</div>`;
}
document.getElementsByClassName("artikli")[0].innerHTML+=`<a href="#" class="text-dark py-2 px-3 border">View all</a>`;

//SPECIJAL artikl
var nizOpisa=["This jacket Jacket has water resistant 82gm 100% polyester fabric with zip front closure.",
"Soft to the touch, versatile, and great for layering.",
"This lightweight windbreaker packs easily and is great for all weather conditions.",
"Featuring a scuba neck, mesh lined 3-panel hood, and welt pockets."];
var opisDuksa=document.getElementById("opis");
var lista="<ul>";
for(let i=0;i<nizOpisa.length;i++){
    lista+=`<li class="my-3">${nizOpisa[i]}</li>`;
}
lista+="</ul>";
opisDuksa.innerHTML+=lista + `<p>Size:</p>`;

var velicina=["Xtra So Cute(XS)","So Cute(S)","Muy Cute(M)","Le Cute(L)","Xtra Cute(X)"];
var listaV="<select name='ddlListaV' class=' dropdown-item bg-dark text-warning dropdown-toggle'>";
for(let i=0;i<velicina.length;i++){
    listaV+=`<option value=${velicina[i]}">${velicina[i]}</option>`;
}
listaV+="</select>";
opisDuksa.innerHTML+=listaV + `</br><button type="button" class="btn btn-block  btn-dark">Buy now</button>`;

//FUTER
var futer=document.getElementById("futer");
var imenaFutera=["Navigation","Newsletter","Get connected"];
for(let i=0;i<imenaFutera.length;i++){
    futer.innerHTML+=`<div class="col-lg-4 col-md-6 col-sm-12" id="${imenaFutera[i]}">
    <h6 class="text-dark text-uppercase my-2">${imenaFutera[i]}</h6>
</div>`
}

var brziLinkovi=document.getElementById("Navigation");
var nizLinkova=["Search","Faq","Support","Contact"];
var listaL="<ul>";
for(let i=0;i<nizLinkova.length;i++){
    listaL+=`<li class="my-3 list-inline-item"><a href="#" class="text-dark">${nizLinkova[i]}</a></li>`;
}
listaL+="</ul>";
brziLinkovi.innerHTML+=listaL + `<p>2019 DL99</p>`;

var novosti=document.getElementById("Newsletter").innerHTML+="</br><input class='mr-3 form-control' type='email' placeholder='email@example.com'/></br><input class='btn btn-sm btn-block  btn-dark' type='button'value='Subscribe'/>";

var linkoviFuteru=["pinterest","youtube","sitemap"];
mreze.pop();mreze.pop();
mreze.push("file","male");
for(let i=0;i<mreze.length;i++){
    document.getElementById("Get connected").innerHTML+=`<a href="https://${mreze[i]}.com" class="text-dark">
    <i class="fa fa-${mreze[i]} mx-3 my-4" aria-hidden="true"></i></a>`;
    document.getElementById("Get connected").innerHTML+=`<a href="https://${linkoviFuteru[i]}.com" class="text-dark">
    <i class="fa fa-${linkoviFuteru[i]} mx-3 my-4" aria-hidden="true"></i></a>`;
}

for(let i=0;i<2;i++){
document.getElementById("materijali").innerHTML+=`
<div class="row">
    <div class="col-lg-12 text-center">
            <div class="row materija d-flex justify-content-center">`
            for(let j=0;j<4;j++){
                document.getElementsByClassName("materija")[i].innerHTML+=`<div class="col-lg-3 col-md-6 col-sm-12">
                <figure>
                    <img src="img/majca${j}.jpg" alt="Majica${j}" />
                    <figcaption>B99 shirt</figcaption>
                </figure>
                </div>`;
            }`
            </div>
    </div>
</div>`;
}