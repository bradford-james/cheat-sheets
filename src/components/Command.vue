<template>
  <div class="command-container">
    <div class="command el">
      <pre>{{ `> ${cli} ${command.command ? command.command : ''}` }}</pre>
    </div>
    <div class="description el">{{ command.description }}</div>
    <div class="collapsible">
      <div class="option-tag">+ Options</div>
      <div class="bottom-line"></div>
    </div>
    <Option v-for="option in command.options" :key="option.id" :option="option" :cli="cli" />
    <div v-if="command.spacer" class="spacer"></div>
  </div>
</template>

<script>
import Option from "@/components/Option.vue";
export default {
  name: "command",
  props: {
    command: Object,
    cli: String
  },
  components: {
    Option
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
  width: 330px;
  margin-left: 10px;
}

.description {
  background-color: var(--desc-bg-color);
  font-size: 11px;
  margin-left: 10px;
  width: 330px;
}

.collapsible {
  display: flex;
  margin: 7px 0 10px 0;
}

.option-tag {
  margin: 0 20px 0 40px;
  font-size: 11px;
}

.bottom-line {
  height: 2px;
  border-bottom: solid 1px #ccc;
  width: 225px;
  margin-top: 5px;
}

.spacer {
  height: 4px;
}
</style>