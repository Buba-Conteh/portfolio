<template>
  <div>
    <div id="fb-root"></div>

    <div ref="fb-customer-chat" class="fb-customerchat"></div>
  </div>
</template>
<script>
export default {
  name: "FacebookMessange",
  mounted() {
    var chatbox = $refs["fb-customer-chat"];
    console.log(chatbox, "come");
    chatbox.setAttribute("page_id", "2348044188602402");
    chatbox.setAttribute("attribution", "biz_inbox");
  },
};
</script>
<script>
// window.fbAsyncInit = function () {
//   FB.init({
//     xfbml: true,
//     version: "v16.0",
//   });
// };

// (function (d, s, id) {
//   var js,
//     fjs = d.getElementsByTagName(s)[0];
//   if (d.getElementById(id)) return;
//   js = d.createElement(s);
//   js.id = id;
//   js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
//   fjs.parentNode.insertBefore(js, fjs);
// })(document, "script", "facebook-jssdk");
</script>