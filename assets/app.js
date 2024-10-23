var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular(){
    if(MenuItens.style.maxHeight == "0px"){
    MenuItens.style.maxHeight = "200px";
    }else{
        MenuItens.style.maxHeight = "0px";
    }
}

var produtoimg = document.getElementById("produtoimg");
var produtoMiniatura = document.getElementByIdClassName("produtoMiniatura");

produtoMiniatura[0].onclick = function(){
    produtoimg.src = produtoMiniatura[0].src;
}

produtoMiniatura[1].onclick = function(){
    produtoimg.src = produtoMiniatura[1].src;
}

produtoMiniatura[2].onclick = function(){
    produtoimg.src = produtoMiniatura[2].src;
}

produtoMiniatura[3].onclick = function(){
    produtoimg.src = produtoMiniatura[3].src;
}


