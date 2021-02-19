// toggle date
function showDiv(elem){
      if(elem.value == 'Therapy'){
        document.getElementById('date_div').style.display = "block";
       } 
      else{ 
        document.getElementById('date_div').style.display = "none";
      }
      
    }

// form toggle
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// whatsapp button
function wa() {
    var txt;
        if (confirm("You'll be directed to our WhatsApp")) {
        window.open("https://wa.link/do79yu");
        } else {
        txt = "";
        }
}