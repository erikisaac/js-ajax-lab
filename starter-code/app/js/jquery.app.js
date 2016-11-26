
var catListParsed = [];
var fullCatList = [];

var catList = $.get("https://ga-cat-rescue.herokuapp.com/api/cats").done(function(catList){
	catListParsed = jQuery.parseJSON(catList);
	// var fullCatList = [];
	console.log("Cat makeer working.");
	for (var  i = 0; i < catListParsed.length; i++) {
		fullCatList.push(catListParsed[i].name);
	};
	console.log("this is the full cat list: " + fullCatList);
	var firstCat = catListParsed[0];
	console.log(firstCat);
	console.log(firstCat.name);
	console.log(catList);
	displayCatList();
});

function displayCatList () { 
	var ULCats = document.getElementById("cats");
	console.log("This should be the UL cats: " + ULCats);
	console.log("This should be Zom: " + fullCatList[22]);

	for (i = 0; i < fullCatList.length; i++) {
		var LICat = document.createElement("li");

		LICat.textContent = fullCatList[i];

		ULCats.appendChild(LICat);
	};
};