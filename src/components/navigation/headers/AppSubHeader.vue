<template>
  <div class="col-sm-9 tw-pb-6 tw-px-5 md:tw-px-0">
    <div class="row" :class="`tw-justify-${position}`">
      <q-img width="100px" src="/src/assets/images/atom.svg"></q-img>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  position?: string;
}

withDefaults(defineProps<Props>(), {
  position: 'start',
});
</script>
