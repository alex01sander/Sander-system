alert('Para logar como Usuario : usuario@teste.com Senha: teste123          Para logar como ADM: usuario2@teste.com Senha: teste123')
const firebaseConfig = {
  apiKey: "AIzaSyAcFehpBg1hfQUskbjFDoATCOVAd6uR1ck",
  authDomain: "testepermissao-2e4e8.firebaseapp.com",
  projectId: "testepermissao-2e4e8",
  storageBucket: "testepermissao-2e4e8.appspot.com",
  messagingSenderId: "500586488091",
  appId: "1:500586488091:web:d58e1cc0009d5855fdf3be"
};

firebase.initializeApp(firebaseConfig)
var db = firebase.firestore ()


let auth = firebase.auth()
function ler(){
  db.collection("lista").get().then(snapshot =>{
    snapshot.forEach(item =>{
      console.log(item.data())
    })
  }).catch(error =>{
    console.log(error)
  })
}

function escrever(){

  db.collection("lista")
  .add({ title: "novo usuario", numero: Math.random() })
  .then(doc=>{
    console.log(doc)
  })
  .catch(error =>{
    console.log(error)
  })


}



function criarUsuario(){
  let newUserEmail = "usuario@teste.com"
  let newUserPassword = "teste123"

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
    console.log(user)
  }).catch(error =>{
    console.log(error)
  })
}


function login(){
  

  auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(()=>{

    let email = document.getElementById('usuario')
    let senha = document.getElementById('senha')

    let cliente = String(email.value)
    let pass = String(senha.value)

    auth.signInWithEmailAndPassword(cliente, pass).then(loggedUser =>{
      if(cliente == "usuario@teste.com" && pass == "teste123"){
        alert('Login Aprovado')
        window.open('dash-funcio.html')
        console.log(auth.currentUser)
        escrever()
      }else if(cliente == 'usuario2@teste.com' && pass == 'teste123'){
        alert('Login Aprovado')
        window.open('content.html')
        console.log(auth.currentUser)
        escrever()
      }else{
        alert('Usuario inválido')
      }
      
      
    })
    .catch(error => {
      alert('Usuaro inválido')
      console.log(error)
    })
  

  }).catch(error=>{
    console.log(error)
  })
  
  
  

}









































/*let auth = firebase.auth()
/*function criarUsuario(){

  let newUserEmail = "novotes@teteste.com"
  let newUserPassword = "123abc"

  let auth = firebase.auth()

  auth.createUserWithEmailAndPassword(newUserEmail, newUserPassword).then(user =>{
    console.log(user)
  }).catch(error =>{
    console.log(error)
  })


}

function login(){
  let userEmail = "novotes@teteste.com"
  let userPassword = "123abc"

  auth.setPersistence(firebase.auth.Auth.Persistence.NONE).then(()=>{

    auth.signInWithEmailAndPassword(userEmail, userPassword).then(loggedUser =>{
      console.log(auth.currentUser)
    }).catch(error => {
      console.log(error)
    })
  

  }).catch(error=>{
    console.log(error)
  })
  
  
  

}

//login()







auth.onAuthStateChanged(user=>{
  if (user){
    console.log(user)
  }else{
    console.log('ninguem logado')
  }
})

function logout(){
  auth.signOut().then(() => {
    console.log('USUARIO FOI DESLOGADO')
  }).catch(error=>{
    console.log(error)
  })
}

setTimeout (login, 2000)*/