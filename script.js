
 
    const chatList = document.getElementById("chatList");
    chatList.style.maxHeight = "0px";
    function togglemenu() {
      if(chatList.style.maxHeight === "0px") 
      {
        chatList.style.maxHeight = "180px";
      }
      else 
      {
        chatList.style.maxHeight = "0px";
      }
    }
// ========= SLIDE SHOW PHOTOS ====== 
    // const portfolioCountToDisplay = document.getElementById("slideshow-container");
    // portfolioCountToDisplay.style.maxHeight = "0px";
    // function portfolioClick (){
    // if(portfolioCountToDisplay.style.maxHeight === "0px") 
    //   {

    //     portfolioCountToDisplay.style.maxHeight = "500px";
        

    //   }
    //   else 
    //   {
    //     portfolioCountToDisplay.style.maxHeight = "0px";
    //   }

    // }

    // ======== Portfolio slideshow ========
    let slideIndex = 1;
    showSlides(slideIndex);
    
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
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
  





// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

    // Portfolio Right
    // const RightPortfolioButton = document.getElementById ("portfolioRight")
    // RightPortfolioButton.style.display = "none";
//     let count = 1;
//     rightScroll (count);
//     function plusSlides(n) {
//       rightScroll(count += n);
//     }
    
//     function currentSlide(n) {
//       rightScroll(count = n);
//     }
//    function rightScroll(n){
//     // img.style.display ="none";
//     let img = document.getElementsByClassName("mySlides");
//     if (n > img.length){count = 1}
//     if (n < 1){count = img.length}
//     for (let i = 0; i < img.length ; i++){
//       img[i].style.display = "none";
//       // console.log(img);
//   }
//   img[count-1].style.display = "block";
// }
  

//   const img1 = document.getElementById('portfolioImages1');
//   const img2 = document.getElementById('portfolioImages2');
//   const img3 = document.getElementById('portfolioImages3');
//   const img4 = document.getElementById('portfolioImages4');
  
//   if (img1.style.display === "block") {
//     img2.style.display = "none";
//     img3.style.display = "none";
//     img4.style.display = "none";
//   } else if (img2.style.display === "block") {
//     img1.style.display = "none";
//     img3.style.display = "none";
//     img4.style.display = "none";
//   } else if (img3.style.display === "block") {
//     img1.style.display = "none";
//     img2.style.display = "none";
//     img4.style.display = "none";  
//   } else if (img4.style.display === "block") {
//     img1.style.display = "none";
//     img2.style.display = "none";
//     img3.style.display = "none";  
//   } else {
//     img1.style.display = "none";
//     img2.style.display = "none";
//     img3.style.display = "none";
//     img4.style.display = "none";
//   }
// }

        // if (document.getElementById("portfolioImages1").style.visibility = "hidden"){
          // document.getElementById("portfolioImages1").style.visibility = "visible"
          // document.getElementById("portfolioImages2").style.visibility = "hidden"
          // document.getElementById("portfolioImages3").style.visibility = "hidden"
          // document.getElementById("portfolioImages4").style.visibility = "hidden"
        // } else {
          // document.getElementById("portfolioImages1").style.visibility = "hidden"
          // document.getElementById("portfolioImages2").style.visibility = "hidden"
          // document.getElementById("portfolioImages3").style.visibility = "hidden"
          // document.getElementById("portfolioImages4").style.visibility = "hidden"
        // }
    // }

    