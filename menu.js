

var position = true;


function ouvert() {

    // 



    var menu = document.getElementById('relative');
    
    if (position == true) {
        
menu.style.transition = "all 1.2s"
        menu.style.right = "0"
        menu.style.minHeight = "90vh"
        console.log("true");

        position =false;


    } else {

menu.style.height = "0vh"

        menu.style.transition = "all 1.2s"
        menu.style.right = "150%"
        console.log("false");


        position =true;





    }
}