<template>
  <div
    v-if="lesson"
    style="min-height: 55px"
    class="row tw-mb-2 tw-bg-dark-grey"
  >
    <div
      class="col-3 tw-flex tw-items-center tw-justify-center tw-px-0 md:tw-px-2"
    >
      <q-img
        :class="`${btnState}-color`"
        width="20px"
        class="tw-mr-1 open-lock"
        :src="lessonNumberImg"
      ></q-img>
      <q-img
        :class="`${btnState}-color`"
        width="30px"
        :src="`/src/assets/images/${lockOrYtImg}.svg`"
      ></q-img>
    </div>
    <div class="col-9">
      <q-btn
        @click="$emit('refresh-emit', lesson)"
        :class="`lessons-btns-${btnState}`"
        :disable="!lesson.unlock || runningOutTime"
        class="tw-normal-case"
        unelevated
        square
        style="width: 100%; height: 100%"
      >
        {{ lesson.btn_text }}
      </q-btn>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import { Lesson } from '../../interfaces/common.int';
interface Props {
  lesson?: Lesson;
  runningOutTime?: boolean;
}

defineEmits<{
  (e: 'refresh-emit', item: Lesson): void;
}>();

const props = withDefaults(defineProps<Props>(), {
  lesson: undefined,
  runningOutTime: false,
});
const { lesson, runningOutTime } = toRefs(props);

const lessonNumberImg = computed(
  () => `/src/assets/images/${lesson.value?.img}.svg`
);
const lockOrYtImg = computed(() => (lesson.value?.unlock ? 'play-yt' : 'lock'));

const btnState = computed(() => (lesson.value?.unlock ? 'active' : 'disabled'));
</script>

<style lang="scss" scoped>
.lessons-btns-active {
  background-color: white;
  color: #f8871f;
  transition-duration: 0.2s;
  border: 2px solid #f8871f;

  &:hover {
    background-color: #f8871f;
    color: white;
    transition-duration: 0.2s;
  }
}
.lessons-btns-disabled {
  background-color: #bababa;
  color: white;
}
.active-color {
  filter: invert(56%) sepia(84%) saturate(1692%) hue-rotate(348deg)
    brightness(103%) contrast(94%);
}
.disabled-color {
  filter: invert(0%) sepia(0%) saturate(20%) hue-rotate(139deg) brightness(83%)
    contrast(0%);
}
</style>
