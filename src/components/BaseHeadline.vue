<template>
  <div>
    <h1
      class="text-5xl font-light leading-tight break-words mb-4"
    >{{$t('pages.' + page + '.headline')}}</h1>
    <h2 class="text-2xl font-light break-words">{{$t('lorem_ipsum')}}</h2>
  </div>
</template>

<script>
export default {
  name: 'BaseHeadline',
  props: { page: { required: true, type: String, default: 'home' } },
}
</script>
