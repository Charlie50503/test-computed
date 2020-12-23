<template>
  <div class="home">
    <HelloWorld :parentData.sync="myData" />
    <button type="button" @click="send()">
      保存
    </button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {};
  },
  computed: {
    myData: {
      get() {
        return this.$store.getters["getStoreData"];
      },
      set() {
        return this.$store.setStoreData["setStoreData"];
      },
    },
  },
  methods: {
    send() {
      this.$store.dispatch("sendData", this.myData);
    },
  },
};
</script>
