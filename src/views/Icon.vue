<template>
  <div class="mx-8">
    <BaseHeadline page="icon" />
    <div class="grid grid-cols-12 gap-2 sm:gap-8 lg:gap-12 my-8">
      <div
        class="col-span-3 sm:col-span-2 lg:col-span-1"
        v-for="(item, index) in icons"
        :key="index"
      >
        <BaseIcon :name="item.name" fade="true" class="w-full h-full" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseIcon from '@/components/BaseIcon'
import BaseHeadline from '@/components/BaseHeadline'

const icons = [
  {
    name: 'angleLeft',
  },
  {
    name: 'angleRight',
  },
  {
    name: 'ellipsisV',
  },
  {
    name: 'times',
  },
  {
    name: 'leftRight',
  },
]

export default {
  name: 'Home',
  components: {
    BaseIcon,
    BaseHeadline,
  },
  computed: {
    icons: function() {
      return icons
    },
  },
  methods: {
    ...mapActions('meta', ['setMeta']),
  },
  beforeMount: function() {
    this.setMeta({ title: this.$t('pages.icon.title'), description: this.$t('lorem_ipsum') })
  },
}
</script>
