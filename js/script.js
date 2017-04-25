$(function(){
  //=========== POPUP FOR LOG IN USERS OR CLICK REGISTRATION

  var $popupLogIn = $('.popupLogIn'),
  $bgOpacity = $('.bgOpacity'),
  $popupRagistration = $('.popupRagistration'),
  $popupSubscription = $('.popupSubscription');

  if($('body').data('subscription')){
    $popupSubscription.slideDown(300);
    $bgOpacity.slideDown(300);
  };


  $('.logIn').on('click', function(){
    $popupLogIn.slideToggle(200);
    $bgOpacity.slideDown(200);
  });
  $bgOpacity.on('click', function(){
    $(this).slideUp(200);
    $popupLogIn.slideUp(200);
    $popupRagistration.slideUp(200);
    $popupSubscription.slideUp(200);
  });
  //=============== END

  $('.btnRagistration').on('click', function(){
      $('.popupRagistration').slideDown(200);
      $popupLogIn.slideUp(200);
  })

  $('.dropDown').on('click', function(){
    $(this).children('.dropList').slideToggle(300);
  });

  $('.userBtnHover').hover(function(){
    if (!$(this).hasClass('active')){
      $(this).children('.lastImg').show();
      $(this).children('.iconQuantity').css('color','#39073d');
    }
    
  }, function(){
    if (!$(this).hasClass('active')){
      $(this).children('.lastImg').hide();
      $(this).children('.iconQuantity').css('color','#fff');
    }
  });


})
