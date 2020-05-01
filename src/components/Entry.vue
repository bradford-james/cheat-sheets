<template>
  <div class="container">
    <div class="title">Landing Page</div>
    <select
      class="router-select"
      @change="
        $router.push({ path: '/sheet', query: { name: $event.target.value } })
      "
    >
      <option value disabled selected>Pick a sheet</option>
      <option v-for="sheet in sheets" :key="sheet.id" :value="sheet.type">{{
        sheet.type
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'entry',
  props: {
    showHeader: Boolean,
    sheets: Array,
  },
  mounted() {
    this.$emit('show-header', this.showHeader);
  },
};
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.title {
  width: 400px;
  margin: 300px auto 0 auto;
  font-size: 40px;
  letter-spacing: 3px;
  font-weight: 100;
  color: #777;
}

.router-select {
  border-radius: 4px;
  padding: 7px 10px;
  font-weight: 500;
  font-size: 14px;
  width: 140px;
  margin-top: 40px;
}
</style>
