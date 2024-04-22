//console.log(1)
let zina= document.querySelector('.zina');
let zinas= document.querySelector('.cataZina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    zinas.inertHTML = zina.innerHTML+'<br>'+zinas.value;
}
function ieladetChataZinas()
{
    let datiNoServera = await fetch('ChataZinas.txt');
    let dati = await datiNoServera.text;
}