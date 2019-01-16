# vue-cli-plugin-klkspa

Vue CLI 3 plugin for adding support for klook ts spa

## Feature

* axios wrapper
* auto online deployment
* i18n integrated
* svg sprite
* basic utils and css
* ts store prototype

## How to Use

You need Vue CLI 3 installed globally as a pre-requisite. If you don't have it, please run

```
npm install -g @vue/cli
```

 use vue-cli3 choose feature : babel ,typescript , router, vuex, css-Preprocessor( sass:


```
vue create ${project_git_name}
```

```
vue add klkspa
```

## Deployment

add project git name so it can auto-generate deploy.sh for your online deployment,use 
```
sh deploy.sh
```
to deploy project ,make sure to have '/srv/builds' directory prepared


## other explanation:

1. theme color change modify @/assets/scss/variable.scss
2. add node to tsconfig.json types:

```
"types": [
    "webpack-env",
    "node"
],
```
