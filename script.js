//your code here
let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e) =>{ 
        switch(e.target.innerText){
            case 'clr':
                display.innerText = '0';
                break;
            case '<-':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            case 'ans':
                try{
                    display.innerText = eval(display.innerText);                    
                } catch{
                    display.innerText = 'Error!';
                }

                break;
            
            default:
                display.innerText += e.target.innerText;
        }
    });
});


