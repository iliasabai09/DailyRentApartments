<template>
  <div>
    <p
      class="contact_title"
      @mouseenter="openTooltip"
      @mouseleave="closeTooltip"
    >
      +7 (499) 495-13-34 <br />
      9:00-19:00 по Астане
    </p>
    <div v-if="opened" class="opened">
      Бесплатно проконсультируем и <br />
      подберем офис для вашей <br />
      команды
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const opened = ref(false);

const openTooltip = () => {
  opened.value = true;
};

const closeTooltip = () => {
  opened.value = false;
};
</script>

<style scoped>
.contact_title {
  position: relative;
  padding-left: 50px;
  color: #586973;
}
.opened {
  position: fixed;
  background-color: #fff;
  margin-top: 4px;
  padding: 5px 35px;
  font-size: 18px;
  color: #586973;
  border-radius: 4px;
  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.102);
}
</style>