<template>
  <div
    class="
      w-full
      lg:h-screen
      h-auto
      p-2
      pt-10
      flex flex-col
      justify-center
      relative
      box-border
    "
  >
    <font-awesome-icon
      icon="fa-solid fa-chevron-right"
      class="absolute right-24 fa-4x cursor-pointer hidden md:block"
      @click="chevronRight('slide-fade')"
    />
    <font-awesome-icon
      icon="fa-solid fa-chevron-left"
      class="absolute left-24 fa-4x cursor-pointer hidden md:block"
      @click="chevronLeft('slide-left')"
    />
    <Transition :name="chevonPosition">
      <template v-if="section == 'hero'">
        <HeroSection> </HeroSection>
      </template>

      <template v-else-if="section == 'about'">
        <AboutSection> </AboutSection>
      </template>
      <template v-else-if="section == 'projects'">
        <ProjectsSection> </ProjectsSection>
      </template>
    </Transition>

    <div class="flex justify-center mt-5">
      <div>
        <a href="https://buba-conteh.github.io/alphabets/" target="_blank">
          <img src="../assets/github-ar21.svg" class="mx-5" width="70" alt="" />
        </a>
      </div>
      <div>
        <img src="../assets/linkedin-ar21.svg" class="mx-5" width="70" alt="" />
      </div>
      <div>
        <img src="../assets/twitter-ar21.svg" class="mx-5" width="70" alt="" />
      </div>
    </div>
    <footer class="pt-4 border-box">
      <ul
        class="
          flex
          justify-around
          uppercaser
          w-2/6
          align-cenetr
          mx-auto
          box-border
        "
      >
        <li
          @click="setSection('hero')"
          class="cursor-pointer"
          :class="section == 'hero' ? active : ''"
        >
          Home
        </li>
        <li
          @click="setSection('about')"
          class="cursor-pointer"
          :class="section == 'about' ? active : ''"
        >
          ABOUT
        </li>
        <li
          class="cursor-pointer"
          @click="setSection('projects')"
          :class="section == 'projects' ? active : ''"
        >
          PROJECTS
        </li>
        <li
          class="cursor-pointer"
          @click="setSection('contact')"
          :class="section == 'contact' ? active : ''"
        >
          CONTACT
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import HeroSection from "./HeroSection.vue";
import AboutSection from "./AboutSection.vue";
import ProjectsSection from "./ProjectsSection.vue";

export default {
  name: "MainSection",
  props: {
    msg: String,
  },
  components: {
    HeroSection,
    AboutSection,
    ProjectsSection,
  },
  data() {
    return {
      sections: ["hero", "about", "projects", "contact"],
      section: "hero",
      chevonPosition: "slide-fade",
      active: "active font-bold text-lg",
    };
  },
  methods: {
    changeSectionLeft(postition) {
      this.section = "about";
      this.chevonPosition = postition;
    },
    setSection(sectionName) {
      this.section = sectionName;
    },
    chevronRight(postition) {
      this.chevonPosition = postition;
      let currentIndex = this.sections.indexOf(this.section);
      if (currentIndex == this.sections.length - 1) {
        currentIndex = -1;
      }
      this.section = this.sections[++currentIndex];
    },
    chevronLeft() {
      let currentIndex = this.sections.indexOf(this.section);

      if (currentIndex == 0) {
        currentIndex = this.sections.length;
      }
      this.section = this.sections[--currentIndex];
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#profile-image {
  background-image: url("../assets/profile.jpg");
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.slide-fade-enter-from {
  transform: translateX(-90px);
  opacity: 0;
}
.slide-left-enter-active {
  transition: all 0.3s ease-out;
}

.slide-left-leave-active {
  transition: all 0s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-left-leave-to {
  transform: translateX(-30px);
  opacity: 0;
}
.slide-left-enter-from {
  transform: translateX(90px);
  opacity: 0;
}
</style>
