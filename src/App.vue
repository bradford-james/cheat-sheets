<template>
  <div>
    <div class="main-container">
      <div class="header-buttons">
        <button
          class="header-button"
          @click="toggleShowAllOpts"
          :class="{'header-button-active': buttonActive}"
        >Show All Options</button>
      </div>
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
  </div>
</template>

<script>
import Column from "@/components/Column.vue";
export default {
  name: "App",
  components: {
    Column
  },
  methods: {
    toggleShowAllOpts() {
      this.showAllOpts = !this.showAllOpts;
      this.buttonActive = !this.buttonActive;
    }
  },
  data() {
    return {
      cli: "git",
      sheetName: "Git CLI",
      buttonActive: false,
      showAllOpts: false,
      columns: [
        {
          id: "col1",
          categories: [
            {
              id: "catBasic",
              name: "Utilities",
              commands: [
                {
                  id: "comInit",
                  command: "init",
                  description: "Initialize empty Git repo in CWD",
                  options: [
                    {
                      id: "optSetDir",
                      option: "<directory>",
                      description: "Specify directory to create git repo"
                    }
                  ]
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
                      description:
                        "Show text/graphical representation of git history"
                    }
                  ]
                },
                {
                  id: "comStatus",
                  command: "status",
                  description:
                    "Show git status of files in the git working directory",
                  options: [
                    {
                      id: "optShort",
                      option: "-s",
                      description: "Show abbrevated git status view"
                    }
                  ]
                },
                {
                  id: "comRemote",
                  command: "remote",
                  description: "Display all remote connections",
                  options: [
                    {
                      id: "optAdd",
                      option: "add <name> <url>",
                      description: "Add remote connection"
                    }
                  ]
                },
                {
                  id: "comConfig",
                  command: "config",
                  description: "Retrieve local configuration settings"
                },
                {
                  id: "comClone",
                  command: "clone",
                  annotations: "<url>",
                  description:
                    "Copy a remote repository locally (can be http or local project)"
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
                  command: "add",
                  annotations: "<filename>",
                  description:
                    "Set all modified and added files to status 'Staged'",
                  options: [
                    {
                      id: "optAll",
                      option: ".",
                      description:
                        "Adds all modified or added files in the git working directory"
                    }
                  ]
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
                  description: "See list of all local branches",
                  options: [
                    {
                      id: "optSwitch",
                      option: "<branch name>",
                      description: "Switch to branch"
                    },
                    {
                      id: "optCreate",
                      option: "-b <branch name>",
                      description: "Create and switch to branchs"
                    }
                  ]
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

html {
  overflow-y: scroll;
}

body {
  font-family: "Open Sans";
}

.header-buttons {
  display: flex;
  justify-content: flex-end;
  padding: 0 50px;
  margin-top: 20px;
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
}
</style>
