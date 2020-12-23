<template>
  <div>
    <button type="button" @click="add()">追加</button>
    <pre>{{ parentData }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    parentData: {
      default: null,
      type: Array,
    },
  },
  methods: {
    add() {
      this.parentData.push({ num: null });
    },
  },
};
</script>

<style></style>
