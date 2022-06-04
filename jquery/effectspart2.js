$('documet').ready(function() {
    $('#btn').click(function() {
        $('#img1').animate({left:'150px', opacity:'1'},2000)
    })
})

//the animate usually takes 3 parameters, first is style, second is delay and third is callback
//here we have not taken third parameter
//so upon the button click, the image is taken 150px to the left and opacity changes to 1 
//any number of css can be added with commas between them