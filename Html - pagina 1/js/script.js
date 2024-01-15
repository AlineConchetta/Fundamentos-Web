let Nome= window.document.getElementById('nome')
let Email= window.document.querySelector('#email')
let Assunto= window.document.getElementById('assunto')

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

if(nome.value.length < 3) {
    txtNome.innerHTML = 'Nome inválido'
    txtNome.style.color = 'red'
    } else{
    txtNome.innerHTML='Nome válido'
    txtNome.style.color = 'green'
    }

}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'Email inválido'
        txtEmail.style.color = 'red'
    } else{
        txtEmail.innerHtml = 'Email válido'
        txtEmail.style.color = 'green'

    }
}
