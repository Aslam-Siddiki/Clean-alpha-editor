
let h2 = document.createElement("h2");
document.body.appendChild(h2);

let lbl = document.createElement("label");
document.body.appendChild(lbl);
lbl.htmlFor = "username";
lbl.innerText = "Type:";

let inp = document.createElement("input");
let body = document.querySelector("body");
body.appendChild(inp);
inp.placeholder = "Type here something?";
inp.id = "username";

inp.addEventListener("input",function(){
    let h2 = document.querySelector("h2");
    let name = inp.value.replace(/[^a-zA-Z]/g," ");

    h2.innerText = name;
});

let btn1 = document.createElement("button");
document.body.appendChild(btn1);
btn1.innerText = "Reset";
btn1.style.display = "block";
btn1.style.marginTop = "10px";
btn1.type = "reset";

btn1.addEventListener("click",function(){
    inp.value = "";
    h2.innerText = "";

    btn1.style.backgroundColor =  "blue";
    btn1.style.color = "white";
    console.log("Editor is reset:");
});

btn1.addEventListener("mouseout",function(){
    btn1.style.backgroundColor = "white";
    btn1.style.color = "Blue";
});




