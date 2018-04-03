import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

// main app
//import App from './components/app';
import {UploadFile} from './components/app';

//ReactDOM.render(<App />, document.getElementById('app'))
ReactDOM.render(<UploadFile onClick={uploadFileHandler}/>, document.getElementById('app'));

const store = createStore(function(){},{})

console.log(store);

store.dispatch({type:"UPLOAD_IMAGE"} );

function uploadFileHandler(){

    var file = document.getElementById('fileInput').files[0];

    if (!file) {
        alert("Error Cannot find the file!");
        return;
    }

    
    switch(file.type){
    case "text/csv" :  parseCSV(file);
        break
    case "image/jpeg" :
    case "image/png" :    renderImage(file);

        
        break;
    default : alert("Unsupported Format");
        break
    }
    
} 

function renderImage(file){

    var reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('form').src=e.target.result;
    }
    
    reader.readAsDataURL(file);       
}
