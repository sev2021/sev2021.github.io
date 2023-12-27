// used for https://sev2021.github.io/mix game

var mainDiv = document.getElementById("btns");
var arr = ['0','1','2','3','4','5','6','7','8','9','10']
for(let i=0; i<=11; i++){
    btn = document.createElement("button");
    btnText = document.createTextNode(arr[i] || "");
    
    // btn.appendChild(btnText);
    btn.setAttribute("class", "img" + i);
    btn.setAttribute("id", "btn" + i );
    btn.addEventListener("click", chBtn)

    mainDiv.appendChild(btn);
}

document.querySelector("#mix").onclick = () => {
    let round = 50;
    while(round--){
        let btn = Math.floor(Math.random() * 12)
        document.querySelector("#btn" + btn).dispatchEvent(new Event("click"));
    }
}
document.querySelector("#reset").onclick = () => {
    location.reload();
}

function chBtn(event){
    const pressed = event.target || event.srcElement;
    let pressId = parseInt(pressed.getAttribute("id").substr(3));
    let pressClass = pressed.getAttribute("class");

    if(pressId < 9 && document.querySelector("#btn" + (pressId+3)).getAttribute("class") == "img11")
    {
        document.querySelector("#btn" + (pressId+3)).setAttribute("class", pressClass);
        pressed.setAttribute("class", "img11");
    }
    else if(pressId > 2 && document.querySelector("#btn" + (pressId-3)).getAttribute("class") == "img11")
    {
        document.querySelector("#btn" + (pressId-3)).setAttribute("class", pressClass);
        pressed.setAttribute("class", "img11");

    }   
    else if((pressId+1)%3 != 0 && document.querySelector("#btn" + (pressId+1)).getAttribute("class") == "img11")
    {
        document.querySelector("#btn" + (pressId+1)).setAttribute("class", pressClass);
        pressed.setAttribute("class", "img11");

    }
    else if(pressId%3 != 0 && document.querySelector("#btn" + (pressId-1)).getAttribute("class") == "img11")
    {
        document.querySelector("#btn" + (pressId-1)).setAttribute("class", pressClass);
        pressed.setAttribute("class", "img11");

    }

    
}
