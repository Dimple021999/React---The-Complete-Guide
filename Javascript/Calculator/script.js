let output = document.getElementById('output')
const buttons = document.querySelectorAll('button')
let value='';
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        buttonText=e.target.innerText;
        
        if(buttonText=='X'){
            buttonText ='*';
            value+=buttonText
            output.value=value//showing value
        }
        else if(buttonText =='C'){
            value='';
            output.value=value;
        }
        else if(buttonText=='='){
            output.value=eval(value)
        }
        else{
            value+=buttonText;
            output.value=value;
        }
    })
})