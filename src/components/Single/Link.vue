<template>
  <a class="item-link" :href="link" target="_blank">{{
    getOffice(tableStore.office)
  }}</a>
</template>

<script>
export default {
  props: {
    link: {},
  },
};
</script>
