const mps = document.querySelector("#mps");
const its = document.querySelector("#its");
const per = document.querySelector("#per");
const bcs = document.querySelector("#bcs");
const mus = document.querySelector("#mus");
const his = document.querySelector("#his"); 
const mapas = document.querySelector("#mapas"); 
const itens = document.querySelector("#itens"); 
const personagens = document.querySelector("#personagens"); 
const barcos = document.querySelector("#barcos"); 
const musicas = document.querySelector("#musicas"); 
const historia = document.querySelector("#historia"); 

mps.addEventListener("click", () => {
    mapas.style.display = "flex";
    itens.style.display = "none";
    personagens.style.display = "none";
    barcos.style.display = "none";
    musicas.style.display = "none";
    historia.style.display = "none";
})
its.addEventListener("click", () => {
    mapas.style.display = "none";
    itens.style.display = "flex";
    personagens.style.display = "none";
    barcos.style.display = "none";
    musicas.style.display = "none";
    historia.style.display = "none";
})
per.addEventListener("click", () => {
    mapas.style.display = "none";
    itens.style.display = "none";
    personagens.style.display = "flex";
    barcos.style.display = "none";
    musicas.style.display = "none";
    historia.style.display = "none";
})
bcs.addEventListener("click", () => {
    mapas.style.display = "none";
    itens.style.display = "none";
    personagens.style.display = "none";
    barcos.style.display = "flex";
    musicas.style.display = "none";
    historia.style.display = "none";
})
mus.addEventListener("click", () => {
    mapas.style.display = "none";
    itens.style.display = "none";
    personagens.style.display = "none";
    barcos.style.display = "none";
    musicas.style.display = "flex";
    historia.style.display = "none";
})
his.addEventListener("click", () => {
    mapas.style.display = "none";
    itens.style.display = "none";
    personagens.style.display = "none";
    barcos.style.display = "none";
    musicas.style.display = "none";
    historia.style.display = "flex";
})