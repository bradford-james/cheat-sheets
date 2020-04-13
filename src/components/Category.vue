<template>
  <div class="category-container">
    <div class="category el">{{ category.name }}</div>
    <Command v-for="command in category.commands" :key="command.id" :command="command" :cli="cli" />
  </div>
</template>

<script>
import Command from "@/components/Command";
export default {
  name: "category",
  components: {
    Command
  },
  props: {
    category: Object,
    cli: String
  }
};
</script>

<style scoped>
.el {
  width: var(--main-width);
  margin: 5px 0px;
  padding: 5px 10px;
  border-radius: 4px;
}

.category {
  margin-top: 35px;
  background-color: var(--cat-bg-color);
  color: white;
}
</style>