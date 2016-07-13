  $(document).ready(function(){
    //mouse event for product1 starts here.

    $("#products").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");
      
    });
    $("#products").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");
      
    });
    //mouse event for product1 ends here
    
    // mouse events for product2 begins here.
    $("#products2").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");
      
    });
    $("#products2").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");
      
    });
    // mouse events for products2 ends here.

    
    // this is the action displaying products types for products 1, product2 and co, on click
    $("#products").click(function(){
      $("#checkbox").fadeToggle(1000);
    });
    
    $("#products2").click(function(){
      $("#checkbox2").fadeToggle(1000);
    });
    
    // mouse events for products panels/type begins here.
    
    // mouse events for panel/type product1
    $("#checkbox").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");
    });
    $("#checkbox").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");
    });
    //mouse events for products1 panel ends here.
    
    // mouse events for products2 panels/type.
    $("#checkbox2").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");
    });
    $("#checkbox2").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");
    });
    // mouse events for products2 panel ends here
    
    // mouse events for addToCart and weigh basket panels/type starts here.
    
    $("#cart").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");  
    });
    
    $("#cart").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");  
    });
    
    $("#basket").mouseenter(function(){
      $(this).css("background-color", "#26a69a");
      $(this).css("color", "white");
      $("#basket .modal-content").css("color", "black");
      
    });
    $("#basket").mouseleave(function(){
      $(this).css("background-color", "white");
      $(this).css("color", "#333333");
          
    });

    
    // mouse events for addToCart and weigh basket panels/type ends here.
    
    // using change function to build a simple add to cart, calculation of total amount and payment.
    
    $("input[type='checkbox']").change(function () {
      var lis = ""
      var AddToCartTotal= 0;
      $("[type='checkbox']:checked").each(function () {
        lis += "<li>" + $(this).parent().text() + "</li>"
        AddToCartTotal += Math.ceil($(this).val());
        console.log(this)
      })
      console.log(lis)
      $("ul").html(lis);
      $("#total").html(AddToCartTotal);
      if(AddToCartTotal > 0){ $("#button").show("slow")}
      else{$("#button").hide() }
    });

  });
