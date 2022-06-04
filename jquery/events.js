$('button').click(func1);

function func1() {
    $('#img1').css('width','500px');
}

//the above code can be writen as anonymous function
// $('button').click(function() {
//     $('#img1').css('width','500px');
// })


//document refers to whole html docuemnt
//ready is an event in jquery which gets loaded after the entire html is loaded
//inside our ready event we will have all the other functions which we write normally
$("document").ready(function() {
    $('button').click(function() {
        $('#img1').css('width','500px');
    })
})


//double click in jquery
$("document").ready(function() {
    $('button').dblclick(function() {
        $('#img1').css('width','500px');
    })
})


//mouse enter and mouse leave
$("document").ready(function() {
    $('#img1').mouseenter(function() {
        $('#img1').css('width','500px');
    })

    $('#img1').mouseleave(function() {
        $('#img1').css('width','250px');
    })
})



//hover: similar to mouse enter and mouse leave
$('#img1').hover(func1, func2);
function func1()
{
    $('#img1').css('width','500px')
}
function func2()
{
    $('#img1').css('width','250px')
}








