<template>
  <div class="flex justify-start mx-8">
    <router-link :to="{name:'Home'}" class="block w-16 mr-12 my-2">
      <img class="w-full h-full" src="@/assets/images/vue-js-logo.svg" alt="Logo Vue js" />
    </router-link>
    <div class="flex flex-col flex-grow">
      <TheNavigationLanguages class="flex flex-grow self-end" type="nav" />
      <div class="flex justify-start items-end">
        <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.route"
          class="nav__item"
        >{{$t(item.text)}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TheNavigationLanguages from '@/components/TheNavigationLanguages'

export default {
  name: 'TheNavigationFull',
  components: { TheNavigationLanguages },
  computed: {
    ...mapState('navigation', ['items']),
  },
  methods: {
    ...mapActions('notifications', ['add']),
  },
  mounted: function() {},
}
</script>
<style lang="postcss" scoped>
.nav__item {
  @apply block text-primary text-lg font-normal rounded-t-md px-6 py-3 mx-1;
}
/* purgecss start ignore */
.nav__item:hover,
.nav__item.is-active,
.nav__item.is-exact-active {
  @apply text-white bg-primary;
}
/* purgecss end ignore */
</style>
