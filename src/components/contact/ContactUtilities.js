import $ from 'jquery';

export function validate() {

    var nameReg = /^[A-Za-z]+$/;
    var numberReg = /^[0-9]+$/;
    var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var firstName = $.trim($('#firstName').val());
    var phone = $.trim($('#phone').val());

    // var lastName=$.trim($('#lastName').val());
    var email = $.trim($('#email').val());
    var comment = $.trim($('#comment').val());
    var errordisp = 0;
    $('.error').hide();
    if (firstName === "") {
        $('#firstName').after('<div class="error"> Please enter first name</div>');
        errordisp = 1;
    }

    if (phone === "") {
        $('#phone').after('<div class="error"> Please enter phone number</div>');
        errordisp = 1;
    }
    // if(lastName == ""){		

    // 	$('#lastName').after('<div class="error"> Please enter last name</div>');

    // 	 errordisp=1;

    // }	

    if (email === "") {
        $('#email').after('<div class="error"> Please enter valid email id</div>');
        errordisp = 1;

    } else if (!emailReg.test(email)) {
        $('#email').after('<div class="error"> Please enter valid email id</div>');
        errordisp = 1;
    }

    if (comment === "") {

        $('#comment').after('<div class="error"> Please enter comments</div>');
        errordisp = 1;
    }

    // var v = grecaptch.getResponse();
    // if (v.length === 0) {
    //     $('#captacherror').after('<div class="error"> Please checked robots.</div>');
    //     errordisp = 1;
    // } else {
    //     hideerrordiv('captacherror');
    // }

    if (errordisp === 1) {
        return false;
    } else {
        return true;
        // return true;
    }
}

export function hideerrordiv(elemId) {

    //$('#fld_'+elemId).text('');
    //$('.fbcommentbox').next().hide();
    $('#' + elemId).next('.error').remove();
}