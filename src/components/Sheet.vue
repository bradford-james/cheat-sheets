<template>
  <div class="container">
    <div class="sheet-name">{{ sheetName }}</div>
    <div class="columns-container">
      <Column
        v-for="column in columns"
        :key="column.id"
        :column="column"
        :cli="cli"
        :showAllOpts="showAllOpts"
      />
    </div>
  </div>
</template>

<script>
import Column from '@/components/Column.vue';
export default {
  name: 'sheet',
  components: {
    Column,
  },
  props: {
    columns: Array,
    cli: String,
    sheetName: String,
    showAllOpts: Boolean,
    showHeader: Boolean,
  },
  mounted() {
    this.$emit('show-header', this.showHeader);
  },
};
</script>

<style scoped>
.sheet-name {
  font-size: 36px;
  text-align: center;
  width: 200px;
  margin: 20px auto 30px auto;
}

.columns-container {
  display: flex;
  margin: 0 auto;
  width: 1260px;
  justify-content: center;
}
</style>
