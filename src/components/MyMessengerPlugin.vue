<template>
  <div>
    <div id="fb-root"></div>
    <div id="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>
  
  <script>
// import "https://connect.facebook.net/en_US/sdk.js";

export default {
  mounted() {
    var chatbox = document.getElementById("fb-customer-chat");
    chatbox.setAttribute("page_id", "2348044188602402");
    chatbox.setAttribute("attribution", "biz_inbox");

    window.fbAsyncInit = function () {
      this.FB.init({
        xfbml: true,
        version: "v16.0",
      });
    };
    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  },
};
</script>
  