
$(document).ready(function() {

    let cardTotalNumber =(
        $(".card").toArray().length
      );
  
    for(let cardNumber = 1; cardNumber<=cardTotalNumber;cardNumber++ ){
        $(`.card${cardNumber}`).click(function() {
            $(`.card-show${cardNumber}`).toggle(400);
            $(`.card-hidden${cardNumber}`).toggle(400);
          });
      }
    
  
      let overlayTotalNumber =(
        $(".overlay").toArray().length
      );
  
      for(let overlayNumber = 1; overlayNumber<=overlayTotalNumber;overlayNumber++){
          $(`#overlay${overlayNumber}`).mouseover(function() {
          $(`#overlay${overlayNumber} > img`).addClass("overlay-effect");
          $(`#work-overlay${overlayNumber}`).toggle();
        }).mouseout(function(){
          $(`#overlay${overlayNumber} > img`).removeClass("overlay-effect");
          $(`#work-overlay${overlayNumber}`).toggle();
        });
      }
    });
    
    $(document).ready(function() {
        $("form#contactForm").submit(function(event) {
            event.preventDefault();
            var name = $("input#name").val();
            var email = $("input#email").val();
    
    
            if (name && email) {
                alert(name + ", we have received your message. Thank you for reaching out to us.");
            } else {
                alert("Please enter your name and email!");
            }
        })
    
    
    })
    