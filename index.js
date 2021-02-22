
function create (x){
        for(let i = 0; i < Math.pow(x,2); i++){
        let x = document.createElement("DIV");
        x.setAttribute('id', 'square');
        x.setAttribute('class', 'fix');
        document.getElementById('blocker').appendChild(x);
        }
}

function remove() {

    let square = document.getElementById('square');
    for(let i = 0; i < 64; i++){
    blocker.removeChild(document.getElementById('square'));
    }
    create(8);
}

document.getElementById('clear').addEventListener('click', clear);

function clear(){
    console.log("Works");
    remove();
}

let blocker = document.getElementById('blocker');


blocker.addEventListener('mouseover', function(event){
    event.target.style.background="indianred";
    

    // setTimeout(function() {
    //     event.target.style.background = 'cadetblue';
    // }, 750);
}, false);

function resize() {
    let size = prompt("Choose a size");
    create(size);
}

