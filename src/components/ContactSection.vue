<template>
  <div class="pt-4 flex flex-col flex-1 h-50 justify-center">
    <div
      class="justify-center h-auto p-5 items-baseline mx-auto w-4/5 lg:w-3/4 relative"
    >
      <div class="b-3 bg-center bg-cover bg-no-repeat grid grid-cols-2">
        <div class="text flex justify-start items-center flex-col p-7">
          <div class="w-full">
            <h2
              class="text-[50px] text-left font-bold font-['Philosopher'] mb-6 leading-[1.3]"
            >
              Let's Chat,<br />
              Tell Me About Your<br />
              Projects.
            </h2>
            <p class="text-left">Let's create something together</p>
          </div>
          <div class="w-full">
            <div
              class="p-3 shadow-md bg-white w-[70%] grid grid-cols-4 rounded-md"
            >
              <div>
                <font-awesome-icon
                  icon="fa-solid fa-envelope"
                  class="w-6 h-6 project-link p-3 rounded-md bg-slate-100"
                />
              </div>
              <div class="col-span-3">
                <div class="text-left">
                  Mail me at <br />
                  <a href="#" class="text-blue-400">contehbuba21@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form">
          <form action="" class="w-full bg-white p-8 border rounded-lg">
            <h2
              class="font-['Philosopher'] text-[25px] text-left font-bold mb-3"
            >
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
                class="px-5 py-4 bg-[rgb(44,62,80)] text-white shadow-md rounded-md text-[15px]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactSection",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile-image {
  background-image: url("../assets/profile.jpg");
}
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
