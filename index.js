let blocker = document.getElementById('blocker');
let currentSetting = 4;
let ex = 4;


function create (x){
    if(x < 30){
        let y = document.getElementById('blocker');
        for(let i = 0; i < Math.pow(x,2); i++){
            let z = document.createElement("DIV");
            z.setAttribute('id', 'square');
            z.setAttribute('class', 'fix');
            document.getElementById('blocker').appendChild(z);
            }
        y.style.gridTemplateRows = `repeat(${x}, 1fr)`;
        y.style.gridTemplateColumns = `repeat(${x}, 1fr)`;
        currentSetting = x;
        console.log(currentSetting);
    }
        else {
            alert("Too Large");
            resize();
        }
}

function remove() {

    let count = blocker.childElementCount;
    for(let i = 0; i < count; i++){
    blocker.removeChild(document.getElementById('square'));
    }
    create(currentSetting);
}

// document.getElementById('clear').addEventListener('click', clear);

function clear(){
    let count = blocker.childElementCount;
    console.log(count);
    for(let i = 0; i < count; i++){
    blocker.removeChild(document.getElementById('square'));
    }
    console.log("Works");
}




blocker.addEventListener('mouseover', function(event){
    event.target.style.background="indianred";
    

    // setTimeout(function() {
    //     event.target.style.background = 'cadetblue';
    // }, 750);
}, false);

function resize() {

    let def = currentSetting;
    let size = prompt("Choose a size");
    if(size !== ""){
        clear();
        create(size);
    }
    if(size === null) {
        clear();
        create(def);
    }
}

