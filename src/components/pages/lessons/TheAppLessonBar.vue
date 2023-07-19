<template>
  <div class="row tw-justify-center tw-pb-7 tw-text-lighten-grey tw-text-sm">
    <div
      class="col-md-5 col-12 tw-justify-center tw-md:mr-3 tw-flex tw-items-center"
    >
      <span>Ваш прогрес:</span>
      <q-linear-progress
        :value="progressValue / 100"
        rounded
        color="orange"
        track-color="orange"
        class="tw-w-32 tw-ml-4"
        size="md"
      />
      <span class="tw-text-orange-400 tw-font-girloy-bold tw-ml-2"
        >{{ progressValue }}%</span
      >
    </div>
    <q-separator color="orange" size="2px" vertical />
    <div
      class="col-md-5 col-12 tw-justify-center tw-md:ml-3 tw-flex tw-items-center"
    >
      <span>Залишилось часу:</span>
      <span class="tw-text-orange-400 tw-font-girloy-bold tw-ml-2"
        ><slot name="time"></slot
      ></span>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  progressValue: number;
}
withDefaults(defineProps<Props>(), {
  progressValue: 0,
});
</script>
