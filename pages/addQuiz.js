// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getDatabase,set,ref,push } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3Ge6_TGO3vn3zmKBTAKrq-KDqVLj2Gyc",
  authDomain: "quiz-database-4799e.firebaseapp.com",
  databaseURL: "https://quiz-database-4799e-default-rtdb.firebaseio.com",
  projectId: "quiz-database-4799e",
  storageBucket: "quiz-database-4799e.appspot.com",
  messagingSenderId: "385576782686",
  appId: "1:385576782686:web:6d4269f2306eb0c2991dcf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase()

var question = document.getElementById("question")
var option = document.getElementById("option")
var optionParent = document.getElementById("optionParent")
var correctAnsElem = document.getElementById("correctAnsElem")
 
var options = []
var correctAns 
function renderOption(){
    optionParent.innerHTML = ""
    for(var i = 0; i<options.length; i++){
        optionParent.innerHTML += `<li class="bg-black text-white rounded p-3" onclick="setCorrectAns('${options[i]}')">${options[i]}</li>`
        // console.log("abc")
    }
}

window.addOption = function(){
    
    options.push(option.value)
    console.log(options)
    renderOption()
}

window.setCorrectAns = function(val){
    console.log(val)
    correctAns = val 
    correctAnsElem.innerHTML = correctAns
    correctAnsElem.setAttribute("class","bg-info p-2 rounded w-50" )

}

window.AddSubmit = function(){
    var obj = {
        question: question.value,
        option:options,
        correctAnswer: correctAnsElem.innerHTML,
    }

    obj.id = push(ref(db,'Question')).key

    set(ref(db,`Question/${obj.id}`),obj)
    console.log(obj)
}