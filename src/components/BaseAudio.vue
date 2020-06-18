<template>
  <transition name="show">
    <div class="relative" v-if="available && init">
      <transition-group name="show" mode="out-in">
        <div class="absolute inset-0" key="play" @click="play()" v-if="!playing">
          <BaseIcon name="play" class="w-full h-full" />
        </div>
        <div class="absolute inset-0" key="pause" @click="stop()" v-if="playing">
          <BaseIcon name="pause" class="w-full h-full" />
        </div>
      </transition-group>
    </div>
  </transition>
</template>

<script>
import BaseIcon from '@/components/BaseIcon'
import { AUDIO_PUBLIC_FOLDER } from '@/constants'

export default {
  name: 'BaseAudio',
  props: { source: { required: true, type: String, default: '' } },
  components: { BaseIcon },
  data() {
    return {
      audio: null,
      duration: null,
      init: false,
      available: false,
      playing: false,
    }
  },
  methods: {
    play: function() {
      this.audio.play()
      this.playing = true
    },
    stop: function() {
      this.audio.pause()
      this.playing = false
    },
    canPlay: function() {
      this.duration = this.audio.duration
      this.available = true
    },
    ended: function() {
      this.audio.currentTime = 0
      this.playing = false
    },
  },
  beforeMount: function() {
    if (this.source !== '') {
      this.init = true
    }
  },
  mounted: function() {
    let audio_src = AUDIO_PUBLIC_FOLDER + '/' + this.source
    if (this.source.substring(0, 4) === 'http' || this.source.substring(0, 2) === '//') {
      audio_src = this.source
    }
    this.audio = new Audio(audio_src)
    this.audio.volume = 0.8
    this.available = true
    this.audio.addEventListener('canplaythrough', this.canPlay())
    this.audio.addEventListener('ended', this.ended())
  },
  beforeDestroy: function() {
    this.audio.pause()
    this.audio.removeEventListener('canplaythrough', this.canPlay())
    this.audio.removeEventListener('ended', this.ended())
    this.audio = null
  },
}
</script>


<style lang="postcss" scoped>
/* purgecss start ignore */
.show-enter-active,
.show-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.show-enter,
.show-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
/* purgecss end ignore */
</style>

