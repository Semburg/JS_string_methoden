
// * 1_1
let nachName = "Burghardt";
let vorName = "Simon";

console.log(nachName.length);
console.log(vorName.length);
let nameFull = nachName + " " + vorName;
console.log(nameFull);
console.log(nameFull.length);


// * 1_2

let txt = 'How inappropriate to call this planet Earth, when clearly it is Ocean.';
console.log("'h' is on position: " + txt.indexOf("h"));
console.log("'Earth' is on position: " + txt.indexOf("Earth"));
console.log("'Moon' is on position: " + txt.indexOf("Moon"));


// * 1_3

let txt2 = "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

console.log("Position of ';' is: " + txt2.search(";"));
console.log("Position of 'green' is: " + txt2.search("green"));
console.log("Position of 'blue' is: " + txt2.search("Blue")); // !


// * 1_4  slice

let a = 'Sam is going to coding school';
let b = a.slice("Sam");
console.log(a.slice(4,6));
console.log(a.slice(-6));
console.log(a.slice(4,6));
console.log(a.slice(4,6));
console.log(a.slice(0,4) + a.slice(4,6) + a.slice(-7));

// * 1_5  substring
let text = 'Sam is back from coding school';
let b1 = text.substring(0,3);
console.log(b1);
let b2 = text.substring(4,6);
console.log(b2);
let b3 = text.substring(-6);

console.log(text.length);
console.log(text.substring(24));
console.log(text.substring(0,4) + text.substring(4,6) + text.substring(23));

// * 1_6  substr
let part1 = text.substr(0,3);
let part2 = text.substr(4,2);
let part3 = text.substr(24,6);
let part4 = text.substr(6,5);

document.write(part1 + '<br>' +part2 + '<br>' + part3 + '<br>' + part4 + '<br>' +  '<br>');

// * 1_7  replace
let text2 = 'Sam is good at coding school';
let part5 = text2.replace("good", "bad");
let part6 = text2.replace("Sam", "Tom");
let part7 = text2.replace("school", "tennis");

document.write(part5 + '<br>');
document.write(part6 + '<br>');
document.write(part7 + '<br>');

// * 1_8  loverCase upper Case

let text5 = 'Sam is going to coding school';

document.write('<br>' + text5.toUpperCase() + '<br>');
document.write(text5.toLowerCase() + '<br>');

let sem1 = text5.replace("sam", "SAM");
let sem2 = text5.replace("school", "SCHOOL");
document.write(sem2 + '<br>');


document.write(text5.toLowerCase(0,10) + '<br>');
document.write(text5.substr(0,4).toUpperCase() + text5.substr(4,19).toLowerCase() + 
text5.substr(22,9).toUpperCase() +    '<br>');

document.write(text5.toLowerCase() +    '<br>');
document.write(text5.substr(0,3).toLowerCase() + " " + text5.substr(4,11).toUpperCase() + " " + 
text5.substr(15,14).toLowerCase()  +  '<br>' +  '<br>');

let text6 = 'Sam is going to coding school';
document.write(text6.toLowerCase() +    '<br>');


document.write(text6.slice(0,1) +  text6.toLowerCase().substring(1,4) +
text6.toUpperCase().substring(4,5) +  text6.toLowerCase().substring(5,6) +
text6.toUpperCase().substring(6,7) +  text6.toLowerCase().substring(7,13) +
text6.toUpperCase().substring(13,14) + text6.toLowerCase().substring(14,16) + 
text6.toUpperCase().substring(16,17) + text6.toLowerCase().substring(17,23) +
text6.toUpperCase().substring(23,24) + text6.toLowerCase().substring(24,29) +  '<br>');

document.write(text6.toLowerCase()   + '<br>'    );

document.write( text6[0].toUpperCase() + text6.slice(1, 4) + 
                text6[4].toUpperCase() +  text6.slice(5,7) +
                text6[7].toUpperCase() +  text6.slice(8,13) +
                text6[13].toUpperCase() +  text6.slice(14,16) +
                text6[16].toUpperCase() +  text6.slice(17,23) +
                text6[23].toUpperCase() +  text6.slice(24,29) +

'<br>' + '<br>' +  '<br>')




// * 1_9  concat
let text10 = 'Sam is going to coding school';
let text20 = 'Tom';
let text30 = 'programming bike';
let text40 = 'and';

// *  Sam is going
let samPart = text10.substring(0,16);
let schoolPart = text10.substring(23,30);
let moviePart = "to the movie theater";
let goingPart = text10.substring(7,16);
console.log(samPart);
console.log(schoolPart);

document.write(samPart + " " + schoolPart + " " + text40 + " " + moviePart + '<br>' );
document.write(samPart + " " + moviePart.replace("to the", " ") + '<br>' );
document.write(text20 + " " + text40 + " " + text10.slice(0,3) + " " + "are " + goingPart + schoolPart + '<br>');
document.write(text20 + " " + text40 + " " + text10.slice(0,3) + " " + "are " + goingPart  + "gym" + " " + text40 + " " + moviePart + '<br>');


























