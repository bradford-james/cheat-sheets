<template>
  <div class="option-container">
    <div class="command el">
      <pre>{{ `> ${cli} ${command} ${option.option ? option.option : ''}` }}</pre>
    </div>
    <div class="description el">{{ option.description }}</div>
  </div>
</template>

<script>
export default {
  name: "option",
  props: {
    option: Object,
    cli: String,
    command: String
  }
};
</script>

<style scoped>
pre {
  margin: 0px;
  padding: 0px;
}

.el {
  width: var(--main-width);
  margin: 5px 0px;
  padding: 5px 10px;
  border-radius: 4px;
}

.command {
  background-color: var(--code-bg-color);
  margin-top: 6px;
  width: 300px;
  margin-left: 40px;
}

.description {
  background-color: rgb(255, 230, 219);
  font-size: 11px;
  margin-left: 40px;
  width: 300px;
}
</style>