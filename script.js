function encrypt(){
    let text=document.getElementById("encrypt").value.trim()
    let result=""
    let n=text.length;
    let random = Math.floor(Math.random()*n)
    for(i=0;i<n;i++){
        let c = text[i];
        if(c===" "){
            result=result+text[random].trim()
        }
        else{
            let code=text.charCodeAt(i);
            c=String.fromCharCode(code+5)
            result=result+c
        }
    }
    document.getElementById("encrypted").innerHTML=result;
}

function decrypt(){
    let text=document.getElementById("encrypt").value.trim()
    let result=""
    let n = text.length;
    let random = Math.floor(Math.random()*n)
    for(i=0;i<n;i++){
        let c= text[i];
        if(c===" "){
            result=result+text[random]
        }
        else{
            let code = text.charCodeAt(i);
            let c=String.fromCharCode(code-5)
            result=result+c
        }
    }
    document.getElementById("encrypted").innerHTML=result;
}