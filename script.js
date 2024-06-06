// ======= For Chat Form ====== //
// ===== connection / calling id to html ===== //
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
        chatSpan.textContent = " ";
        chat.value = " ";
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
      calendar.style.height = "700px";
      calendar.style.maxWidth = "1000px";
      chatList.style.maxHeight = "0px";
      chatSpan.textContent = "";
    }
    else
    {
      calendar.style.height = "0px";
      chatSpan.textContent = "";
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
// ===== Virtual chat possible question ======= //
// =========== Keyboard enter ======== ////
chat.addEventListener("keypress", function (event) {
  // The parameter event is of the type KeyboardEvent
  if(event.key === 'Enter'){
  chatInquiry(event);
  chat.value = " ";
  }
});
// ==== conditional statement for chat virtual ===== ////
 function chatInquiry(event){
  event.preventDefault();
  
  // chatInquiry.event.key === 'Enter'
// if(event.key === 'Enter'){
  const NAME = chat.value;
      const matches = NAME.match(/\b[^\d\s]+\b/g);
      if (matches && matches.length >= 2 ) {
        chatSpan.textContent = "Please select an option or typing your inquiry in english";  
        // Two or more words
      } else if (matches && matches.length >= 2 || matches =="hi") {
            // Two or more words
            chatSpan.textContent = "Hello, How can I help you?";   
     } else if (matches && matches.length >= 2 || matches =="hello") {
            // Two or more words
            chatSpan.textContent = "Hi, Im Mary. How can I help you?";  
     } else if (matches && matches.length >= 2 || matches =="how much is the webpage") {
            // Two or more words
            chatSpan.textContent = "Its all negotiable, Please book an appointment for more information";  
     } else if (matches && matches.length >= 2 || matches == "are you a human") {
            // Two or more words
            chatSpan.textContent = "No, Im Virtual Assistant";                 
     } else if (matches && matches.length >= 2 || matches == "are you a bot") {
            // Two or more words
            chatSpan.textContent = "Yes, Please book an appointment to talk to human";                 
    } else if (matches && matches.length >= 2 || matches == "how much" ) {
      chatSpan.textContent = "Its all negotiable, Please book an appointment for more information";  
    } else {
          // Not enough words
          chatSpan.textContent = "I don't get what you mean. Please select an option or typing in english";
          return false;
      }
    }
  // }
// });
