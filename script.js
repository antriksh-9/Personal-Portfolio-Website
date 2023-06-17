// ------------------about click function-------------
let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// -------------small screen sidemenu----------------
let sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


// -----------google-sheets(contact form)-------------
  const scriptURL = 'https://script.google.com/macros/s/AKfycbytD7uLVPxyt0SrGLJf2aXqKdAa1HwvVjRinICGJg6A7CAjReUmd10XkBYupWgLx58OVQ/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully!!"
        setTimeout(function(){
            msg.innerHTML=""
        },5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })