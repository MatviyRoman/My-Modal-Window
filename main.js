/*Modal Relative*/
$(window).on('load', function(){
    $('.openModalRelative').click(function(){
        $('.modalRelative').show();
        // alert('Open My Window Modal Test');
        $('.closeModalRelative').click(function(){
        	$('.modalRelative').hide();
        	// alert('Close My Window Modal Test');
        })
    })
});

/*Modal Absolute*/
$(window).on('load', function(){
    $('.openModalAbsolute').click(function(){
        $('.modalAbsolute').show();
        // alert('Open My Window Modal Test');
        $('.closeModalAbsolute').click(function(){
        	$('.modalAbsolute').hide();
        	// alert('Close My Window Modal Test');
        })
    })
});

/*Modal Fixed*/
$(window).on('load', function(){
    $('.openModalFixed').click(function(){
        $('.modalFixed').show();
        // alert('Open My Window Modal Test');
        $('.closeModalFixed').click(function(){
        	$('.modalFixed').hide();
        	// alert('Close My Window Modal Test');
        })
    })
});




/*z-index 3*/
$(window).on('load', function(){
    $('.openZ-index3').click(function(){
        $('.z-index3').show();
        // alert('Open My Window Modal Test');
        $('.closeZ-index3').click(function(){
            $('.z-index3').hide();
            // alert('Close My Window Modal Test');
        })
    })
});

/*z-index 2*/
$(window).on('load', function(){
    $('.openZ-index2').click(function(){
        $('.z-index2').show();
        // alert('Open My Window Modal Test');
        $('.closeZ-index2').click(function(){
            $('.z-index2').hide();
            // alert('Close My Window Modal Test');
        })
    })
});

/*z-index 1*/
$(window).on('load', function(){
    $('.openZ-index1').click(function(){
        $('.z-index1').show();
        // alert('Open My Window Modal Test');
        $('.closeZ-index1').click(function(){
            $('.z-index1').hide();
            // alert('Close My Window Modal Test');
        })
    })
});