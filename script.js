// ======= For Chat Form ====== //
    const chatList = document.getElementById("chatList");    
    const chatDiv = document.getElementById("chat-div");   
    const chat = document.querySelector("input");
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

    // ===== For Lets Chat Button
    function togglemenu() {
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
function chatContact(){
chatSpan.textContent = (contact);
}
function chatEmail(){
  chatSpan.textContent = (email);
}

// ============ Calendar Booking ======== //
const calendar = document.getElementById("calendarBook");
calendar.style.height ="0";
function chatBook(){
  if (calendar.style.height === "0px")
    {
      calendar.style.height = "280px";
      calendar.style.width = "100%";
      chatList.style.maxHeight = "0px";
    }
    else
    {
      calendar.style.height = "0px";
    }
}
//  ======== Reply Condition to Virtual Chat ==== //

function chatInquiry(){
  if (chat.textContent = " "){
    // chatList.style.maxHeight = "250px";
    // chatList.style.maxWidth = "50%";
    chatSpan.textContent = "Please select above";

  } else {
    chatSpan.textContent = "Please book appointment";
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
   if (count > slides.length) {slideIndex = 1}    
   if (count < 1) {slideIndex = slides.length}
   for (i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
   }
   for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
   }
   slides[slideIndex-1].style.display = "block";  
   dots[slideIndex-1].className += " active";
 }





// console.log (event.target.value);
// chat.addEventListener("input", chatInquiry);
// 
// For Auto Response

// chat.addEventListener("input", chatResponse);

// function chatResponse(){
//   if (chatSpan.textContent = (event.target.value) ){
//     // chatList.style.maxHeight = "250px";
//     // chatList.style.maxWidth = "50%";
//     chatSpan.textContent = "How Can I help you?";

//   } else {
    
//   }




    