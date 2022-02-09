import "./data.json" 
let fs=require('fs')

var players1=[]
var tmp

function decaler(){
    tmp=players1[2]
    players1[2]=players1[3]
    players1[3]=tmp
    document.getElementById("player3").textContent=players1[2]
    for (var i=0;i<c;i++){
        myNode.innerHTML+="<option>"+players1[i]+"</option>";
    }

    

}
function rejouer1(){
    if (players1.length>=4){
        document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
        var k=players1.shift(0);
    
        document.getElementById("player1").textContent=players1[0]
        document.getElementById("player2").textContent=players1[1]
        document.getElementById("player3").textContent=players1[2]
        players1.push(k)
        document.getElementById("ff").innerHTML+="<option>"+k+"</option>"
    }
    else{ 
        if (players1.length==3){
            document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
            var k=players1.shift(0);
            players1.push(k)
            document.getElementById("player1").textContent=players1[0];
            document.getElementById("player2").textContent=players1[1];
            document.getElementById("player3").textContent=players1[2];
            document.getElementById("ff").innerHTML+="<option>"+k+"</option>"
           
            

            

            
            
        }
        else{
            if (players1.length==2){
                
                var k=players1.shift(0);
                players1.push(k)
    
                document.getElementById("player1").textContent=players1[0]
                document.getElementById("player2").textContent=players1[1]
                document.getElementById("player3").textContent='__'
                document.getElementById("ff").innerHTML+="<option>"+k+"</option>"


            }
            else{
                if (players1.length==1){
                    players1.shift(0);
    
                    document.getElementById("player1").textContent="__"
                    document.getElementById("player2").textContent='__'
                    document.getElementById("player3").textContent='__'
                }
            }
        }
    }
    
}
function rejouer2(){
    if (players1.length>=4){
        document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[2]);
        var e=players1.remove
        alert(e)
        players1.push(e)
    
        document.getElementById("player2").textContent=players1[1]
        document.getElementById("player3").textContent=players1[2]
        document.getElementById("ff").innerHTML+="<option>"+k+"</option>"
        
    }
    else{
        if (players1.length==3){
            document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
            players1.shift(1);
    
            document.getElementById("player2").textContent=players1[1];
            document.getElementById("player3").textContent='__';

            

            
            
        }
        else{
            if (players1.length==2){
                players1.shift(1);
    
                document.getElementById("player2").textContent='__'
                document.getElementById("player3").textContent='__'

            }
            else{
                if (players1.length==1){
                    players1.shift(0);
    
                    document.getElementById("player1").textContent="__"
                    document.getElementById("player2").textContent='__'
                    document.getElementById("player3").textContent='__'
                }
            }
        }
    }
    
}


function hh(){
    var p=document.getElementById("a").value;
    var h="achraf";
    
    if (h==p){
        alert("correct");
        window.location.replace("acceuily.html");

    }
}
function hide(){
    var po=document.getElementById("aqw");
    var pa=document.getElementById("a5")
    po.style.visibility="visible"
    pa.style.visibility="hidden"
}

function hide(){
    var po=document.getElementById("aqw");
    var pa=document.getElementById("a5")
    po.style.visibility="visible"
    pa.style.visibility="hidden"
}




function valider(){
    var t=document.getElementById("gest1")
    t.style.visibility="hidden"
}
function tapis1(){
    
    var players1=[];
    c=players1.length

    var t=document.getElementById("gest1")
    t.style.visibility="visible"
    
    for (var i=0;i<c;i++){
        document.getElementById("ff").innerHTML+="<option>"+players1[i]+"</option>";
    }
    var g=document.getElementById("z12")
    
    
}
function addplayer(){
        
    var player=document.getElementById("a27").value;
    players1.push(player)
    document.getElementById("ff").innerHTML+="<option id=\""+player+"\">" +player+ "</option>";
    document.getElementById("player1").textContent=players1[0]
    document.getElementById("player2").textContent=players1[1]
    document.getElementById("player3").textContent=players1[2]
}
function lose1(){
    if (players1.length>=4){
        document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
        players1.shift(0);
    
        document.getElementById("player1").textContent=players1[0]
        document.getElementById("player2").textContent=players1[1]
        document.getElementById("player3").textContent=players1[2]
        
    }
    else{
        if (players1.length==3){
            document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
            players1.shift(0);
    
            document.getElementById("player1").textContent=players1[0];
            document.getElementById("player2").textContent=players1[1];
            document.getElementById("player3").textContent='__';

            

            
            
        }
        else{
            if (players1.length==2){
                players1.shift(0);
                document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
    
                document.getElementById("player1").textContent=players1[0]
                document.getElementById("player2").textContent='__'
                document.getElementById("player3").textContent='__'
                var f=document.getElementById("azs")
                f.disabled = "disabled"
                var f=document.getElementById("azs1")
                f.disabled = "disabled"
                

            }
            else{
                if (players1.length==1){
                    players1.shift(0);
                    document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
                    document.getElementById("player1").textContent="__"
                    document.getElementById("player2").textContent='__'
                    document.getElementById("player3").textContent='__'
                }
            }
        }
    }
    
}
function lose2(){
    if (players1.length>=4){
        document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
        players1.shift(1);
    
        document.getElementById("player2").textContent=players1[1]
        document.getElementById("player3").textContent=players1[2]
        
    }
    else{
        if (players1.length==3){
            document.getElementById('ff').removeChild(document.getElementById('ff').getElementsByTagName('option')[0]);
            players1.shift(1);
    
            document.getElementById("player2").textContent=players1[1];
            document.getElementById("player3").textContent='__';

            

            
            
        }
        else{
            if (players1.length==2){
                players1.shift(1);
    
                document.getElementById("player2").textContent='__'
                document.getElementById("player3").textContent='__'

            }
            else{
                if (players1.length==1){
                    players1.shift(0);
    
                    document.getElementById("player1").textContent="__"
                    document.getElementById("player2").textContent='__'
                    document.getElementById("player3").textContent='__'
                }
            }
        }
    }
    
}
function remover(){
    var yourSelect = document.getElementById("ff");
    document.getElementById('ff').removeChild(document.getElementById('ff').selectedOptions[0])
}
function kk(){
    const myNode = document.getElementById("ff");
    myNode.textContent = '';
    players1=[]
    document.getElementById("player1").textContent="__"
    document.getElementById("player2").textContent='__'
    document.getElementById("player3").textContent='__'

}
