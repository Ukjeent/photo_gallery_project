// JavaScript code
function imageSearch() {
	let input = document.getElementById('search').value
	input=input.toUpperCase();
	let x = document.getElementsByClassName('searchbox');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toUpperCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="";			
		}
	}
}
  
      
