<template>
  <div>
    <div class="main-container">
      <div class="sheet-name">{{ sheetName }}</div>
      <div class="columns-container">
        <Column v-for="column in columns" :key="column.id" :column="column" :cli="cli" />
      </div>
    </div>
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
export default {
  name: "App",
  components: {
    Column
  },
  data() {
    return {
      cli: "git",
      sheetName: "Git CLI",
      columns: [
        {
          id: "col1",
          categories: [
            {
              id: "catBasic",
              name: "Basics",
              commands: [
                {
                  id: "comInit",
                  command: "init",
                  description: "Initialize Git repo locally"
                },
                {
                  id: "comLog",
                  command: "log",
                  description: "Display logs of past commits on current branch",
                  options: [
                    {
                      id: "optOneline",
                      option: "--oneline",
                      description: "Sample text"
                    },
                    {
                      id: "optGraph",
                      option: "--oneline --graph",
                      description: "Sample text"
                    }
                  ]
                },
                {
                  id: "comStatus",
                  command: "status",
                  description:
                    "Show git status of files in the git working directory"
                },
                {
                  id: "comRemote",
                  command: "remote <origin> <branch>",
                  description: "Display all remote connections"
                },
                {
                  id: "comConfig",
                  command: "config",
                  description: "Retrieve local configuration settings"
                },
                {
                  id: "comClone",
                  command: "clone <url>",
                  description: "Copy a remote repository locally"
                }
              ]
            }
          ]
        },
        {
          id: "col2",
          categories: [
            {
              id: "catMain",
              name: "Main",
              commands: [
                {
                  id: "comAdd",
                  command: "add <filename>",
                  description:
                    "Set all modified and added files to status 'Staged'"
                },
                {
                  id: "comCommit",
                  command: "commit",
                  description: "Sample text",
                  options: [
                    {
                      id: "optMessage",
                      option: '-m <"commit title">',
                      description: "Sample text"
                    }
                  ]
                },
                {
                  id: "comPush",
                  command: "push",
                  description: "Sample text"
                },
                {
                  id: "comPull",
                  command: "pull",
                  description: "Sample text"
                }
              ]
            },
            {
              id: "catUndo",
              name: "Undo",
              commands: [
                {
                  id: "comRevert",
                  command: "revert",
                  description: "Sample text"
                },
                {
                  id: "comReset",
                  command: "reset",
                  description: "Sample text"
                }
              ]
            }
          ]
        },
        {
          id: "col3",
          categories: [
            {
              id: "catBranches",
              name: "Branches",
              commands: [
                {
                  id: "comBranch",
                  command: "branch",
                  description: "Sample text"
                },
                {
                  id: "comCheckout",
                  command: "checkout",
                  description: "Sample text",
                  options: [
                    {
                      id: "optBranch",
                      option: "--branch",
                      description: "Sample text"
                    }
                  ]
                },
                {
                  id: "comMerge",
                  command: "merge",
                  description: "Sample text"
                },
                {
                  id: "comRebase",
                  command: "rebase",
                  description: "Sample text"
                }
              ]
            }
          ]
        }
      ]
    };
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

body {
  font-family: "Open Sans";
}

.sheet-name {
  font-size: 36px;
  text-align: center;
  width: 200px;
  margin: 50px auto 30px auto;
}

.columns-container {
  display: flex;
  margin: 0 auto;
  width: 1260px;
}
</style>
