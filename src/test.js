const string = `
*{box-sizing: border-box;margin: 0;bottom: 0;}
*::after{box-sizing: border-box;}
*::before{box-sizing: border-box;}
body{
    background:#FFE600;
    min-height:100%;
}
.skin{
    position: relative;
    background: #FFE600;
    height: 100vh;
}
.triangle{
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 150px;
    margin-left: -10px;
    z-index: 10;
}

.arc{
    position:absolute;
    width: 20px;
    height: 8px;
    top: -18px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
}
.eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2E2E2E;
    border-radius: 50% ;
}
.eye::before{
    content: '';
    display: block;
    border: 2px solid #000;
    width: 28px;
    height:28px;
    background: white;
    border-radius: 50%;
    position: relative;
    left: 10px;
    top:3px;
}
.eye.left{
    transform: translateX(-110px);
}
.eye.right{
    transform: translateX(110px);
}
.mouth{
    z-index: 1;
    width: 200px;
    height: 200px;
    position: absolute;
    left: 50%;
    margin-left: -100px;
    top:180px;
}
.mouth .up{
    position: relative;   
    z-index: 1;
}
.mouth .up .lip{
    height: 30px;
    width: 90px;
    border: 3px solid black;
    background: #FFE600;
    position: absolute;
    left: 50%;
    margin-left: -45px;
    border-top: transparent ;
}
.mouth .up .lip.left{   
    border-radius: 0 0 0 30px;    
    border-right:transparent ;
    transform: rotate(-20deg) translateX(-50px);
   
}
.mouth .up .lip.right{   
    border-radius: 0 0 30px 0;
    border-left: transparent;
    transform: rotate(20deg) translateX(50px);
}
.mouth .down{
    position: absolute;
    height: 170px;
    width: 100%;
    top: 0;
    overflow: hidden;
}
.mouth .down .yuan1{
    border: 3px solid black;
    width: 150px;
    height: 700px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9B000A;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 150px;
    height: 270px;
    position: absolute;
    bottom: -150px;
    left: 50%;
    margin-left: -75px;
    background: #FF485F;
    border-radius: 80px/100px;
    
}
.cheek{
    position: absolute;
    left: 50%;
    width: 88px;
    height:88px;
    margin-left: -44px;
    border: 3px solid black;
    top: 200px;
    z-index: 5;
    background: #FF0000;
}
.cheek.left{
    transform: translateX(-200px);
    border-radius: 50%;
}
.cheek.right{
    transform: translateX(200px);
    border-radius: 50%;
}
`

demo = document.querySelector('#demo')
demo2 = document.querySelector('#demo2')
demo.innerText = string.substring(0,n)
demo2.innerHTML = string .substring(0,n)
let n = 1
let time = 50
const run = () => {
    n += 1
    if(n > string.length){
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substring(0,n)
    demo2.innerHTML = string.substring(0,n)
    demo.scrollTop = demo.scrollHeight
}
const doPlay = () =>{
    return setInterval(run,time)
}
const doPause = () =>{
    window.clearInterval(id)
}
let id = doPlay()

pause.onclick = doPause
play .onclick = () =>{
    id = doPlay()
}
slow .onclick = () =>{
    doPause()
    time = 100
    id = doPlay()
}
mid.onclick = () =>{
    doPause()
    time = 50
    id = doPlay()
}
fast .onclick = () =>{
    doPause()
    time = 1
    id = doPlay()
}