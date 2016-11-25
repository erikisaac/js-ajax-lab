var catList = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(catList){
	var catListParsed = jQuery.parseJSON(catList);
	var fullCatList = [];
	console.log("Cat makeer working.");
	for (var  i = 0; i < catListParsed.length; i++) {
		fullCatList.push(catListParsed[i].name);
	};
	console.log("this is the full cat list: " + fullCatList);
	var firstCat = catListParsed[0];
	console.log(firstCat);
	console.log(firstCat.name);
	console.log(catList);
});

var ULCats = document.getElementById("cats");
console.log("This should be the UL cats: " + ULCats);

var LICat = document.createElement("li");

LICat.textContent = "Test cat!";
	
ULCats.appendChild(LICat);

 	// for (i = 0; i < catList.length; i++ ) {
 	// 	var li = document.createElement("li");
 	// 	var t = document.createTextNode(catList[i]);
 	// 	li.appendChild(t); 
 	// 	catNode.appendChild(li);
 	// }
