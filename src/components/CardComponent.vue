<template>
  <carousel-card
    class="hidden lg:block w-full"
    ref="carouselCardRef"
    :interval="7000"
    :autoplay="false"
    height="400px"
    type="card"
    arrow="always"
    @change="changeHandle"
  >
    <carousel-card-item
      v-for="(image, index) in images"
      :key="index"
      :name="`cc_${index}`"
    >
      <div class="image">
        <img
          height="400"
          :src="image.src"
          :alt="image.alt"
          class="object-cover"
        />
      </div>
      <div class="details">
        <div class="center">
          <h1>Project Name</h1>
          <div class="flex justify-around">
            <div>
              <a target="_blank" :href="image.site_url">
                <font-awesome-icon
                  icon="fa-solid fa-eye"
                  class="mt-2 w-6 h-6 project-link"
                />
              </a>
            </div>
            <div>
              <a target="_blank" :href="image.github">
                <font-awesome-icon
                  icon="fa-brands fa-github"
                  class="mt-2 w-6 h-6 project-link"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- <img :src="image.src" :alt="image.alt" class="object-cover" /> -->
      <!-- <img :src="" alt="project" /> -->
    </carousel-card-item>
  </carousel-card>

  <div class="lg:hidden w-full sm-size h-full mb-5">
    <div
      v-for="(image, index) in images"
      :key="index"
      :name="`cc_${index}`"
      class="shadow-md"
    >
      <div class="image relative mb-8 group">
        <img
          height="400"
          :src="image.src"
          :alt="image.alt"
          class="object-cover"
        />

        <div class="details group-hover:rotate-0">
          <div class="center">
            <h1>{{ image.alt }}</h1>
            <div class="flex justify-around">
              <div>
                <a target="_blank" :href="image.site_url">
                  <font-awesome-icon
                    icon="fa-solid fa-eye"
                    class="mt-2 w-6 h-6 project-link"
                  />
                </a>
              </div>
              <div>
                <a target="_blank" :href="image.github">
                  <font-awesome-icon
                    icon="fa-brands fa-github"
                    class="mt-2 w-6 h-6 project-link"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <img :src="image.src" :alt="image.alt" class="object-cover" /> -->
      <!-- <img :src="" alt="project" /> -->
    </div>
  </div>
</template>

<script>
import { CarouselCard, CarouselCardItem } from "vue-carousel-card";
import "vue-carousel-card/styles/index.css";

export default {
  name: "CardComponent",
  components: { CarouselCard, CarouselCardItem },
  data() {
    return {
      carouselCardRef: null,
    };
  },
  props: {
    images: {
      Array,
      default: null,
    },
  },
  mounted() {
    this.carouselCardRef = this.$refs.carouselCardRef;
  },
  methods: {
    changeHandle(index) {
      console.log(index);
    },
    next() {
      this.carouselCardRef.next();
    },
    prev() {
      this.carouselCardRef.prev();
    },
    setToFirst() {
      this.carouselCardRef.setActiveItem(0);
    },
  },
};
</script>

<style scoped>
h1 {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.project-link :hover {
  color: rgb(102, 113, 126);
}
.carousel-card-mask {
  height: auto;
  -webkit-box-shadow: 8px -4px 12px -4px rgba(117, 102, 117, 1);
  -moz-box-shadow: 8px -4px 12px -4px rgba(117, 102, 117, 1);
  box-shadow: 8px -4px 12px -4px rgba(117, 102, 117, 1);
  /* box-shadow: ; */
}
.carousel-card .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.sm-size .image {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.carousel-card .image img {
  width: 100%;
  transition: 0.5s;
}
.sm-size .image img {
  width: 100%;
  transition: 0.5s;
}
.details {
  position: absolute;
  top: 0;
  left: 0;
  width: 70%; /*100%*/
  height: 100%;
  background: rgba(44, 62, 80, 0.9);
  transition: 0.5s;
  transform-origin: left;
  transform: perspective(2000px) rotateY(-90deg);
}
.is-active:hover .details {
  transform: perspective(2000px) rotateY(0deg);
}
/* .sm-size:hover:hover .details {
  transform: perspective(2000px) rotateY(0deg);
} */
.center {
  padding: 20px;
  text-align: center;
  background: #fff;
  border-radius: 0 10px 10px 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
.details .center h1 {
  margin: 0;
  padding: 0;
  color: black;
  line-height: 20px;
  font-size: 20px;
  text-transform: uppercase;
}
.carousel-card .details .center h1 span {
  font-size: 14px;
  color: #262626;
}
.carousel-card .details .center p {
  margin: 10px 0;
  padding: 0;
  color: #262626;
}
.carousel-card .details .center ul {
  margin: 10px auto 0;
  padding: 0;
  display: table;
}
.carousel-card .details .center ul li {
  list-style: none;
  margin: 0 5px;
  float: left;
}
.carousel-card .details .center ul li a {
  display: block;
  background: #262626;
  color: #fff;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  transform: 0.5s;
}
.is-active.details .center ul li a:hover {
  background: #ff3636;
}
img {
  height: 400px !important;
  width: 400px;
  object-fit: cover;
}
</style>
