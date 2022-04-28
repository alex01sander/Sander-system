// ////////////////////////////////Admnistrador////////////////////////////////

var bnt = document.querySelector('#cadastrar-func')
var areaCadastro = document.querySelector('#cad-hidden')


function esconder() {

    if(areaCadastro.style.display === 'block') {
        areaCadastro.style.display = 'none'
        
    }else{
        areaCadastro.style.display = 'block'
    }


}

var areaFaltas = document.querySelector('#faltas-hidden')

function faltas(){
    if(areaFaltas.style.display === 'block') {
        areaFaltas.style.display = 'none'
        
    }else{
        areaFaltas.style.display = 'block'
    }
}

var areaConvenio = document.querySelector('#hidden-contra-cheque')

function convenio(){
    if(areaConvenio.style.display === 'block') {
        areaConvenio.style.display = 'none'
        
    }else{
        areaConvenio.style.display = 'block'
    }
}

////////////////////////////Usuario//////////////////////////////

var usuarioFaltas = document.querySelector('#hidden-usuario')

function usuariofaltas(){
    if(usuarioFaltas.style.display === 'block') {
        usuarioFaltas.style.display = 'none'
        
    }else{
        usuarioFaltas.style.display = 'block'
    }
}

var usuarioConvenio = document.querySelector('#hidden-usuario2')

function usuarioconvenio(){
    if(usuarioConvenio.style.display === 'block') {
        usuarioConvenio.style.display = 'none'
        
    }else{
        usuarioConvenio.style.display = 'block'
    }
}


//criarUsuario()


/*function cadastrar(){
    function criarUsuario(){
        let newUserEmail = document.querySelector('#email-func')
        let newUserPassword = document.querySelector('senha-func')
    
        auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
        console.log(user)
        criarUsuario()
        alert("Cadastrado com Sucesso")
        }).catch(error =>{
        console.log(error)
        })
    }

}  */