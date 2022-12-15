//your code here
// let display = document.getElementById('display');

// let buttons = Array.from(document.getElementsByClassName('button'));

// buttons.map(button =>{
//     button.addEventListener('click',(e) =>{ 
//         switch(e.target.innerText){
//             case 'clr':
//                 display.innerText = '';
//                 break;
//             case 'ans':
//                 try{
//                     display.innerText = eval(display.innerText);                    
//                 } catch{
//                     display.innerText = 'Error!';
//                 }

//                 break;
            
//             default:
//                 display.innerText += e.target.innerText;
//         }
//     });
// });

let ans1 ="";
let num ="";
function add(value){
    console.log(value);
    num=num+value;
    document.getElementById('input').value=num;

}


function ans(){
    ans1=eval(num);
    document.getElementById('input').value=ans1;
    ans1="";
    num="";
}

function clear(){
    num="";
    document.getElementById('input').value="";
}