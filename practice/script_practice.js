// for( var i=1; i<6; i++){
// 	console.log('parent loop'+ i);

//    for (var k=1; k<5; k++){
//    	  document.write('child loop '+k);
//    }



//     document.write("<p>------------------</p>");
// }


// function nestMult(){
//     for (var i = 2; i <=12; i++){

//                 document.write("<div class= 'timesbox'>");
//                 document.write("<h2> Table "+i+ "</h2>");
//              for (var k=1; k <= 12; k++){
//                 document.write("<h1>"+ i+ 'X'+ k+ '='+ k*1+ "</h1>");
//              }
//              document.write("</div>");
//             }



// }
// nestMult()


// function voterCheck(age){

//     age>=18? alert('you can vote'): alert('you can not vote');
// }

// var ageOfUser=prompt('how old are you')

// voterCheck(ageOfUser)

// function campaign(party){
// party.toLowerCase() == 'apc'? alert('we are running the change'): alert('change the change')

// }
// var collectUser=prompt('Input your party')
// campaign(collectUser)






// function nestMult(){
// 	for(var i=1; i<4; i++){

//          for(var k=1; k <=3; k++){
//          	document.write("<h1>" + i+ 'X' + k+ '=' +  k*i+ "</h1>");
//          }
//           document.write("--------------------------------------");
// 	}


// }
// nestMult();


// var studentsNames=new Array('ugo'+'toyo'+'George'+'Mayowa'+ 'Victor')


// console.log(studentsNames)

// var studentsNames=["Toyo", "George",  "Bright", "Samuel"]



// document.write("<h1>"+'I want to be like '+ studentsNames[0]+"</h1>")
// alert(studentsNames[0]);
// alert(studentsNames[1]);
// alert(studentsNames[2]);

// // takes in array and returns the lenght of the array, array.lenght

// function countArray(arrayGiven) {
//     alert(arrayGiven.lenght);


// }

// we have break and continue, break is use to cut arrays from the point stated while continue is used to remove the targetted 
// array
// var luckyNumbers=['Toyo', 'Tosin', 'Bright', 'Oyoma', 'Femi'];

// for (var i=0; i < luckyNumbers.length; i++){
//     // if(i == 0){
//     //     continue;
//     // }
//     if(luckyNumbers[i] == 'Bright'){
//         break;
//     }

//      document.write("My Classmates are " + luckyNumbers[i]+ "<br/>")

//     }


      // to join an array, you use arrayName.join("-") and a separator
    // arrayName.sort to arrange your array
    // // arrayName.pop to get the last of the array
    // array push is used to add to an array


    // alert(luckyNumbers.join ("_"));

    // alert(luckyNumbers.sort());

    // alert(luckyNumbers.pop());

    // var luckyNumbers=["Bright", "George"];
    // var con=prompt('What is your name?') 
    // luckyNumbers.push(con);  
    // for(var i=0; i < luckyNumbers.length; i++){

    //     alert(i)
    //      document.write('The new lucky person is: ' + luckyNumbers[i] + "<br/>" )   
    // }



// var fruits = [];

// var fruit1=prompt('What is your fruit1');
// // var fruit2=prompt('What is your fruit2');
// // var fruit3=prompt('What is your fruit3');

// //    fruits.push(fruit1);
// //    fruits.push(fruit2);
// //    fruits.push(fruit3
// );

//    document.write(fruits.sort());



// var cakeType=['Fruits', 'Sponge', 'Chocolate', 'Vanilla', 'redVelvet']
 
//  var x= 0

//  while(x < cakeType.length){
    
//        if(x == 2){
//             x++;
//           continue;
//        }


//         document.write("<h1>" + cakeType[x]+ "</h2>")
//         x++

//  }
  
 


 // var luckyNumbers=['Toyo', 'Tosin', 'Bright', 'Oyoma', 'Femi'];

// for (var i=0; i < luckyNumbers.length; i++){
//     // if(i == 0){
//     //     continue;
//     // }
//     if(luckyNumbers[i] == 'Bright'){
//         break;
//     }

//      document.write("My Classmates are " + luckyNumbers[i]+ "<br/>")

//     }











// for (var i=0; i < luckyNumbers.length; i++){
//     // if(i == 0){
//     //     continue;
//     // }
//     if(luckyNumbers[i] == 'Bright'){
//         break;
//     }

//      document.write("My Classmates are " + luckyNumbers[i]+ "<br/>")

//     }






// var luckyNumbers=[54, 76,23,79,98,11, 111];

// for(var i = 0; i < luckyNumbers.length; i++){

//     document.write("My lucky number is " + luckyNumbers[i]+ "<br/>")
// }












// function name(){
//     for var(h=1;  h<=5; h++){


//     }  


// // }
//          class excercise for document.getElementsByTagName
 var paras= document.getElementsByTagName("h1");
 // console.log(paras)


 var headingText = document.getElementsByTagName("h1");
 headingText[2].style.color="red";


 console.log(headingText[2].innerHTML);


var col= document.getElementsByTagName("p");


for(var i=0; i < col.length; i++ ){
      col[i].style.backgroundColor="red";
}
