function func2() {
    $("div").css('background-color','orange');
}

function func3() {
    $("#p1").css('font-style','italic')
}

function func4() {
    $(".para").css('font-style','italic')
}

function func5() {
    $("#div1,#div3").css('background-color','green')
}

function func6() {
    $("#div1, li").css('background-color','purple')
}

function func7() {
    $("div > p").fadeToggle()
    //it works the same without '>' sign also
}

function func8() {
    $("p:first").fadeToggle()
    
}

function func9() {
    $("li:odd").fadeToggle()
    
}


