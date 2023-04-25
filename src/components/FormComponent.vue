<template>
  <div class="form">
    <div
      v-if="message"
      class="p-4 my-2 w-fullopacity-100 rounded-lg"
      :class="alerColor"
    >
      {{ message }}
    </div>
    <form ref="form" action="" class="w-full bg-white p-8 border rounded-lg">
      <h2 class="font-['Philosopher'] text-[25px] text-left font-bold mb-3">
        Send Me A message 🚀
      </h2>
      <div class="form-group w-full">
        <input
          name="from_name"
          :value="inputFieldReset"
          type="text"
          placeholder="Fullname*"
          class="w-full leading-6 p-2 text-[20px] bg-gray-100 rounded-md"
          required
        />
        <div
          v-if="errors.includes('from_name')"
          class="text-red-400 text-left text-sm"
        >
          Fullname field is required
        </div>
      </div>
      <div class="my-4">
        <input
          name="email"
          :value="inputFieldReset"
          type="email"
          placeholder="Email*"
          class="w-full leading-6 p-2 text-[20px] bg-gray-100 rounded-md"
          required
        />
        <div
          v-if="errors.includes('email')"
          class="text-red-400 text-left text-sm"
        >
          Email field is required
        </div>
      </div>
      <div class="my-4">
        <input
          name="subject"
          :value="inputFieldReset"
          type="text"
          placeholder="Subject"
          class="w-full leading-6 p-2 text-[20px] my-4 bg-gray-100 rounded-md"
          required
        />
        <div
          v-if="errors.includes('subject')"
          class="text-red-400 text-left text-sm"
        >
          Subject field is required
        </div>
      </div>
      <textarea
        name="message"
        required
        :value="inputFieldReset"
        id=""
        cols="40"
        rows="5"
        placeholder="Message*"
        class="w-full leading-6 p-2 text-[20px] my-4 bg-gray-100 rounded-md"
      ></textarea>
      <div
        ref="submitContainer"
        class="flex justify-start transition duration-[1000ms]"
      >
        <button
          type="submit"
          @click.prevent="sendMail"
          class="px-5 py-4 bg-[rgb(44,62,80)] text-white shadow-md rounded-md text-[15px] flex"
        >
          <div>Send Message</div>
          <img
            v-if="status"
            src="../assets/loader.svg"
            alt="Sending Message"
            width="25"
            class="mx-2"
          />
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
      status: false,
      alerColor: "bg-green-300",
      message: "",
      errors: [],
    };
  },

  mounted() {
    this.form = this.$refs.form;
  },

  methods: {
    validate() {
      this.status = true;
      this.errors = [];
      if (!this.form["from_name"].value) {
        this.errors.push("from_name");
      }
      if (!this.form["email"].value) {
        this.errors.push("email");
      }
      if (!this.form["message"].value) {
        this.errors.push("message");
      }
      if (!this.form["subject"].value) {
        this.errors.push("subject");
      }
      return this.errors;
    },
    sendMail() {
      if (this.validate().length) {
        this.$refs.submitContainer.classList.toggle("justify-end");
        this.status = false;
        // this.errors = [];
        return;
      }
      (this.status = true),
        emailjs
          .sendForm(
            this.emailjsServiceId,
            this.emailjsTemplateId,
            this.form,
            this.emailjsUserId
          )
          .iter.then(() => {
            this.message = "Message sent!, Thanks. I will get back to you ";
            this.status = false;
            this.alerColor = "bg-green-300";
            this.inputFieldReset = "";
          })
          .catch(() => {
            this.message = "Message not sent!";
            this.status = false;
            this.alerColor = "bg-red-300";
          });
    },
  },
};
</script>
  