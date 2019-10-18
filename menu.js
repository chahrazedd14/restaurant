function ouvert(){
    var menu=document.getElementById('relative');
 if(menu.style.right=="300%"){
    menu.style.transition="all 3s"
    menu.style.right="0%"
    menu.style.minHeight="80vh"
    
}
else{
    console.log("error");
    menu.style.height="00vh"

    menu.style.transition="all 3s"
    menu.style.right="300%"
    console.log("true");
}
} 