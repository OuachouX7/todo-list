let txt = document.getElementById('txt');
let txtval = txt.value;
let sub = document.getElementById('sub');
let tasks = document.getElementById('tasks');

sub.addEventListener('click',submit);

function submit(event){
    event.preventDefault();

    let txt = document.getElementById('txt');
    let txtval = txt.value;
    let span = document.createElement('span');
    span.className = "delete";
    span.innerHTML = "<i class='fa-solid fa-trash'></i>";
    let done = document.createElement('span');
    done.className = 'done';
    done.innerHTML = "<i class='fa-regular fa-square-check'></i>";
    let div = document.createElement('div');
    let para = document.createElement('p');

    para.textContent = txtval;

    
    para.style.textAlign = 'center';
    
    span.addEventListener('click',Deleting);
    
    function Deleting(){
        span.parentNode.remove();
        
    }

    done.addEventListener('click',WellDone);

    function WellDone(){
        let lt = done.nextElementSibling; 
        lt.classList.toggle('line-through');
        if (lt.classList.contains('line-through')) {
            done.classList.add('completed');
        }else{
            done.classList.remove('completed');
        }
    }
    

    div.style.backgroundColor = "#EEE";

    div.style.display = 'flex';
    div.style.justifyContent = 'space-evenly';
    div.style.alignItems = 'center';
    div.style.margin = '15px 0';

    div.appendChild(done);
    div.appendChild(para);
    div.appendChild(span);

    div.className = 'task-container';

    tasks.appendChild(div);

    
    

//    bouh gay
}