<template>
  <div class="mx-8">
    <BaseHeadline page="notification" />
    <div class="grid grid-cols-12 gap-8 my-8">
      <div
        class="col-span-12 sm:col-span-6 lg:col-span-4"
        v-for="(item, index) in notifications"
        :key="index"
      >
        <a
          href="click-to-send-notification"
          class="btn"
          @click.prevent="addNewMessage(item)"
        >{{$t(item.text)}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import BaseHeadline from '@/components/BaseHeadline'

const notifications = [
  {
    message: 'notifications.example_default.message',
    type: '',
    text: 'default',
    description: 'notifications.example_default.description',
  },
  {
    message: 'notifications.example_info.message',
    type: 'info',
    text: 'info',
    description: 'notifications.example_info.description',
  },
  {
    message: 'notifications.example_success.message',
    type: 'success',
    text: 'success',
    description: 'notifications.example_success.description',
  },
  {
    message: 'notifications.example_error.message',
    type: 'error',
    text: 'error',
    description: 'notifications.example_error.description',
  },
]

export default {
  name: 'Home',
  components: { BaseHeadline },
  computed: {
    notifications: function() {
      return notifications
    },
  },
  methods: {
    ...mapActions('notifications', ['add']),
    ...mapActions('meta', ['setMeta']),
    addNewMessage(message) {
      this.add({ message: this.$t(message.message), type: message.type, description: this.$t(message.description) })
    },
  },
  beforeMount: function() {
    this.setMeta({ title: this.$t('pages.notification.title'), description: this.$t('lorem_ipsum') })
  },
}
</script>
