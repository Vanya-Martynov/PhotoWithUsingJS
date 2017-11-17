(function Name() {
	
		document.getElementById("flex").addEventListener('click', function(event) {
  		let target = event.target;
  		while (target != document.getElementById("try")) {
    	   if (target.className == 'photo') {
      
      		  target.classList.add("big");
      		  target.classList.remove("photo");
      		  target.id = "test";
      		  return;
     
            }
        if (target.className == 'big'){
      	   target.classList.remove("big");
      	   target.classList.add("photo");
      	   return;
            }
     
        if (target.className == 'flex'){
    	     let test = document.querySelector('#test.big');
    	     console.log(test);
    	     document.querySelector('#test.big').classList.add("photo");
    	     document.querySelector('#test.big.photo').classList.remove("big");
    	     return;
           }
    	
    	
  	}});

  	


}());