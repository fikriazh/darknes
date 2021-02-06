+++
aliases = ["about-us", "about-hugo", "contact"]
date = 2014-04-09T00:00:00Z
title = ""
[author]
name = "Hugo Authors"

+++

{{< rawhtml >}}

<script>

function myFunction() {
    var txt;
        if (confirm("You'll be directed to WhatsApp")) {
        window.open("https://wa.link/do79yu");
        } else {
        txt = "";
        }
}

</script>

<style>

input {
    color:#a9a9b3;
    text-align:center;
    border:none;
    border-bottom: 2px solid #a9a9b3;
    background-color: transparent;
    resize: none;
    outline: none;
}

textarea { 
    color:#a9a9b3;
    text-align:center;
    border:none;
    border-bottom: 2px solid #a9a9b3;
    background-color: transparent;
    height:60px;
    resize: none;
    outline: none;
}

select { 
    appearance: none;
    color:#a9a9b3;
    text-align:center;
    text-align-last:center;
    -moz-text-align-last: center;
    border:none;
    border-bottom: 2px solid #a9a9b3;
    background-color: transparent;
    resize: none;
    outline: none;
}

.responsive-iframe {
  position: realtive;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 90%;
  height: 300px;
  border: none;

</style>

<div align="center">

<lottie-player src="/contact.json"  background="transparent"  speed="0.5"  style="width: 200px; height: 200px;"  loop  autoplay></lottie-player>

<p>Hey, as you arrived here, I assume we'll get to connect our energy, right?

<p>So here's our locations, wanna have some tea together?</p>

<div>
<iframe class="responsive-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3023469240125!2d110.4067709143761!3d-7.757723579079995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a599c06dcbe05%3A0x6d8d95b17734ad62!2sJl.%20Nusa%20Indah%20No.44%2C%20Ngringin%2C%20Condongcatur%2C%20Kec.%20Depok%2C%20Kabupaten%20Sleman%2C%20Daerah%20Istimewa%20Yogyakarta%2055281!5e0!3m2!1sen!2sid!4v1612567300984!5m2!1sen!2sid"></iframe>
</div>

<p>Or you gonna directly connect to us?</p>
<p>
<button onclick="myFunction()">Let's talk deeper !</button>
</p>

<br>

You can also write at below here<br>    
Be free to tell us your ideas...

<br>


<form name="Hello" method="POST" data-netlify="true" action="/thank">
    <p><label><input type="text" name="name" placeholder="Name" required /></label></p>
    <p><input type="text" name="phone" placeholder="Phone or Email" required /></label></p>
    <p><label for="need">What's your needs?</label><br>
        <select name="need" id="need" clas="cmb">
            <option value="Chat">Just some talks</option>
            <option value="Consultation">Consultation</option>
            <option value="Therapy">Therapy</option>
            <option value="Testimonial">Testimonial</option>
        </select>
    </p>
    <p><textarea name="message" placeholder="Message" required></textarea></label></p>
    <p><button type="submit">Let us know !</button></p>
</form>
<br>
<p>We portect your privacy, stored on safe place</p>
</div>

 {{< /rawhtml >}}
