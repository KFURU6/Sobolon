// drawer js
$(document).ready(function() {
  $('.drawer').drawer();
});

// wow js
new WOW().init();

// smoothscroll
$(function() {
  $('a[href^="#"]').on('click', function() {
    const headerHeight = $('.header').innerHeight();
    const id = $(this).attr('href');
    let idOffsetTop = 0;
    if (id != '#') {
      idOffsetTop = $(id).offset().top - headerHeight;
    }
    $('html, body').animate({
      scrollTop: idOffsetTop
    }, 2000);
  });
})

// google form
$(function() {
  let $form = $('#js-form')
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp();
          $('#js-success').slideDown();
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp();
          $('#js-error').slideDown();
        }
      } 
    });
    return false; 
  });

  // form確認
  let $submit = $('#js-submit');
  $('#js-form input, #js-form textarea').on('change', function() {
    if(
      $('#js-form input[type="text"]').val() !== "" &&
      $('#js-form input[type="email"]').val() !== "" &&
      $('#js-form input[name="entry.1834745223"]').val() !== "" &&
      $('#js-form input[name="entry.231509407"]').prop('checked') === true
    ) {
      $submit.prop('disabled', false);
      $submit.addClass('-active');
    } else {
      $submit.prop('disabled', true);
      $submit.removeClass('-active');
    }
  })
})
