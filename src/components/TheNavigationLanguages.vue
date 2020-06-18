<template>
  <div>
    <a
      :href="getKebabCase($t('language_change', locale))"
      :class="getClassName(locale)"
      v-for="(locale, index) in languages"
      :key="index"
      @click.prevent="changeLanguage(locale)"
    >{{$t('language', locale)}}</a>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import kebabCase from 'lodash/kebabCase'

export default {
  name: 'TheNavigationLanguages',
  props: { type: { required: true, type: String, default: 'nav' } },
  components: {},
  computed: {
    ...mapState('meta', ['language']),
    languages: function() {
      return this.$i18n.availableLocales
    },
    class_name: function() {
      return this.type + '__lang'
    },
  },
  methods: {
    ...mapActions('meta', ['setLanguage']),
    ...mapActions('notifications', ['add']),
    isActiveLanguage(locale) {
      return this.language === locale ? true : false
    },
    changeLanguage(locale) {
      if (this.isActiveLanguage(locale)) {
        return true
      }
      this.setLanguage(locale)
      this.add({
        message: this.$t('notifications.change_language.message'),
        type: 'info',
        description: this.$t('notifications.change_language.description'),
      })
    },
    getKebabCase(string) {
      return kebabCase(string)
    },
    getClassName(locale) {
      const class_list = []
      class_list.push(this.type + '__lang')
      if (this.isActiveLanguage(locale)) {
        class_list.push('is-active cursor-default')
      }
      return class_list.join(' ')
    },
  },
}
</script>
<style lang="postcss" scoped>
/* purgecss start ignore */
.nav__lang {
  @apply block text-primary rounded-md text-sm font-normal px-3 py-1 m-1;
}
.nav__lang:hover,
.nav__lang.is-active,
.nav__lang.is-exact-active {
  @apply text-white bg-primary;
}
.popup__lang {
  @apply block text-primary text-glow rounded-md text-xl font-normal px-5 py-3 m-1;
}
.popup__lang.is-active,
.popup__lang.is-exact-active {
  @apply text-black font-semibold;
}
/* purgecss end ignore */
</style>
