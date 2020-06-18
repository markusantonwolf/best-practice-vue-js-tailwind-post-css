<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :viewBox="viewbox"
    class="icon"
    :preserveAspectRatio="aspect"
  >
    <path
      v-for="(item, index) in paths"
      :key="index"
      :d="item.path"
      :fill="item.fill"
      :opacity="opacity"
    >
      <animate
        attributeName="opacity"
        dur="0.5s"
        from="0"
        to="1"
        repeatCount="1"
        begin="0s"
        fill="freeze"
        v-if="is_animate"
      />
    </path>
  </svg>
</template>

<script>
const icons = {
  leftRight: {
    viewbox: '0 0 512 512',
    path: [
      {
        path:
          'M51.038 239.05l136-136a23.9 23.9 0 0 1 33.9 0l22.6 22.6a23.9 23.9 0 0 1 0 33.9l-96.3 96.5 96.4 96.4a23.9 23.9 0 0 1 0 33.9l-22.6 22.7a23.9 23.9 0 0 1-33.9 0l-136-136a23.932 23.932 0 0 1-.1-34z',
        fill: '#00b71c',
      },
      {
        path:
          'M460.55 273.05l-136 136a23.9 23.9 0 0 1-33.9 0l-22.6-22.6a23.9 23.9 0 0 1 0-33.9l96.4-96.4-96.4-96.4a23.9 23.9 0 0 1 0-33.9l22.5-22.8a23.9 23.9 0 0 1 33.9 0l136 136a23.932 23.932 0 0 1 .1 34z',
        fill: '#ba1919',
      },
    ],
  },
  angleRight: {
    viewbox: '0 0 256 512',
    path:
      'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z',
  },
  angleLeft: {
    viewbox: '0 0 256 512',
    path:
      'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z',
  },
  ellipsisV: {
    viewbox: '0 0 256 512',
    path:
      'M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z',
  },
  times: {
    viewbox: '0 0 352 512',
    path:
      'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
  },
  play: {
    viewbox: '0 0 512 512',
    path:
      'M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z',
  },
  pause: {
    viewbox: '0 0 512 512',
    path:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm96-280v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16zm-112 0v160c0 8.8-7.2 16-16 16h-48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16z',
  },
  stop: {
    viewbox: '0 0 512 512',
    path:
      'M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z',
  },
}
export default {
  name: 'BaseIcon',
  props: {
    name: {
      required: true,
      type: String,
    },
    aspect: {
      required: false,
      type: String,
      default: 'xMinYMin',
    },
    fade: {
      required: false,
      type: String,
      default: 'false',
    },
  },
  computed: {
    paths: function() {
      return Array.isArray(icons[this.name].path) ? icons[this.name].path : [{ path: icons[this.name].path }]
    },
    viewbox: function() {
      return icons[this.name].viewbox
    },
    opacity: function() {
      return this.fade === 'true' ? '0' : '1'
    },
    is_animate: function() {
      return this.fade === 'true' ? true : false
    },
  },
}
</script>
<style lang="postcss" scoped>
.icon {
  @apply fill-current;
}
</style>
