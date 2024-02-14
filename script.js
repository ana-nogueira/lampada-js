const btns = document.querySelectorAll ('.btn');
const img = document.querySelector('img');


function interagirLampada () {
    const comando = this.getAttribute('name')
    img.setAttribute ('src', `./img/${comando}.jpg`)
} 


btns.forEach((btn)=> {
    btn.addEventListener ('click', interagirLampada)
    
});



img.addEventListener ('dblclick', ()=> {
    img.setAttribute('src', './img/quebrada.jpg')
    btns.forEach ((btn) => {
        btn.removeEventListener ('click', interagirLampada)
        btn.classList.add ('inativar')
    })
    const aviso = document.createElement ('h3');
    aviso.innerText = 'Lampada quebrada! Atualize a página para começar novamente.'
    document.querySelector ('.container').appendChild (aviso);

    setTimeout (() => {
        document.querySelector ('.container').removeChild (aviso);
    },3000);
})