<template>
  <div
    class="col-12 tw-py-12 md:tw-px-3 tw-px-1 tw-sm:px-0 tw-bg-black tw-text-light-grey-third"
  >
    <slot name="header"></slot>
    <AppFooterDesktop class="tw-hidden md:tw-flex" />
    <AppFooterMobile class="tw-flex md:tw-hidden" />
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts" setup>
import AppFooterDesktop from 'src/components/navigation/footers/AppFooterDesktop.vue';
import AppFooterMobile from 'src/components/navigation/footers/AppFooterMobile.vue';
</script>
