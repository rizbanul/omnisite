
// Scripts for Kristy and Tanim Read More      

	  

	  $(document).ready(function()

                        {
          $(".SFullcontainer").hide();
           $(".TFullcontainer").hide();
      
      });

          $("#sPopUp").click(function()

                             {

              $(".SFullcontainer").fadeIn(300);
              
//               $(".SFullcontainer").css("top", "500px");
//              $(".SFullcontainer").addClass("overlay");
                 $(".TFullcontainer").hide();
               

          });

          

          $(".Sbutton").click(function()

                             {

              $(".SFullcontainer").hide(300);
           

          });

          


	  

	 

          $("#tPopUp").click(function()

                             {

              $(".TFullcontainer").fadeIn(300);
              $(".SFullcontainer").hide();

          });

          

          $(".Tbutton").click(function()

                             {

              $(".TFullcontainer").hide(300);
               

          });

          

     