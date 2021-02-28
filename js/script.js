
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
    