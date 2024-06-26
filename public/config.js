
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  import { getDatabase, ref, get, set, child, push, update, remove } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";
  
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

  const db=getDatabase();


  let btGravar1=document.getElementById("btGravar1");
  if (btGravar1) {
     btGravar1.addEventListener('click',gravar1);
  }
  
  let btGravar2=document.getElementById("btGravar2");
  if (btGravar2) {
     btGravar2.addEventListener('click',gravar2);
  }
  
  let btGravar3=document.getElementById("btGravar3");
  if (btGravar3) {
     btGravar3.addEventListener('click',gravar3);

  }  

  function gravar1(){
     console.log("passou aqui");
     const novaChave = push(child(ref(db), 'ProdutosCarrinho')).key;
    set(ref(db, "ProdutosCarrinho/"+novaChave),{
         descricao:"Ninho",
         peso: "100g"
                
    }).then(()=>{
         console.log("incluído com sucesso");
    })
    .catch((error)=>{
         console.log("erro de inclusão");
    })
}

function gravar2(){
     console.log("passou aqui");
     const novaChave = push(child(ref(db), 'ProdutosCarrinho')).key;
    set(ref(db, "ProdutosCarrinho/"+novaChave),{
         descricao:"Trufada",
         peso: "100g"
                
    }).then(()=>{
         console.log("incluído com sucesso");
    })
    .catch((error)=>{
         console.log("erro de inclusão");
    })
}

function gravar3(){
     console.log("passou aqui");
     const novaChave = push(child(ref(db), 'ProdutosCarrinho')).key;
    set(ref(db, "ProdutosCarrinho/"+novaChave),{
         descricao:"Tortinha",
         peso: "100g"
                
    }).then(()=>{
         console.log("incluído com sucesso");
    })
    .catch((error)=>{
         console.log("erro de inclusão");
    })
}

