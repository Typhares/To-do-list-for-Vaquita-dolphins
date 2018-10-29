'use strict';
// ***REFACTOR USING THINKFUL REQUIREMENTS 
//  *delete button
//  *submit button
// ***check out todos more elegant than lines 9-25
$("li").click(function() {
    $(this).toggleClass("completed");
});

//***User clicks on one item on the List\
//***checks items by using conditional statement
// $("li").click(function(){
//     // if the li is gray
//     if ($(this).css("color") === "rgb(128, 128, 128)" ) {
//     // turn it back to black
//         // $(this).css("color", "black");
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//         });
//     }
//     else {
//         $(this).css({
//             color: "gray",
//             textDecoration: "line-through"
//         });
//     }
// });

//***delete the to-do
//***listen for a click on span X 
$("span").click(function(event){
    // alert("clicked on a span");
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //stops event from bubbling up to other elements
    event.stopPropagation();
});

//**** add an event listener that fires when user hits 'enter' key*/
//*** */
    $("input[type='text']").keypress(function(event) { 
        if(event.which === 13) {
        console.log("enter"); 
        // } else {
        //     //do something
      }
        
});
// $("ul").click(function() {
//     alert("clicked on a ul");
// });

// $("#container").click(function() {
//     alert("clicked on a container");
// });

// $("body").click(function() {
//     alert("clicked on a body");
// });