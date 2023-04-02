<template>
  <div class="pt-4 flex flex-col flex-1 h-50 justify-center">
    <div
      class="
        justify-center
        h-auto
        p-5
        items-baseline
        mx-auto
        w-4/5
        lg:w-3/6
        relative
      "
    >
      <div class="b-3 bg-center bg-cover bg-no-repeat">
        <p class="leading-10 lg:text-lg font-['Philosopher']">
          I am Buba Conteh, a software developer with over four years of
          experience in the field and with a bachelors degree in Computer
          Science. I have built small and medium size application. My primary
          skills are php, javascript, vue, laravel and database (backend) and
          light skills in pyton, and java.
        </p>
        <p class="leading-10 lg:text-lg font-['Philosopher']">
          I have built small and medium size application. My primary skills are
          php, javascript, vue, laravel and database (backend) and light skills
          in pyton, and java.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutSection",
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
