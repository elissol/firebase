import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBRp-B6kD6xRUfahMitJB0Lc7zdKhmpaWI",
    authDomain: "trabalho-pipoca.firebaseapp.com",
    databaseURL: "https://trabalho-pipoca-default-rtdb.firebaseio.com",
    projectId: "trabalho-pipoca",
    storageBucket: "trabalho-pipoca.appspot.com",
    messagingSenderId: "512742795257",
    appId: "1:512742795257:web:c4eb42521a2fa1d6b4ff28",
    measurementId: "G-R2F8JVXLCG"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// Inputs
var emailInput = document.getElementById('emailInput');
var passwordInput = document.getElementById('passwordInput');
// Buttons
var authEmailPassButton = document.getElementById('authEmailPassButton');
var authGoogleButton = document.getElementById('authGoogleButton');
var authGitHubButton = document.getElementById('authGitHubButton');
var authAnonymouslyButton = document.getElementById('authAnonymouslyButton');
var createUserButton = document.getElementById('createUserButton');
var logOutButton = document.getElementById('logOutButton');

// Displays
var displayName = document.getElementById('displayName');

// Criar novo usuário
createUserButton.addEventListener('click', function () {
    firebase
        .auth()
        .createUserWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function () {
            alert('Bem vindo ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao cadastrar, verifique o erro no console.')
        });
});

// Autenticar com E-mail e Senha
authEmailPassButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInWithEmailAndPassword(emailInput.value, passwordInput.value)
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem vindo, ' + emailInput.value;
            alert('Autenticado ' + emailInput.value);
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});

// Logout
logOutButton.addEventListener('click', function () {
    firebase
        .auth()
        .signOut()
        .then(function () {
            displayName.innerText = 'Você não está autenticado';
            alert('Você se deslogou');
        }, function (error) {
            console.error(error);
        });
});

// Autenticar Anônimo
authAnonymouslyButton.addEventListener('click', function () {
    firebase
        .auth()
        .signInAnonymously()
        .then(function (result) {
            console.log(result);
            displayName.innerText = 'Bem vindo, desconhecido';
            alert('Autenticado Anonimamente');
        })
        .catch(function (error) {
            console.error(error.code);
            console.error(error.message);
            alert('Falha ao autenticar, verifique o erro no console.')
        });
});

// Autenticar com GitHub
authGitHubButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GithubAuthProvider();
    signIn(provider);
});

// Autenticar com Google
authGoogleButton.addEventListener('click', function () {
    // Providers
    var provider = new firebase.auth.GoogleAuthProvider();
    signIn(provider);
});


function signIn(provider) {
    firebase.auth()
        .signInWithPopup(provider)
        .then(function (result) {
            console.log(result);
            var token = result.credential.accessToken;
            displayName.innerText = 'Bem vindo, ' + result.user.displayName;
        }).catch(function (error) {
            console.log(error);
            alert('Falha na autenticação');
        });
}