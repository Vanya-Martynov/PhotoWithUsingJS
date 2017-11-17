(function Name() {
	

	/*let img =[];
	img = document.getElementsByClassName("photo");
	console.log(img);*/
	document.getElementById("flex").addEventListener('click', function (){
		let target = document.onclick;
		if (target != 'flex') {
			console.log(target);
			return;
		} else console.log('q');
		
	});
	



	

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
      console.log(target.className);
    if (target.className == 'flex'){
    	let test = document.querySelector('#test.big');
    	console.log(test);
    	document.querySelector('#test.big').classList.add("photo");
    	document.querySelector('#test.big.photo').classList.remove("big");
    	return;
    }
    	//target = target.parentNode;
    	
  	}})

  	


}());