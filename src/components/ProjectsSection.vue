<template>
  <div class="pt-4 flex flex-col flex-1 h-50 justify-center">
    <div
      class="
        flex
        justify-center
        h-auto
        p-5
        items-baseline
        mx-auto
        lg:w-3/6
        relative
      "
    >
      <div
        class="
          b-3
          bg-center bg-cover bg-no-repeat
          grid
          lg:grid-cols-2
          grid-cols-1
          w-[100%]
          gap-12
        "
      >
        <div class="lg:max:w-50 w-auto h-auto rounded-sm shadow-lg border-2">
          <img
            class="rounded-sm shadow-lg w-full h-full object-contain"
            src="../assets/Home-Smiling-Coast-Tourism.png"
            alt="smile-afric"
          />
        </div>
        <div class="max:w-50 h-auto rounded-sm shadow-lg border-2">
          <img
            class="rounded-sm shadow-lg w-full h-full object-cover"
            src="../assets/boutique.png"
            alt="smile-afric"
          />
        </div>
        <div class="max:w-50 h-auto rounded-sm shadow-lg border-2 content-fit">
          <img
            class="rounded-sm shadow-lg object-cover w-full h-full"
            src="../assets/Home-Smiling-Coast-Tourism.png"
            alt="smile-afric"
          />
        </div>
        <div class="max:w-50 h-auto rounded-sm shadow-lg border-2">
          <img
            class="rounded-sm shadow-lg object-cover w-full h-full"
            src="../assets/Home-Smiling-Coast-Tourism.png"
            alt="smile-afric"
          />
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "ProjectsSection",
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
  