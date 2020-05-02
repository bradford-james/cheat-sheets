<template>
  <div id="app">
    <div class="main-container">
      <SheetHeader
        :showAllOpts="showAllOpts"
        @toggle-show-all-opts="toggleShowAllOpts"
        :sheets="sheets"
        v-if="headerVisible"
      />
      <router-view
        :columns="columns"
        :cli="cli"
        :showAllOpts="showAllOpts"
        :sheetName="sheetName"
        @show-header="showHeader"
        :sheets="sheets"
      ></router-view>
    </div>
  </div>
</template>

<script>
import SheetHeader from '@/components/SheetHeader.vue';
import SheetsDataService from './services/SheetsDataService';

export default {
  name: 'app',
  props: {},
  components: {
    SheetHeader,
  },
  data() {
    return {
      cli: '',
      sheetName: '',
      columns: [],
      showAllOpts: false,
      sheets: [],
      headerVisible: true,
    };
  },
  methods: {
    retrieveSheet() {
      SheetsDataService.getSheet(this.$route.query.name).then((response) => {
        this.columns = response.data.columns;
        this.cli = response.data.cli;
        this.sheetName = response.data.sheetName;
      });
    },
    retrieveSheetsList() {
      SheetsDataService.getSheetsList().then((response) => {
        let idCounter = 0;
        this.sheets = response.data.map((sheetObj) => {
          return {
            id: idCounter++,
            type: sheetObj.cli,
          };
        });
      });
    },
    toggleShowAllOpts() {
      this.showAllOpts = !this.showAllOpts;
    },
    showHeader(bool) {
      console.log('main check');
      this.headerVisible = bool;
    },
  },
  watch: {
    $route: function() {
      //this.retrieveSheet();
      this.retrieveSheetsList();
    },
  },
  mounted() {
    console.log(`Production URL: ${process.env.PRODUCTION_CORS_URL}`);
    console.log('----');
    console.log(process.env);
    //this.retrieveSheet();
    this.retrieveSheetsList();
  },
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
  font-family: 'Open Sans';
}
</style>
