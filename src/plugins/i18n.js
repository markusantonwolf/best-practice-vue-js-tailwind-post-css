import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { DEFAULT_LANGUAGE, FALLBACK_LANGUAGE } from '@/constants.js'
import de from '@/lang/de.json'
import en from '@/lang/en.json'
import es from '@/lang/es.json'
import zh from '@/lang/zh.json'

Vue.use(VueI18n)

export const i18n = new VueI18n({
  locale: DEFAULT_LANGUAGE,
  fallbackLocale: FALLBACK_LANGUAGE,
  messages: { de, en, es, zh },
})
