<template>
  <select v-model="activeLocale">
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">{{ locale.name }}</option>
  </select>
</template>

<script>
export default {
  data () {
    return {
      activeLocale: this.$i18n.activeLocale,
      locales: [
        { code: 'en', name: 'English' },
        { code: 'de', name: 'Deutsch' },
        { code: 'bs', name: 'Bosanski' }
      ]
    }
  },
  computed: {
    currentLocale () {
      return this.locales.find((locale) => locale.code === this.$i18n.activeLocale)
    }
  },
  watch: {
    activeLocale (newValue) {
      this.$changeLocale(newValue)
    },
    '$i18n.activeLocale' (newValue) {
      this.activeLocale = newValue
    }
  }
}
</script>
