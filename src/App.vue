<template>
  <div id="app">
    <div class="main-container">
      <SheetHeader
        :showAllOpts="showAllOpts"
        @toggle-show-all-opts="toggleShowAllOpts"
        :sheets="sheets"
      />
      <router-view :columns="columns" :cli="cli" :showAllOpts="showAllOpts" :sheetName="sheetName"></router-view>
    </div>
  </div>
</template>

<script>
import SheetHeader from "@/components/SheetHeader.vue";
import json from "@/json/data.json";

export default {
  name: "app",
  components: {
    SheetHeader
  },
  data() {
    const sheetNames = Object.keys(json)
      .sort()
      .map((key, i) => ({
        id: ++i,
        type: key
      }));
    const init = this.$route.path === "/sheet" ? this.$route.query.name : "";
    return {
      chtSht: "",
      cli: json[init].cli,
      sheetName: json[init].sheetName,
      columns: json[init].columns,
      showAllOpts: false,
      sheets: sheetNames
    };
  },
  methods: {
    toggleShowAllOpts() {
      this.showAllOpts = !this.showAllOpts;
    }
  },
  watch: {
    $route: function() {
      this.chtSht = this.$route.query.name;
      this.cli = json[this.chtSht].cli;
      this.sheetName = json[this.chtSht].sheetName;
      this.columns = json[this.chtSht].columns;
    }
  }
};
</script>

<style>
:root {
  --main-width: 360px;
  --cat-bg-color: #333;
  --code-bg-color: #ccc;
  --desc-bg-color: rgba(250, 235, 215, 65%);
}

html {
  overflow-y: scroll;
}

body {
  font-family: "Open Sans";
}
</style>
