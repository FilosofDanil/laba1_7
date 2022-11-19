function function1() {
    let beer = Number(document.getElementById("beer_drinked").value);
    let percent = Number(document.getElementById("percent").value);
    let dwarfes = Number(document.getElementById("dwarfes").value);
    let result =  beer * 0.01*percent / dwarfes;
    if(dwarfes < 0 || percent < 0 || beer < 0){
    		alert("You Shall Not PAAAAAAAAS")
    		window.location.href = '/';
    }
    document.getElementById("result").innerHTML = result;
}

function function2(){
	let files=['Boromir34_b.jpg','Screenshot_2.jpg','gen.jpg','ara.jpg']
	let buttons = []
	for (let i = 0; i < files.length; i++) {
		buttons[i]=document.getElementById("button"+i.toString())
		buttons[i].addEventListener("click",
			function(){
				document.getElementById("to_show").src="/imgs/" + files[i]
			})
	}
}

let maping = {
    "А": "A",
    "Б": "B",
    "В": "V",
    "Г": "H",
    "Ґ": "G",
    "Д": "D",
    "Е": "E",
    "Є": "Ye",
    "Ж": "Zh",
    "З": "Z",
    "И": "Y",
    "І": "I",
    "Ї": "Yi",
    "Й": "Y",
    "К": "K",
    "Л": "L",
    "М": "M",
    "Н": "N",
    "О": "O",
    "П": "P",
    "Р": "R",
    "С": "S",
    "Т": "T",
    "У": "U",
    "Ф": "F",
    "Х": "Kh",
    "Ц": "Ts",
    "Ч": "Ch",
    "Ш": "Sh",
    "Щ": "Shch",
    "Ь": "'",
    "Ю": "Yu",
    "Я": "Ya"
}
let text = document.getElementById("res_read")
let ukr = document.getElementById("loh_area")
ukr.addEventListener("input", function(){
	text.value = ukr.value.split('').map(function(char){
		if(char.toLowerCase() === char && maping[char.toUpperCase()]!=undefined){
			return (maping[char.toUpperCase()].toLowerCase())
		}else{
			return maping[char] || char
		}
	}).join("")
})







let week = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']

let date = document.getElementById("data")
date.addEventListener("change", function(){

	let arr = date.value.split(/[.,-]/);
	let a = Math.floor((14 - arr[1]) / 12)
	let y = arr[0] - a
	let m = Number(arr[1]) + 12 * a - 2
	let weekday = (Number(arr[2]) + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12))%7
document.getElementById("result_den").innerHTML = week[Math.floor(weekday)];
})
	
























