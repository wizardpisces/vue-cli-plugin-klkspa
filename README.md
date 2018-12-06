# vue-cli-plugin-klkspa

Vue CLI 3 plugin for adding support for klook ts spa

## How to Use

You need Vue CLI 3 installed globally as a pre-requisite. If you don't have it, please run

```
npm install -g @vue/cli
```

To add klkspa support to your vue-cli-powered project, run the following steps in the project root folder:

```
step 1:

use vue-cli3 to create project , choose feature : babel ,typescript , router, vuex, css-Preprocessor( sass )

step 2:

vue add klkspa

(add project git name so it can auto-generate deploy.sh for your online deployment)

```
## other explanation:

1. theme color change modify @/assets/scss/variable.scss
2. add node to tsconfig.json types:

```
"types": [
    "webpack-env",
    "node"
],
```