let range=document.getElementById("r1").addEventListener("input",function(){
    let range2=document.getElementById("r1");
    let a1=document.getElementById("a21");

    a1.style.width=(range2.value+"%");
    let a20=document.getElementById("a20");
    a20.style.width=range2.value+"%";
    let hr1=document.getElementById("hr1");
    hr1.style.setProperty("--x" , range2.value+"%");
    hr1.style.left=range2.value-50+"%";


})