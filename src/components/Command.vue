<template>
  <div class="command-container">
    <div class="command el">
      <pre>{{ `> ${cli} ${command.command ? command.command : ''}` }}</pre>
    </div>
    <div class="description el">{{ command.description }}</div>
    <div v-if="hasOpts" class="collapsible" @click="toggleOpts" :class="{active: isActive}">
      <div class="option-tag">+ Options</div>
      <div class="has-opts-bottom-line"></div>
    </div>
    <div v-else class="no-opts-bottom-line"></div>
    <div v-if="hasOpts" class="collapsee" :class="{'show-opts': showOpts}">
      <Option
        v-for="option in command.options"
        :key="option.id"
        :cli="cli"
        :command="command.command"
        :option="option"
      />
      <div class="spacer"></div>
    </div>
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
  },
  data() {
    return {
      isActive: false,
      showOpts: false,
      hasOpts: false
    };
  },
  created() {
    this.setHasOpts();
  },
  methods: {
    toggleOpts() {
      this.isActive = !this.isActive;
      this.showOpts = !this.showOpts;
    },
    setHasOpts() {
      this.hasOpts = this.command.options.length > 0 ? true : false;
    }
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
  margin: 7px 0 3px 0;
}

.collapsible:hover {
  color: grey;
  cursor: pointer;
}

.active > .bottom-line,
.collapsible:hover > .bottom-line {
  border-color: #ddd;
}

.active {
  color: rgb(220, 136, 100);
}

.active:hover {
  color: rgb(220, 136, 100, 0.8);
}

.collapsee {
  max-height: 0;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
}

.show-opts {
  max-height: 200px;
}

.option-tag {
  margin: 0 20px 0 40px;
  font-size: 11px;
}

.has-opts-bottom-line {
  height: 2px;
  border-bottom: solid 1px #ccc;
  width: 225px;
  margin-top: 5px;
}

.no-opts-bottom-line {
  height: 2px;
  border-bottom: solid 1px #ccc;
  width: 288px;
  margin: 12px 0 16px 50px;
}

.spacer {
  height: 4px;
}
</style>