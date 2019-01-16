<template>
  <div>{{ $t(text) }}</div>
</template>

<script>
  export default {
    name: 'Test',
    props: {
      text: {
        type: String,
      },
    },
  };
</script>
