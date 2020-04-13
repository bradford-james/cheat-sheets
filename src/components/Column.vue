<template>
  <div class="column-container">
    <Category
      v-for="category in column.categories"
      :key="category.id"
      :category="category"
      :cli="cli"
      :showAllOpts="showAllOpts"
    />
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
export default {
  name: "column",
  components: {
    Category
  },
  props: {
    column: Object,
    cli: String,
    showAllOpts: Boolean
  }
};
</script>

<style scoped>
.column-container {
  margin: 0 20px;
}
</style>