btnlogout = document.getElementById('logout');

//Deslogando um usuário
btnlogout.addEventListener('click', () => {

    firebase.auth().signOut().then(() => {
        window.open('http://127.0.0.1:5500/index.html');
        window.close();
        console.log('Usuário deslogado.')
    }).catch(error => {
        console.log(error); //then() não retorna nada
    })
});

