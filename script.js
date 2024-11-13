    $(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 600) {
          $(".navbar").css("background" , "#36255a");
        }
  
        else{
            $(".navbar").css("background" , "none");  	
        }
    });



/* Footer form validation ends */

$('#footer-frm').validate({

rules:
{
  name:
  {
    required:true
  },
    phone:
  {
    required:true
  },
  email:
  {
    required:true,
    email:true
  },

},
messages:
{
  name:
  {
    required:'Name is required'
  },
    phone:
  {
    required:'Phone Number is required'
  },
  email:
  {
    required:'Email ID is required',
    email:'Enter a valid Email ID'
  }
},
submitHandler:function(form)
{

    var phone_hidden=jQuery('#footer-frm .iti__selected-flag')[0].title;
$('input[name="phone_hidden"]').val(phone_hidden);

$.ajax({

    url:"send-enquiry.php",
    data:$('#footer-frm').serializeArray(),
    type:'POST',
    dataType:'json',
    beforeSend:function()
    {
    $('button[name="footer_submit"]').html('WAIT...');
    $('button[name="footer_submit"]').prop('disabled',true);
    },
    success:function(r)
    {
    if(r.status=='success')
    {
    document.getElementById("footer-frm").reset();
    $('.contact_msg').html(r.msg);
    $('button[name="footer_submit"]').html('Submit');
    $('button[name="footer_submit"]').prop('disabled',false);
    }
    else
    {
    document.getElementById("footer-frm").reset();
    $('.contact_msg').html(r.msg);
    $('button[name="footer_submit"]').html('Submit');
    $('button[name="footer_submit"]').prop('disabled',false);
    }
    }


});


}


});


/* Footer form validation ends */


/* Download Brochure validation starts */


$('#download-brochure-frm').validate({

rules:
{
    name:
    {
        required:true
    },
       mobile:
    {
        required:true
    },
    email:
    {
        required:true,
        email:true
    }
 
},
messages:
{
    name:
    {
        required:'Name is required'
    },
        mobile:
    {
        required:'Mobile Number is required',
    },
    email:
    {
        required:'Email ID is required',
        email:'Enter a valid Email ID'
    }
},
submitHandler:function(form)
{
var enquiry_form_hidden=jQuery('#download-brochure-frm .iti__selected-flag')[0].title;
$('input[name="mobile_download_hidden"]').val(enquiry_form_hidden);
var brochure_url=$('input[name="brochure_url"]').val();


$.ajax({

    url:"send-enquiry2.php",
    data:$('#download-brochure-frm').serializeArray(),
    type:'POST',
    dataType:'json',
    beforeSend:function()
    {
    $('button[name="download_brochure_submit"]').html('WAIT...');
    $('button[name="download_brochure_submit"]').prop('disabled',true);
    },
    success:function(r)
    {
    if(r.status=='success')
    {
  $('button[name="download_brochure_submit"]').html('Download Brochure');
$('button[name="download_brochure_submit"]').prop('disabled', false);
$('#download-brochure-frm input,textarea').val('');
$('#brochure-form').modal('hide');

var req = new XMLHttpRequest();
req.open("GET", "pdf/"+brochure_url+"", true);
req.responseType = "blob";  // Corrected response type

req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = "Brochure_" + new Date().toISOString() + "_palmiera-3-fact-sheet.pdf"; // Use toISOString for a cleaner date format
    link.click();
};

req.send();


    }
    else
    {
  $('#download-brochure-frm input,textarea').val('');
    $('.enquiry_frm_msg2').html(r.msg);
    $('button[name="download_brochure_submit"]').html('Download Brochure');
    $('button[name="download_brochure_submit"]').prop('disabled',false);
    }
    }
});


}

})

/* Download Brochure validation ends */
    });
