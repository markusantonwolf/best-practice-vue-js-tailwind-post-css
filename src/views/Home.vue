<template>
  <div class="mx-8">
    <BaseHeadline page="home" />
    <ul class="list-circle text-xl leading-snug my-4 mx-6">
      <li class="mb-4">
        <strong>Notifications</strong> - Get notifications in your application. Easy to use and with a complete different layout if mobile or desktop.
      </li>
      <li class="mb-4">
        <strong>Navigation</strong> - Perfect navigation setup für mobile and desktop. Easy to use and with language selector.
      </li>
      <li class="mb-4">
        <strong>Loading</strong> - One global loading component for an application wide loading experience.
      </li>
      <li class="mb-4">
        <strong>Icons</strong> - One global icon component to have an comportable way of using integrated SVG icons even multi path and color.
      </li>
      <li class="mb-4">
        <strong>Audio</strong> - One global audio component to play and pause audio files provided by the local server or by a remote address..
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseHeadline from '@/components/BaseHeadline'

export default {
  name: 'Home',
  components: { BaseHeadline },
  methods: {
    ...mapActions('meta', ['setMeta']),
  },
  beforeMount: function() {
    this.setMeta({ title: this.$t('pages.home.title'), description: this.$t('lorem_ipsum') })
  },
}
</script>
