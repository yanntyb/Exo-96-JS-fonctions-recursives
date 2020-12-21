
let div = document.createElement("div");

function recursiv(nb){
    nb +=2;
    if(nb === 10){
        div.innerHTML = nb;
        document.body.appendChild(div);
        return null;
    }
    else{

        recursiv(nb);
    }
}

recursiv(0);