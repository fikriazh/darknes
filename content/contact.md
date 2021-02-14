+++
title = "Contact"
+++

{{< rawhtml >}}

<span id="schedule"></span>

<style>

  .responsive-iframe {
  position: realtive;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 300px;
  border: none;
  border-radius: 10px;
}

.accordion {
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.4s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
}

.panel {
  display: none;
  overflow: hidden;
  border: thin solid;
  margin: 25px;
  width: 270px;
  border-radius: 10px;
}

.input {
  resize: none;
  width: 220px;
  height: 30px;
  border: thin solid;
  border-radius: 5px;
  text-align: center;
  opacity: 0.75;
}

.message {
  resize: none;
  width: 220px;
  height: 100px;
  border: thin solid;
  border-radius: 5px;
  opacity: 0.75;
}

select {
  padding: 5px;
  margin: 5px;
  opacity: 0.75;
  border: thin solid;
  border-radius: 5px;
  text-align-last:center;
}

.date {
  padding: 5px;
  margin: 5px;
  opacity: 0.75;
  border: thin solid;
  border-radius: 5px;
  text-align-last:center;
  height: 30px;
}

</style>

<div align="center">

<lottie-player onClick="window.open('https://calendar.google.com/calendar/embed?src=fikriazh%40gmail.com&ctz=Asia%2FJakarta');"  src="/lottie/contact.json"  background="transparent"  speed="0.5"  style="width: 200px; height: 200px; cursor: grab; margin-bottom: -30px"  loop  autoplay></lottie-player>
<span class="post-info">Touch to see schedule</span>

<p>Hey, as you arrived here, I assume we'll get to connect our energy, right?</p>

<div>
<iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3023469240125!2d110.4067709143761!3d-7.757723579079995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599c06dcbe05%3A0x6d8d95b17734ad62!2sJl.%20Nusa%20Indah%20No.44%2C%20Ngringin%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sen!2sid!4v1612567300984!5m2!1sen!2sid"></iframe>
</div>
Jl. Nusa Indah 44 Condongcatur - Yogyakarta

<br>
<br>

<p>Contact us directly</p>

<span>

  <button onclick="wa()" class="accordion">
    <i class="fab fa-whatsapp fa-2x"></i>
    <br />
    WhatsApp
  </button>
  
</span>

</br>

<p>Or fill our contact form</p>

<div align="Center">

  <button class="accordion">
  <i class="far fa-file-alt fa-2x"></i>
  <br />
      Contact Form
  </button>

  <div class="panel">
    
  <!-- method="POST" data-netlify="true" -->

  <form name="Hello" onsubmit="alert('Thanks! We have received your data')" action="/">
  <p>
    <label>Full Name
    <br>
    <input type="text" name="Name" required class="input" placeholder="Your name..."/></label>   
  </p>

  <p>
    <label>ID ( Phone / Mail )
    <br>
    <input type="text" name="ID" required class="input" placeholder="Or put session ID"/></label>
  </p>

  <label for="need">What's your needs?</label>
    <br />
    <select id="need" name="list" form="Hello" onchange="showDiv(this)">
      <option id="none" selected disabled hidden>Choose your need</option> 
      <option id="consultation">Consultation</option>
      <option id="therapy">Therapy</option>
      <option id="testimony">Testimony</option>
      <option id="hi">Just say hi...</option>
    </select>

 <div id="date_div" style="display: none;">
  <p>
  <label for="choose">Choose the date</label>
  <br>
  <input type="date" id="date_therapy" name="date_therapy" class="date">
  <br />
  <label for="need" class="post-info"><a href="#schedule">See schedule</a></label>
  </p>
  </div>

  <div id="akasha" style="display: none;">
  <p>
  <label for="choose">Choose the date</label>
  </p>
  </div>

  <p>
    <label>Message
    <br>
    <textarea name="Message" required class="message" ></textarea></label>
  </p>

  <p>
    <button type="submit">
      <i class="far fa-share-square"></i>
      &nbsp;
      Send
    </button>
  </p>

  </form>

</div>

</div>

<script>

// toggle date

function showDiv(elem){
      if(elem.value == 'Therapy'){
        document.getElementById('date_div').style.display = "block";
       } 
      else{ 
        document.getElementById('date_div').style.display = "none";
      }
      
    }

</script>

<script>

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

</script>

<script>

// whatsapp button

function wa() {
    var txt;
        if (confirm("You'll be directed to our WhatsApp")) {
        window.open("https://wa.link/do79yu");
        } else {
        txt = "";
        }
}

</script>

<script src="/fa.js" crossorigin="anonymous"> // fontawesome </script>

{{< /rawhtml >}}