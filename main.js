let txt = document.getElementById('txt');
let txtval = txt.value;
let sub = document.getElementById('sub');

sub.addEventListener('click',submit);

function submit(event){
    event.preventDefault();

    let txt = document.getElementById('txt');
    let txtval = txt.value;
    let btn = document.createElement('button');
    btn.className = 'delete';
    btn.textContent = 'X';
    btn.style.backgroundColor = '#FFF';
    let div = document.createElement('div');
    let para = document.createElement('p');

    para.textContent = txtval;

    
    para.style.textAlign = 'center';
    
    btn.addEventListener('click',Deleting);
    
    function Deleting(){
        btn.parentNode.remove();
        
    }
    
    div.style.backgroundColor = "#EEE";

    div.style.display = 'flex';
    div.style.justifyContent = 'space-between';

    div.appendChild(para);
    div.appendChild(btn);

    

    document.body.appendChild(div);
}