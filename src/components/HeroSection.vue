<template>
  <div
    class="lg:pt-4 lg:flex lg:flex-col flex-1 lg:h-50 justify-center box-border"
  >
    <div
      class="
        lg:flex
        justify-center
        p-5
        items-baseline
        mx-auto
        lg:w-3/6 lg:relative
        grid grid-cols-2
        gap-y-5
        box-border
        pt-10
      "
    >
      <div
        class="
          b-3
          bg-slate-200
          rounded-full
          bg-center bg-cover bg-no-repeat
          m-auto
          p-1
          bg-gradient-to-r
          col-span-2
        "
      >
        <img
          src="../assets/profile_300x300.jpg"
          class="
            object-contain
            rounded-full
            bottom-2
            border-slate-400
            bg-gradient-to-t
            from-orange-300
            w-72
            h-72
          "
          alt="my profile"
        />
      </div>
      <!-- <font-awesome-icon icon="fa-brands fa-javascript" class="absolute" /> -->
      <font-awesome-icon
        icon="fa-brands fa-php"
        class="
          lg:absolute lg:fa-4x
          md:text-text-base
          h-20
          w-20
          m-auto
          lg:-top-[18%] lg:block
        "
      />
      <font-awesome-icon
        icon="fa-brands fa-laravel"
        class="
          lg:absolute lg:fa-4x
          left-[25%]
          -top-[12%]
          sm:text-text-base
          lg:block
          m-auto
          h-20
          w-20
        "
      />
      <font-awesome-icon
        icon="fa-solid fa-database"
        class="
          lg:absolute lg:fa-4x
          left-[12%]
          top-[20%]
          sm:text-text-base
          lg:block
          m-auto
          h-20
          w-20
        "
      />

      <font-awesome-icon
        icon="fa-brands fa-square-js"
        class="
          lg:absolute lg:fa-4x
          r
          m-auto
          right-[25%]
          -top-[12%]
          md:block
          h-20
          w-20
        "
      />
      <font-awesome-icon
        icon="fa-brands fa-vuejs"
        class="
          lg:absolute lg:fa-4x
          m-auto
          right-[12%]
          top-[20%]
          md:block
          h-20
          w-20
          col-span-2
        "
      />
      <!-- <font-awesome-icon icon="fa-brands fa-php" class="absolute" /> -->
    </div>
    <div class="mx-auto text-3xl lg:text-4xl font-black text-center">
      <h1 class="font-['Philosopher']">
        Hi, I'am Buba Conteh, A Software Developer
      </h1>
      <!-- <div class="flex justify-center mt-5">
        <div>
          <img src="../assets/github-ar21.svg" class="mx-5" width="70" alt="" />
        </div>
        <div>
          <img
            src="../assets/linkedin-ar21.svg"
            class="mx-5"
            width="70"
            alt=""
          />
        </div>
        <div>
          <img
            src="../assets/twitter-ar21.svg"
            class="mx-5"
            width="70"
            alt=""
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "HeroSection",
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
