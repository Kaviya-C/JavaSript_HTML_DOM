// onclick---- if we click something have to perform

// getElementById ---- get the element by id

// radio ---- declared variable .checked
//eg: name.checked===true

// dropdown box --- declared variable.options[declared variable.selectedIndex]
// name.options[name.selectedIndex].value
// whatever the value given in the html element tag that will be displayed in this name.options[name.selectedIndex]

//getElementById === this is unique
// we can use id only one html elements we cannot repeat

// getElementsByClassName  == this is not unique
// many html elements having same classname

//getElementByTagName() ---- select some group of the html tags

//getElementsByclassName()   -- select class of html elements

//  ----------------------events --------------
//onmouseover--- when we put the cursor over there it change into another image
// using document.getElementById('image').src="image.png";

//onmouseout
//if we not place the cursor over there then it comes to old image so set old image
// document.getElementById('image').src=old.png

// ------------form validation-------------
// we can validate the form by using onsubmit attribute
// when we click the form submission if name and password is not empty then only it redirect to next page for that purpose we can use this onsubmit instead of onclick event in the button

// action attribute meant for redirection
// if the onsubmit is success then only it should go to next page
// for this purpose call the method with return statement
// onsubmit=return validation(){}
// in validation function return  true or false
// depending upon true or false it will redirect into next page or not this will decided

//--------------------------Regex Pattern-------------

// regex having predefined method is test
// from that text we have to pass the value of username inside the test parenthesis

// regex=/E00/
// above is the pattern
// check this pattern match or not by using regex.test(username);
// if it is matched then perform some steps
// here test is inbuilt method

// i mean case insensitive -- letter casee caps small should be no problem
// g mean global -- wherever match there it allowed

// [asg]oole--- compulsory should be first letter as a or s or g and continue with oole only no other character is allowed

// ^ if it is inside the square bracket mean it act as not
//if  ^ it is outside it act as a start with
// $ this indicates ends with..

//   \d-- decimal values
//    \w  -- word a-z A-Z 0-9 &  _ symbol are allowed
//     \s  spaces and tabs whitespace
//     \t   tabs only

// email verification
//  (^[a-z 0-9\.-]+)@([a-z0-9]+).([a-z]{2,8})$/

//------------ timing function--------------

/*
setTimeout---> setting the time 2 input need one is function another is millisecond it does not repeat once execute then it is freezed...

clearTimeout -- it needs id to clear the timeout before the setTimeout

setInterval -- it repeat after a period of time  continously --
clearInterval -- this will pause temporarily again start mean it start from last finished values 
*/

//-------------------------------------fade in fade out--------

/*

setinterval is used to fade in and fade out
set the image opacity as 1
then call fade out--- it should be show -- if (opacity<0) add 0.1 to visible

fade in mean opacity is 1 decrement to hide 
so 0.1 decremented 

first get the image using id ;use that image variable below
opacity =Number(window.getComputedStyle(image).getPropertyValue('opacity'));


*/
