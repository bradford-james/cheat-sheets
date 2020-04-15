<template>
  <div>
    <div class="header-buttons">
      <select
        class="router-select"
        @change="$router.push({ path: '/sheet', query: { name: $event.target.value } })"
      >
        <option value disabled selected>Pick a sheet</option>
        <option v-for="sheet in sheets" :key="sheet.id" :value="sheet.type">{{ sheet.type }}</option>
      </select>
      <button
        class="header-button"
        @click="clickEvent"
        :class="{ 'header-button-active': buttonActive }"
      >{{ showToggleText }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sheetHeader",
  props: {
    showAllOpts: Boolean,
    sheets: Array
  },
  methods: {
    clickEvent() {
      this.$emit("toggle-show-all-opts");
      this.buttonActive = !this.buttonActive;
      if (this.buttonActive) {
        this.showToggleText = "Hide Options";
      } else {
        this.showToggleText = "Show All Options";
      }
    }
  },
  data() {
    return {
      buttonActive: false,
      showToggleText: "Show All Options"
    };
  }
};
</script>

<style scoped>
.header-buttons {
  display: flex;
  justify-content: space-between;
  padding: 0 50px;
  margin-top: 20px;
}

.router-select {
  border-radius: 4px;
  padding: 2px 5px;
  font-weight: 600;
}

.header-button {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  line-height: 1.5;
  border-radius: 0.2rem;
  color: #fff;
  background-color: rgba(224, 109, 59);
  border-color: rgba(224, 109, 59);
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
}

.header-button:hover {
  background-color: rgba(214, 86, 57);
  border-color: rgba(214, 86, 57);
}

.header-button-active {
  box-shadow: 0 0 0 0.2rem rgba(255, 120, 75, 50%);
}
</style>
