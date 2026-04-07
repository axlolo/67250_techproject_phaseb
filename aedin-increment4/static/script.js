var x = 5
var y = 7

var z = x + y

console.log(z)

var A = "Hello "
var B = "world!"

var C = A + B

console.log(C)

function sumnPrint(x1, x2) {
    var sum = x1 + x2
    console.log(sum)
}
sumnPrint(x, y)
sumnPrint(A, B)

if (C.length > z) {
    if (C.length < z) {
        console.log(z)
    }
    console.log(C)
} else {
    console.log("good job!")
}

L1 = ["Watermelon","Pineapple","Pear","Banana"];
L2 = ["Apple","Banana","Kiwi","Orange"];

//function findTheBanana(a){
//    for (i = 0; i < a.length; i++) {
//        if (a[i] == "Banana") {
//            alert("Banana found");
//        }
//    }
//}

//function findTheBanana(a){
//    for(each of a){
//        if (each == "Banana") {
//            alert("Banana found");
//        }
//    }
//}

//findTheBanana(L1)
//findTheBanana(L2)

var now = new Date()
var hour = now.getHours()

function greeting(x){
    var el = document.getElementById('greeting');
    if (!el) return;
    if (x < 5 || x >= 20){
        el.innerHTML = "Good night"
    } else if (x < 12) {
        el.innerHTML = "Good morning"
    } else if (x < 18) {
        el.innerHTML = "Good afternoon"
    } else {
        el.innerHTML = "Good evening"
    }
}
greeting(hour);

function addYear(){
    document.getElementById('copyYear').innerHTML = new Date().getFullYear();
}

function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav li a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

function showForm(type, date) {
    document.getElementById('formType').value = type;
    document.getElementById('formDate').value = date;
    document.getElementById('purchaseForm').style.display = 'block';
}

 // When the "Read Less" button is clicked
 $("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });
