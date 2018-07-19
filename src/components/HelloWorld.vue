<template>
  <div class="hello">
    <language-switcher/>
    <h1>{{ msg }}</h1>
    <translate tag="h2" :t-n="count" t-plural="%{count} cars">%{count} car</translate>
    <translate t-context="TITLE" tag="h2">Essential Links</translate>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
          v-translate
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
          v-translate
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
          v-translate
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
          v-translate
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
          v-translate
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
          v-translate
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
          v-translate
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
          v-translate
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          v-translate
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import LanguageSwitcher from '@/components/LanguageSwitcher'

export default {
  name: 'HelloWorld',
  components: {
    LanguageSwitcher
  },
  data () {
    return {
      count: 2
    }
  },
  computed: {
    msg () {
      return this.$gettext('Welcome to Your Vue.js App')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
