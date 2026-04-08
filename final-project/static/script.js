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
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

function showForm(type, date) {
    document.getElementById('formType').value = type;
    document.getElementById('formDate').value = date;
    document.getElementById('purchaseForm').style.display = 'block';
    ticketCost();
}

function ticketCost() {
    var prices = { 'General': 18, 'Student': 18, 'Member': 18 };
    var type = document.getElementById('formType').value;
    var quantity = parseInt(document.getElementById('formQty').value) || 0;
    var total = (prices[type] || 0) * quantity;
    document.getElementById('formTotal').value = '$' + total;
}

if (typeof $ !== 'undefined') {
  $("#readLess").click(function(){
    $("#longIntro").hide();
    $("#readLess").hide();
    $("#readMore").show();
  });

  $("#readMore").click(function(){
    $("#longIntro").show();
    $("#readLess").show();
    $("#readMore").hide();
  });
}

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "nav_bar") {
        x.className += " responsive";
    } else {
        x.className = "nav_bar";
    }
}

// Map comes from Leaflet: https://leafletjs.com/examples/quick-start/

if(document.getElementById('map')) {
    var map = L.map('map', {
        dragging: false,
        touchZoom: false,
        scrollWheelZoom: false,
        doubleClickZoom: false,
        boxZoom: false,
        keyboard: false,
        zoomControl: false
    }).setView([40.443690, -79.948976], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}


function validateForm() {
    var name = document.getElementById('formName').value;
    var email = document.getElementById('formEmail').value;
    var zip = document.getElementById('formZip').value;
    var quantity = document.getElementById('formQty').value;
    var total = document.getElementById('formTotal').value;
    
    if (!name || !email || !zip || !quantity || !total) {
        alert('Please fill all fields');
        return false;
    }

    if(!(zip.length == 5 && typeof zip === 'string' && typeof name === 'string' && typeof email === 'string' && !isNaN(parseInt(quantity)) && email.includes('@') && email.includes('.'))) {
        alert('Please fill all fields with valid information');
        return false;
    }
    return true;
}

// The slideshow container before comes from a W3Schools example: https://www.w3schools.com/howto/howto_js_slideshow.asp

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (slides.length === 0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

var slideIndex = 1;
showSlides(slideIndex);