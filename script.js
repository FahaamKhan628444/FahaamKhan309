const searchdata=[
    "apple","beach","cactus","dolphin","pineapple","eagle","feather","globe","honey","lightbeach",
    "bananashake","mango","mangoshake","guava","lightguava",
]

const ip=document.querySelector("input");
const sug=document.querySelector(".sug");

function generateSuggestion(userIp)
{
    sug.innerHTML='';

    let match=[];

    for(word of searchdata)
    {
        if(word.includes(userIp))
        match.push(word);
        if(match.length==10) break;
    }

    console.log(match);
    for(item of match)
    {
        const El=document.createElement("p");
        El.textContent=item;

        sug.append(El);
    }
}

ip.addEventListener("input",function(){
    console.log("hello input");
    const userIp=ip.value;
    generateSuggestion(userIp);
})

ip.addEventListener("focus",function(){
    document.getElementsByClassName("sug")[0].innerHTML=history;
    console.log("hello history focus");
})

let history=[];

function redirect(){
    let input_value=document.getElementById("in").value;

    if(history.length<=10)
    history.push(input_value);
    else{
        history.shift();
        history.push(input_value);
    }

    console.log(window.history);
    let url="https://www.google.com/search?q="+input_value;
    window.open(url);
}   


function redirect1(){
    let input_value1=document.getElementById("out").value;

    if(history.length<=10)
    history.push(input_value1);
    else{
        history.shift();
        history.push(input_value1);
    }

    console.log(window.history);
    let url="https://www.google.com/search?q="+input_value1;
    window.open(url);
}