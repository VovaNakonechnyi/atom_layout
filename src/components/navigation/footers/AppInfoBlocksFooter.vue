<template>
  <AppFooter>
    <template #header><AppInfoBlocks :info="info" /></template>
  </AppFooter>
</template>
<script lang="ts" setup>
import AppFooter from 'src/components/navigation/footers/AppFooter.vue';
import AppInfoBlocks from 'src/components/shared/AppInfoBlocks.vue';

const info = [
  {
    id: 1,
    text: 'Навчайтесь на youtube-каналі Atom',
    img: 'yt',
    class: 'sm:tw-pr-0.5',
  },
  {
    id: 2,
    text: 'Слідкуйте за результатами студентів і життям Atom',
    img: 'inst',
    class: 'md:tw-pr-0.5',
  },
  {
    id: 3,
    text: 'Ми на Facebook: підписуйтесь і обговорюйте',
    img: 'fb',
    class: 'sm:tw-pr-0.5',
  },
  {
    id: 4,
    text: 'Навчайтесь на youtube-каналі Atom',
    img: 'tg',
    class: 'md:tw-pr-0.5',
  },
];
</script>
