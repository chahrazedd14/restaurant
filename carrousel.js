function avancer(){
    var deplacement=document.getElementById("panorama");
    
    deplacement.style.transform="translateX(1200px)"
    deplacement.style.transition="all .3s"
    var deplacement_image1=document.getElementById("image")
    deplacement_image1.style.transform="translateX(1200px)"
    deplacement_image1.style.transition="all .3s"
    var deplacement2=document.getElementById("panorama2");
    deplacement2.style.left="25%"
    deplacement2.style.transition="all .3s"
    deplacement2.style.visibility="visible"

}

function reculer(){
    var deplacement=document.getElementById("panorama");
    
    deplacement.style.transform="translateX(00px)"
    deplacement.style.transition="all .3s"
    var deplacement=document.getElementById("image")
    deplacement.style.transform="translateX(00px)"
    deplacement.style.transition="all .3s"
    var deplacement2=document.getElementById("panorama2");
    deplacement2.style.left="-25%"
    deplacement2.style.transition="all .3s"
    deplacement2.style.visibility="hidden"

}
