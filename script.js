// ======= For Chat Form ====== //
// ===== connection to html ===== //
    const chatList = document.getElementById("chatList");    
    const chatDiv = document.getElementById("chat-div");   
    const chat = document.getElementById("input");
    const chatSpan = document.getElementById("inquiry");
    const contact = "My phone number is (027)210-8200";
    const email = "My email address is maryroseantoniowork21@gmail.com";
// ===== form chat virtual changes ==== //
    chatList.style.maxHeight = "0px";
    chatList.style.margin = "0px";
    chatList.style.padding = "0px";
    chatList.style.display ="flex";
    chatList.style.justifyContent = "end";
    chatList.style.backgroundColor="white";

    // ===== For Lets Chat Button ===== //
    function togglemenu(event) {
      event.preventDefault();
      if(chatList.style.maxHeight === "0px") 
      {
        chatList.style.maxHeight = "280px";
        chatList.style.maxWidth = "100%";
        chatDiv.style.height = "420px";
        calendar.style.height = "0px";
        chatSpan.textContent = "";
      }
      else 
      {
        chatList.style.maxHeight = "0px";
      }
    }
// ========== for chat virtual function =========== //
function chatContact(event){
  event.preventDefault();
chatSpan.textContent = (contact);
}
function chatEmail(event){
  event.preventDefault();
  chatSpan.textContent = (email);
}

// ============ Calendar Booking ======== //
const calendar = document.getElementById("calendarBook");
calendar.style.height ="0";
function chatBook(event){
  event.preventDefault();
  if (calendar.style.height === "0px")
    {
      calendar.style.height = "280px";
      calendar.style.width = "100%";
      chatList.style.maxHeight = "0px";
      chatSpan.textContent = "";
    }
    else
    {
      calendar.style.height = "0px";
      chatSpan.textContent = "";
    }
}
//  ======== Reply Condition to Virtual Chat ==== //
function chatInquiry(event) {
  event.preventDefault();
  const ans = chat.value;
  if (ans === "hi") {
    chatSpan.textContent =
      "Hello, How can I help you?";
  } else if (ans === "hello") {
    chatSpan.textContent =
      "Hi, How can I help you?";
  } else if (ans === "how much") {
    chatSpan.textContent =
      "Its all Negotiable. Please book appointment for more information";
  } else if (ans === " ") {
    chatSpan.textContent =
      "Please select an option or typing your inquiry in english";
  } else if (ans === "who are you?") {
    chatSpan.textContent =
      "I'm Mary bot.Please select an option or typing your inquiry in english";
  } else if (ans === "how are you?") {
    chatSpan.textContent =
      "I'm Fine.Please select an option or typing your inquiry in english";
  } else if (ans === "are you human") {
    chatSpan.textContent =
      "No, I'm Virtual Assisatant.Please select an option or typing your inquiry in english";
  } else if (ans === "are you bot") {
    chatSpan.textContent =
      "Yes, I'm Virtual Assisatant.Please select an option or typing your inquiry in english";
  } else {
    chatSpan.textContent = "I don't get what you mean. Please select an option";
  }
}

 // ======== Portfolio slideshow ======== //
 let slideIndex = 1;
 showSlides(slideIndex); 
 function plusSlides(count) {
   showSlides(slideIndex += count);
 }
 
 function currentSlide(count) {
   showSlides(slideIndex = count);
 }
 
 function showSlides(count) {
   let i;
   let slides = document.getElementsByClassName("mySlides");
   let dots = document.getElementsByClassName("dot");
   if (count > slides.length) {
    slideIndex = 1
  }    
   if (count < 1) {
    slideIndex = slides.length
  }
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }
