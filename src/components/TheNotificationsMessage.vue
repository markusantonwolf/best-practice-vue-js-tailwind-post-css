<template>
  <div class="flex justify-center w-full text-center">
    <div class="message" :class="class_name">
      <p
        class="text-xl font-medium text-center"
        :class="{'pt-4': has_description, 'p-4': !has_description}"
      >{{ message.message }}</p>
      <p
        class="text-sm font-light text-center pb-4"
        v-if="has_description"
      >{{ message.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { NOTIFICATION_TIMEOUT } from '@/constants'

export default {
  name: 'TheNotificationsMessage',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  computed: {
    class_name: function() {
      if (typeof this.message.type === undefined) {
        return ''
      }
      if (this.message.type === '') {
        return ''
      }
      return 'message--' + this.message.type
    },
    has_description: function() {
      if (typeof this.message.description === 'undefined') {
        return false
      }
      return this.message.description === '' ? false : true
    },
  },
  mounted() {
    this.timeout = setTimeout(() => this.remove(this.message.id), NOTIFICATION_TIMEOUT)
  },
  beforeDestroy() {
    clearTimeout(this.timeout)
  },
  methods: mapActions('notifications', ['remove']),
}
</script>

<style lang="postcss" scoped>
.message {
  @apply rounded-lg shadow-xl border-2 border-gray-400 border-opacity-40 bg-gray-300 bg-opacity-80 w-full max-w-xl backdrop-blur text-gray-900 my-2;
}
/* purgecss start ignore */
.message--info {
  @apply border-yellow-300 border-opacity-40 text-yellow-900 bg-yellow-200 bg-opacity-80;
}
.message--error {
  @apply border-red-300 border-opacity-40 text-red-900 bg-red-200 bg-opacity-80;
}
.message--success {
  @apply border-teal-300 border-opacity-40 text-teal-900 bg-teal-200 bg-opacity-80;
}
/* purgecss end ignore */
</style>
