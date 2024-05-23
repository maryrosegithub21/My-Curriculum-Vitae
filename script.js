
 
    var chatList = document.getElementById("chatList");
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
