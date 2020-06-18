<template>
  <div class="flex justify-between items-center mx-8" v-show="!popup">
    <router-link :to="{name:'Home'}" class="block w-16">
      <img class="w-full h-full" src="@/assets/images/vue-js-logo.svg" alt="Logo Vue js" />
    </router-link>
    <div class="p-6 -mx-4" @click="popupToggle()">
      <BaseIcon name="ellipsisV" class="text-primary w-4" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BaseIcon from '@/components/BaseIcon'
export default {
  name: 'TheNavigationReduced',
  components: { BaseIcon },
  computed: {
    ...mapState('navigation', ['popup']),
  },
  methods: {
    ...mapActions('navigation', ['popupToggle']),
  },
}
</script>
