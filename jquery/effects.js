$('document').ready(function(){
    $('#btn1').click(function() {
        $('#img1').hide()
        //$('#img1').hide(2000) //hides the image with a delay of 2sec
    })

    $('#btn2').click(function() {
        $('#img1').show()
    })

    $('#btn3').click(function() {
        //toggle is a combination of hide and show function
        $('#img1').toggle()
    })

    $('#btn4').click(function() {
        //$('#img1').fadein()
        $('#img1').fadeIn(1000)
    })

    $('#btn5').click(function() {
        //$('#img1').fadeout()
        $('#img1').fadeOut(1000)
    })

    $('#btn6').click(function() {
        $('#img1').fadeToggle()
    })

    $('#btn7').click(function() {
        $('#img1').slideUp(4000)
    })

    $('#btn8').click(function() {
        $('#img1').slideDown(4000)
    })

    $('#btn9').click(function() {
        $('#img1').slideToggle(4000)
    })

    //say suppose you've clicked the fadein button with some delay and that effect is in action
    //now between if you click the stop button, the action will freeze there itself
    $('#btn10').click(function() {
        $('#img1').stop()
    })

})

//for all of the above functions delay can be added, just showed for a few of them

