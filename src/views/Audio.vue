<template>
  <div class="mx-8">
    <BaseHeadline page="audio" />
    <div class="grid grid-cols-6 gap-12 my-8">
      <div
        class="col-span-6 sm:col-span-3 lg:col-span-2 bg-gray-200 border border-gray-300 rounded-lg shadow-xl text-center p-4"
        v-for="(item, index) in audio"
        :key="index"
      >
        <BaseAudio
          :source="item.source"
          class="text-primary bg-white rounded-full shadow-sm w-20 h-20 mx-auto mb-4"
        />
        <p class="text-xs font-medium my-2">{{item.source}}</p>
        <p class="text-base leading-normal">{{item.text}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseAudio from '@/components/BaseAudio'
import BaseHeadline from '@/components/BaseHeadline'

const audio = [
  {
    source: 'Tours_-_01_-_Enthusiast.mp3',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit suscipit, cum aperiam adipisci deleniti nobis et. Expedita, odio. Odit, dicta?',
  },
  {
    source: '//www.bensound.com/bensound-music/bensound-summer.mp3',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit suscipit, cum aperiam adipisci deleniti nobis et. Expedita, odio. Odit, dicta?',
  },
]

export default {
  name: 'Home',
  components: {
    BaseAudio,
    BaseHeadline,
  },
  computed: {
    audio: function() {
      return audio
    },
  },
  methods: {
    ...mapActions('meta', ['setMeta']),
  },
  beforeMount: function() {
    this.setMeta({ title: this.$t('pages.audio.title'), description: this.$t('lorem_ipsum') })
  },
}
</script>
