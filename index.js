import React from 'react';
import ReactDOM from 'react-dom';

// main app
//import App from './components/app';
import {UploadFile} from './components/app';
import {TreeComponent} from './components/app';



const treedata =
{"level":1,"name":"Sierra Leone","id":"ImspTQPwCqd","children":[{"level":2,"name":"Tonkolili","id":"eIQbndfxQMb","children":[{"level":3,"name":"Kunike","id":"l0ccv2yzfF3"},{"level":3,"name":"Gbonkonlenken","id":"P69SId31eDp"},{"level":3,"name":"Kunike Barina","id":"rXLor9Knq6l"},{"level":3,"name":"Kholifa Mabang","id":"fwxkctgmffZ"},{"level":3,"name":"Kafe Simira","id":"BmYyh9bZ0sr"},{"level":3,"name":"Sambaia Bendugu","id":"r1RUyfVBkLp"},{"level":3,"name":"Yoni","id":"NNE0YMCDZkO"},{"level":3,"name":"Malal Mara","id":"EVkm2xYcf6Z"},{"level":3,"name":"Tane","id":"xhyjU2SVewz"},{"level":3,"name":"Kalansogoia","id":"smoyi1iYNK6"},{"level":3,"name":"Kholifa Rowalla","id":"PQZJPIpTepd"}]},{"level":2,"name":"Kailahun","id":"jUb8gELQApl","children":[{"level":3,"name":"Peje Bongre","id":"DxAPPqXvwLy"},{"level":3,"name":"Mandu","id":"yu4N82FFeLm"},{"level":3,"name":"Luawa","id":"cM2BKSrj9F9"},{"level":3,"name":"Kissi Kama","id":"JsxnA2IywRo"},{"level":3,"name":"Njaluahun","id":"ERmBhYkhV6Y"},{"level":3,"name":"Kissi Tongi","id":"hjpHnHZIniP"},{"level":3,"name":"Peje West","id":"pmxZm7klXBy"},{"level":3,"name":"Yawei","id":"byp7w6Xd9Df"},{"level":3,"name":"Penguia","id":"bQiBfA2j5cw"},{"level":3,"name":"Dea","id":"lYIM1MXbSYS"},{"level":3,"name":"Jawi","id":"KSdZwrU7Hh6"},{"level":3,"name":"Kissi Teng","id":"j0Mtr3xTMjM"},{"level":3,"name":"Malema","id":"GE25DpSrqpB"},{"level":3,"name":"Upper Bambara","id":"LfTkc0S4b5k"}]},{"level":2,"name":"Bombali","id":"fdc6uOvgoji","children":[{"level":3,"name":"Biriwa","id":"fwH9ipvXde9"},{"level":3,"name":"Tambaka","id":"Qhmi8IZyPyD"},{"level":3,"name":"Sanda Tendaren","id":"UhHipWG7J8b"},{"level":3,"name":"Bombali Sebora","id":"KKkLOTpMXGV"},{"level":3,"name":"Sella Limba","id":"j43EZb15rjI"},{"level":3,"name":"Gbanti Kamaranka","id":"e1eIKM1GIF3"},{"level":3,"name":"Gbendembu Ngowahun","id":"BXJdOLvUrZB"},{"level":3,"name":"Sanda Loko","id":"WXnNDWTiE9r"},{"level":3,"name":"Makari Gbanti","id":"lY93YpCxJqf"},{"level":3,"name":"Magbaimba Ndowahun","id":"eV4cuxniZgP"},{"level":3,"name":"Paki Masabong","id":"L8iA6eLwKNb"},{"level":3,"name":"Libeisaygahun","id":"hRZOIgQ0O1m"},{"level":3,"name":"Safroko Limba","id":"XG8HGAbrbbL"}]},{"level":2,"name":"Bo","id":"O6uvpzGd5pu","children":[{"level":3,"name":"Gbo","id":"YmmeuGbqOwR"},{"level":3,"name":"Komboya","id":"JdhagCUEMbj"},{"level":3,"name":"Wonde","id":"ARZ4y5i4reU"},{"level":3,"name":"Tikonko","id":"sxRd2XOzFbz"},{"level":3,"name":"Baoma","id":"vWbkYPRmKyS"},{"level":3,"name":"Badjia","id":"YuQRtpLP10I"},{"level":3,"name":"Niawa Lenga","id":"I4jWcnFmgEC"},{"level":3,"name":"Jaiama Bongor","id":"daJPPxtIrQn"},{"level":3,"name":"Valunia","id":"npWGUj37qDe"},{"level":3,"name":"Lugbu","id":"kU8vhUkAGaT"},{"level":3,"name":"Bumpe Ngao","id":"BGGmAwx33dj"},{"level":3,"name":"Bargbe","id":"dGheVylzol6"},{"level":3,"name":"Kakua","id":"U6Kr7Gtpidn"},{"level":3,"name":"Selenga","id":"KctpIIucige"},{"level":3,"name":"Bargbo","id":"zFDYIgyGmXG"}]},{"level":2,"name":"Koinadugu","id":"qhqAxPSTUXp","children":[{"level":3,"name":"Kasonko","id":"vEvs2ckGNQj"},{"level":3,"name":"Neya","id":"GFk45MOxzJJ"},{"level":3,"name":"Sengbeh","id":"VGAFxBXz16y"},{"level":3,"name":"Folosaba Dembelia","id":"iEkBZnMDarP"},{"level":3,"name":"Diang","id":"Lt8U7GVWvSR"},{"level":3,"name":"Wara Wara Bafodia","id":"XrF5AvaGcuw"},{"level":3,"name":"Wara Wara Yagala","id":"EZPwuUTeIIG"},{"level":3,"name":"Sulima (Koinadugu)","id":"PaqugoqjRIj"},{"level":3,"name":"Mongo","id":"OTFepb1k9Db"},{"level":3,"name":"Dembelia Sinkunia","id":"Mr4au3jR9bt"},{"level":3,"name":"Nieni","id":"J4GiUImJZoE"}]},{"level":2,"name":"Kono","id":"Vth0fbpFcsO","children":[{"level":3,"name":"Sandor","id":"g5ptsn0SFX8"},{"level":3,"name":"Fiama","id":"CF243RPvNY7"},{"level":3,"name":"Tankoro","id":"M2qEv692lS6"},{"level":3,"name":"Nimiyama","id":"qgQ49DH9a0v"},{"level":3,"name":"Lei","id":"LhaAPLxdSFH"},{"level":3,"name":"Nimikoro","id":"DmaLM8WYmWv"},{"level":3,"name":"Gbane","id":"ajILkI0cfxn"},{"level":3,"name":"Gbense","id":"TQkG0sX9nca"},{"level":3,"name":"Toli","id":"FRxcUEwktoV"},{"level":3,"name":"Gbane Kandor","id":"Zoy23SSHCPs"},{"level":3,"name":"Gorama Kono","id":"GWTIxJO9pRo"},{"level":3,"name":"Kamara","id":"kvkDWg42lHR"},{"level":3,"name":"Mafindor","id":"EjnIQNVAXGp"},{"level":3,"name":"Soa","id":"iGHlidSFdpu"}]},{"level":2,"name":"Western Area","id":"at6UHUQatSo","children":[{"level":3,"name":"Freetown","id":"C9uduqDZr9d"},{"level":3,"name":"Rural Western Area","id":"qtr8GGlm4gg"}]},{"level":2,"name":"Kenema","id":"kJq2mPyFEHo","children":[{"level":3,"name":"Dama","id":"myQ4q1W6B4y"},{"level":3,"name":"Lower Bambara","id":"hdEuw2ugkVF"},{"level":3,"name":"Malegohun","id":"x4HaBHHwBML"},{"level":3,"name":"Gaura","id":"eROJsBwxQHt"},{"level":3,"name":"Kandu Lepiema","id":"K1r3uF6eZ8n"},{"level":3,"name":"Tunkia","id":"l7pFejMtUoF"},{"level":3,"name":"Simbaru","id":"A3Fh37HWBWE"},{"level":3,"name":"Koya (kenema)","id":"EYt6ThQDagn"},{"level":3,"name":"Wandor","id":"X7dWcGerQIm"},{"level":3,"name":"Langrama","id":"jWSIbtKfURj"},{"level":3,"name":"Gorama Mende","id":"KXSqt7jv6DU"},{"level":3,"name":"Dodo","id":"QlCIp2S9NHs"},{"level":3,"name":"Niawa","id":"uKC54fzxRzO"},{"level":3,"name":"Nomo","id":"U09TSwIjG0s"},{"level":3,"name":"Nongowa","id":"KIUCimTXf8Q"},{"level":3,"name":"Small Bo","id":"vzup1f6ynON"}]},{"level":2,"name":"Pujehun","id":"bL4ooGhyHRQ","children":[{"level":3,"name":"Ya Kpukumu Krim","id":"pk7bUK5c1Uf"},{"level":3,"name":"Mano Sakrim","id":"nlt6j60tCHF"},{"level":3,"name":"Sowa","id":"NqWaKXcg01b"},{"level":3,"name":"Pejeh","id":"N233eZJZ1bh"},{"level":3,"name":"Galliness Perri","id":"eNtRuQrrZeo"},{"level":3,"name":"Barri","id":"RzKeCma9qb1"},{"level":3,"name":"Soro-Gbeima","id":"d9iMR1MpuIO"},{"level":3,"name":"Kpanga Kabonde","id":"QwMiPiME3bA"},{"level":3,"name":"Kpanga Krim","id":"YpVol7asWvd"},{"level":3,"name":"Makpele","id":"BD9gU0GKlr2"},{"level":3,"name":"Kpaka","id":"zSNUViKdkk3"},{"level":3,"name":"Malen","id":"DfUfwjM9am5"}]},{"level":2,"name":"Moyamba","id":"jmIPBj66vD6","children":[{"level":3,"name":"Upper Banta","id":"DBs6e2Oxaj1"},{"level":3,"name":"Fakunya","id":"vULnao2hV5v"},{"level":3,"name":"Bagruwa","id":"jPidqyo7cpF"},{"level":3,"name":"Lower Banta","id":"W5fN3G6y1VI"},{"level":3,"name":"Kaiyamba","id":"USQdmvrHh1Q"},{"level":3,"name":"Bumpeh","id":"nOYt1LtFSyU"},{"level":3,"name":"Ribbi","id":"gy8rmvYT4cj"},{"level":3,"name":"Dasse","id":"RndxKqQGzUl"},{"level":3,"name":"Kongbora","id":"Jiyc4ekaMMh"},{"level":3,"name":"Kowa","id":"xIKjidMrico"},{"level":3,"name":"Kargboro","id":"Z9QaI6sxTwW"},{"level":3,"name":"Timidale","id":"AovmOHadayb"},{"level":3,"name":"Kamaje","id":"LsYpCyYxSLY"},{"level":3,"name":"Kori","id":"nV3OkyzF4US"}]},{"level":2,"name":"Kambia","id":"PMa2VCrupOd","children":[{"level":3,"name":"Samu","id":"r06ohri9wA9"},{"level":3,"name":"Mambolo","id":"xGMGhjA3y6J"},{"level":3,"name":"Magbema","id":"QywkxFudXrC"},{"level":3,"name":"Tonko Limba","id":"y5X4mP5XylL"},{"level":3,"name":"Masungbala","id":"FlBemv1NfEC"},{"level":3,"name":"Bramaia","id":"kbPmt60yi0L"},{"level":3,"name":"Gbinleh Dixion","id":"qIRCo0MfuGb"}]},{"level":2,"name":"Port Loko","id":"TEQlaapDQoK","children":[{"level":3,"name":"Lokomasama","id":"fRLX08WHWpL"},{"level":3,"name":"Sanda Magbolonthor","id":"HWjrSuoNPte"},{"level":3,"name":"Buya Romende","id":"Pc3JTyqnsmL"},{"level":3,"name":"Bureh Kasseh Maconteh","id":"TA7NvKjsn4A"},{"level":3,"name":"Koya","id":"pRHGAROvuyI"},{"level":3,"name":"Dibia","id":"ZiOVcrSjSYe"},{"level":3,"name":"Marampa","id":"RWvG1aFrr0r"},{"level":3,"name":"Kaffu Bullom","id":"vn9KJsLyP5f"},{"level":3,"name":"Tainkatopa Makama Safrokoh ","id":"PrJQHI6q7w2"},{"level":3,"name":"Maforki","id":"JdqfYTIFZXN"},{"level":3,"name":"Masimera","id":"EfWCa0Cc8WW"}]},{"level":2,"name":"Bonthe","id":"lc3eMKXaEfw","children":[{"level":3,"name":"Nongoba Bullum","id":"VP397wRvePm"},{"level":3,"name":"Sogbini","id":"cgOy0hRMGu9"},{"level":3,"name":"Yawbeko","id":"CG4QD1HC3h4"},{"level":3,"name":"Bendu Cha","id":"EB1zRKdYjdY"},{"level":3,"name":"Kwamabai Krim","id":"HV8RTzgcFH3"},{"level":3,"name":"Kpanda Kemoh","id":"aWQTfvgPA5v"},{"level":3,"name":"Sittia","id":"g8DdBm7EmUt"},{"level":3,"name":"BMC","id":"ENHOJz3UH5L"},{"level":3,"name":"Bum","id":"iUauWFeH8Qp"},{"level":3,"name":"Jong","id":"VCtF1DbspR5"},{"level":3,"name":"Imperi","id":"XEyIRFd9pct"},{"level":3,"name":"Dema","id":"DNRAeXT9IwS"}]}]}

function traverseTree(t){
    
    if (t.children){
        t.showChildren=false;
        t.children.map(function(t){
            traverseTree(t)
        })
        
    }else{
        return
    }
    
}

traverseTree(treedata);

ReactDOM.render(<TreeComponent data = {treedata}/>, document.getElementById('treeComponent'));

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
