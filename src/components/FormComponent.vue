<template>
  <div class="form">
    <form ref="form" action="" class="w-full bg-white p-8 border rounded-lg">
      <h2 class="font-['Philosopher'] text-[25px] text-left font-bold mb-3">
        Send Me A message 🚀
      </h2>
      <div class="form-group w-full">
        <input
          type="text"
          placeholder="Fullname*"
          class="w-full leading-6 p-2 text-[20px] bg-gray-100 rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email*"
          class="w-full leading-6 p-2 text-[20px] my-4 bg-gray-100 rounded-md"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Subject"
          class="w-full leading-6 p-2 text-[20px] my-4 bg-gray-100 rounded-md"
        />
      </div>
      <textarea
        name=""
        id=""
        cols="40"
        rows="5"
        placeholder="Message*"
        class="w-full leading-6 p-2 text-[20px] my-4 bg-gray-100 rounded-md"
      ></textarea>
      <div class="flex justify-start">
        <button
          @click.prevent="sendMail"
          class="px-5 py-4 bg-[rgb(44,62,80)] text-white shadow-md rounded-md text-[15px]"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
  <!-- <form > -->
  <!-- form fields -->
  <!-- <button @click.prevent="sendMail">Send</button> -->
  <!-- </form> -->
</template>
  
  <script>
import emailjs from "emailjs-com";

export default {
  name: "FormComponent",
  data() {
    return {
      form: null,
      inputFieldReset: null,
      emailjsServiceId: process.env.VUE_APP_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
      emailjsUserId: process.env.VUE_APP_EMAILJS_USER_ID,
    };
  },

  mounted() {
    this.form = this.$refs.form;
  },

  methods: {
    sendMail() {
      emailjs
        .sendForm(
          this.emailjsServiceId,
          this.emailjsTemplateId,
          this.form,
          this.emailjsUserId
        )
        .then(() => {
          alert("Message sent!");
          this.inputFieldReset = "";
        })
        .catch((error) => {
          alert("Message not sent", error);
        });
    },
  },
};
</script>
  