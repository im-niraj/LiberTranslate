const url = 'https://libretranslate.de/translate';
const textInput = document.querySelector('#textInput');
const textTrans = document.querySelector('#textTrans');
let sourceInput = 'en';
let targetOutput = 'hi'
async function Translate(){
    console.log(sourceInput,targetOutput)
    if(textInput.value !== ''){
        try{
            const res = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    q:textInput.value,
                    source: sourceInput,
                    target: targetOutput,
                    format:'text',
                }),
                headers:{
                    "Content-Type": "application/json",
                }
            })
            var {translatedText} = await res.json();
            textTrans.innerText = translatedText;
        }
        catch(err){
            console.error(err);
        }
    }
    
}


function Btn(n){
    var engIn = document.querySelector('#engIn');
    var hindiIn = document.querySelector('#hindiIn');
    var engOu = document.querySelector('#engOu');
    var hindiOu = document.querySelector('#hindiOu');
    var selInDiv = document.querySelector('#selDivIn');
    var selOuDiv = document.querySelector('#selDivOu');
    
    // console.log(typeof n, n);
    if(n==='enIn' || n==='hiOu'){
       engIn.classList.add('selectedTab');
       hindiOu.classList.add('selectedTab');
       hindiIn.classList.remove('selectedTab');
       engOu.classList.remove('selectedTab');
       sourceInput = 'en';
       targetOutput = 'hi';
    }
    else if(n==='hiIn' || n==='enOu'){
        hindiIn.classList.add('selectedTab');
        engOu.classList.add('selectedTab');
        hindiOu.classList.remove('selectedTab');
        engIn.classList.remove('selectedTab');
        sourceInput = 'hi';
        targetOutput = 'en';
     }

     if(n === 'InOuSwap'){
         console.log(selInDiv.classList.value)
         if(selInDiv.classList.value === 'selectedTab' || selOuDiv.classList.value === 'selectedTab' ){
            console.log('if 59')
            selInDiv.classList.remove('selectedTab');
            selOuDiv.classList.remove('selectedTab');
            engIn.classList.add('selectedTab');
            hindiOu.classList.add('selectedTab');
            hindiIn.classList.remove('selectedTab');
            engOu.classList.remove('selectedTab');
            sourceInput = 'en';
            targetOutput = 'hi';
         }
         else if(engIn.className === 'selectedTab'){
             console.log('else if 69')
            hindiIn.classList.add('selectedTab');
            engOu.classList.add('selectedTab');
            hindiOu.classList.remove('selectedTab');
            engIn.classList.remove('selectedTab');
            selInDiv.classList.remove('selectedTab');
            selOuDiv.classList.remove('selectedTab');
            sourceInput = 'hi';
            targetOutput = 'en';
         }
         else if(hindiIn.className === 'selectedTab'){
            engIn.classList.add('selectedTab');
            hindiOu.classList.add('selectedTab');
            hindiIn.classList.remove('selectedTab');
            engOu.classList.remove('selectedTab');
            selInDiv.classList.remove('selectedTab');
            selOuDiv.classList.remove('selectedTab');
            sourceInput = 'en';
            targetOutput = 'hi';
         }
        //  console.log('this is class')
     }
}

function BtnSel(str){
    var selectIn = document.querySelector('#selectIn');
    var selectOu = document.querySelector('#selectOu');

    var engIn = document.querySelector('#engIn');
    var hindiIn = document.querySelector('#hindiIn');
    var engOu = document.querySelector('#engOu');
    var hindiOu = document.querySelector('#hindiOu');
    var selInDiv = document.querySelector('#selDivIn');
    var selOuDiv = document.querySelector('#selDivOu');

    if(str === 'selIn'){
        selInDiv.classList.add('selectedTab');
        if(selectIn.value != ''){
            sourceInput = selectIn.value;
            engIn.classList.remove('selectedTab');
            hindiIn.classList.remove('selectedTab');
            console.log(selectIn.value)
        }
        else if(selectIn.value === ''){
            engIn.classList.add('selectedTab');
            selInDiv.classList.remove('selectedTab');
            sourceInput = 'en';
        }
        // other div remove class
        
    }
    else if(str === 'selOu'){
        selOuDiv.classList.add('selectedTab');
        if(selectOu.value != ''){
            targetOutput = selectOu.value;
            hindiOu.classList.remove('selectedTab');
            engOu.classList.remove('selectedTab');
            console.log(selectOu.value)
        }
        else if(selectOu.value === ''){
            hindiOu.classList.add('selectedTab');
            selOuDiv.classList.remove('selectedTab');
            targetOutput = 'hi';
        }
        // other div remove class
        
    }
}