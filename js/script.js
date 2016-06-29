/* define the array with a list of elements */
var arrayList = [
"I will acknowledge all the things I'm grateful for.",
"I will appreciate the little things in my life.",
"I will reinforce the goals I'm commited to.",
"I will keep reminding myself how awesome I am.",
"I will add a positive spin to everything I say.",
"I will do random acts of kindness.",
"I will smile to other people more.",
"I will reach to someone I care about.",
"I will say 'I love you' to my dearests.",
"I will make someone smile.",
"I will think of 3 good things that happened to me.",
"I will recognise someone by thanking them.",
];

/* define the function to shuffle the array */
function shuffleArray() {
for (var i = arrayList.length - 1; i > 0; i--) {
	var j = Math.floor(Math.random() * (i + 1));
	var temp = arrayList[i];
	arrayList[i] = arrayList[j];
	arrayList[j] = temp;
}
}

/* execute the shuffleArray function */
shuffleArray();

/* button event initiating the randomiser function */
document.getElementById('clickHere').onclick = function () {
	randomiser ();
}

/* define the array index value for the first click */
var arrayIndex = 0;

/* define the main function */
function randomiser () {
  console.log(arrayList);
	document.getElementById('resultSpan').innerHTML = arrayList[arrayIndex];
	arrayIndex = (arrayIndex+1);
	if (arrayIndex>arrayList.length-1) {
		arrayIndex = 0;
		var lastArrayElement = arrayList[arrayList.length-1];
		shuffleArray();
		while (arrayList[0] == lastArrayElement) {
			shuffleArray();
		}
	}

}