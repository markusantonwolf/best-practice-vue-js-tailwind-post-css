<template>
  <transition name="notifications" mode="out-in">
    <div class="notifications" v-if="has_mesages">
      <transition-group name="message" tag="div" mode="out-in">
        <Message v-for="message in messages" :key="message.id" :message="message" />
      </transition-group>
    </div>
  </transition>
</template>

<script>
import Message from '@/components/TheNotificationsMessage.vue'
import { mapState } from 'vuex'

export default {
  name: 'TheNotifications',
  components: {
    Message,
  },
  computed: {
    ...mapState('notifications', ['messages']),
    has_mesages: function() {
      return this.messages.length === 0 ? false : true
    },
  },
}
</script>

<style lang="postcss" scoped>
.notifications {
  position: fixed;
  width: calc(100% - 2rem);
  z-index: var(--notifications-zindex);
  top: calc(1rem + var(--navigation-height));
  right: 1rem;
  left: 1rem;
}

@screen md {
  .notifications {
    max-width: 400px;
    width: 40vw;
    left: auto;
  }
}
/* purgecss start ignore */
.notifications-enter-active,
.notifications-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.notifications-enter,
.notifications-leave-to {
  opacity: 0;
  transform: translateX(2rem);
}
.message-enter-active,
.message-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.message-enter,
.message-leave-to {
  opacity: 0;
  transform: translateY(-3rem);
}
/* purgecss end ignore */
</style>
