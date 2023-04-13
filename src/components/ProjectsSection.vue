<template>
  <div class="pt-20 flex flex-1 h-50 justify-center align-middle">
    <div
      class="lg:w-3/4 min-h-full w-full h-auto p-2 my-4 lg:p-5 items-baseline mx-auto lg:relative flex justify-center align-middle flex-col"
    >
      <!-- <div
        class="b-3 bg-center bg-cover bg-no-repeat grid lg:grid-cols-2 grid-cols-1 w-[100%] gap-12"
      > -->
      <!-- <div class="lg:max:w-50 w-auto h-auto rounded-sm shadow-lg border-2">
          <img
            class="rounded-sm shadow-lg w-full h-full object-contain"
            src="../assets/projetcs/alphabet-app.png"
            alt="smile-afric"
          />
        </div> -->
      <CardComponent :images="images"></CardComponent>
      <!-- <div class="max:w-50 h-auto rounded-sm shadow-lg border-2 content-fit">
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
        </div> -->
      <!-- </div> -->
    </div>
  </div>
</template>
  
  <script>
import CardComponent from "./CardComponent.vue";

export default {
  name: "ProjectsSection",
  props: {
    msg: String,
  },
  data() {
    return {
      images: [
        {
          src: require("../assets/projects/alphabet-app.png"),
          alt: "Alphabet App",
          site_url: "https://buba-conteh.github.io/alphabets/",
          github: "https://github.com/Buba-Conteh/alphabets",
        },
        {
          src: require("../assets/projects/random-code-generator.png"),
          alt: "Iphone Calculator",
          site_url: "https://buba-conteh.github.io/random-quote/",
          github: "https://github.com/Buba-Conteh/random-quote",
        },
        {
          src: require("../assets/projects/Calculator-b.png"),
          alt: "Iphone Calculator",
          site_url: "https://buba-conteh.github.io/random-quote/",
          github: "https://github.com/Buba-Conteh/random-quote",
        },
        {
          src: require("../assets/projects/relaxation-app.png"),
          alt: "Relaxation App",
          site_url: "https://buba-conteh.github.io/relaxation-app/",
          github: "https://github.com/Buba-Conteh/relaxation-app",
        },
      ],
    };
  },
  components: {
    CardComponent,
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
  