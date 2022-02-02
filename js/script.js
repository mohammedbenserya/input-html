

function myFunction() {
    /* Get the text field */
   
    if(event.srcElement.id=="mobileb"){
    var copyText = document.getElementById("mobileu");
    
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    
    
    }
    if(event.srcElement.id=="lowestb"){
        var copyText = document.getElementById("lowestu");
        
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      
        /* Copy the text inside the text field */
        document.execCommand("copy");
      
        /* Alert the copied text */
        
        }
        if(event.srcElement.id=="lowb"){
            var copyText = document.getElementById("lowu");
            
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /*For mobile devices*/
          
            /* Copy the text inside the text field */
            document.execCommand("copy");
          
            /* Alert the copied text */
            
            }
            if(event.srcElement.id=="sdb"){
                var copyText = document.getElementById("sdu");
                
                /* Select the text field */
                copyText.select();
                copyText.setSelectionRange(0, 99999); /*For mobile devices*/
              
                /* Copy the text inside the text field */
                document.execCommand("copy");
              
                /* Alert the copied text */
                
                }
                if(event.srcElement.id=="hdb"){
                    var copyText = document.getElementById("hdu");
                    
                    /* Select the text field */
                    copyText.select();
                    copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                  
                    /* Copy the text inside the text field */
                    document.execCommand("copy");
                  
                    /* Alert the copied text */
                    
                    }
                    if(event.srcElement.id=="fullb"){
                        var copyText = document.getElementById("fullu");
                        
                        /* Select the text field */
                        copyText.select();
                        copyText.setSelectionRange(0, 99999); /*For mobile devices*/
                      
                        /* Copy the text inside the text field */
                        document.execCommand("copy");
                      
                        /* Alert the copied text */
               
        }
  }
