//console.log(1)
let zina= document.querySelector('.zina').value;
let zinas= document.querySelction('.cataZina');

function sutitZinu()
{
    console.log('sutitZinu()darbojas');
    zinas.inertHTML = zina.innerHTML+'<br>'+zina.value;
}