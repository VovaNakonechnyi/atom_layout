<template>
  <TheAppLessonBar :progress-value="progressValue">
    <template #time>
      {{ displayedTime }}
    </template>
  </TheAppLessonBar>
  <div class="row tw-h-full">
    <div class="col-12 col-md-8">
      <div id="player"></div>
      <div
        v-if="!player.g"
        class="tw-flex tw-items-center tw-justify-center tw-h-full tw-text-4xl"
      >
        Час закінчився:(
      </div>
    </div>
    <div
      class="col-12 col-md-4 tw-px-3 tw-sm:px-0 tw-pt-8 tw-lg:pl-5 tw-font-girloy-med"
    >
      <TheAppLessonTab
        @click="accessToLesson(item)"
        @refresh-emit="refresh"
        v-for="item in data"
        :lesson="item"
        :running-out-time="isRunningOutTime"
        :key="item.id"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Ref, computed, onMounted, ref, watch } from 'vue';
import { storeToRefs } from 'pinia';

import TheAppLessonBar from 'src/components/pages/lessons/TheAppLessonBar.vue';
import TheAppLessonTab from 'src/components/pages/lessons/TheAppLessonTab.vue';

import { useLessonsStore } from 'src/stores/lessons';

import { Lesson } from 'src/interfaces/common.int';
import { EventYT, RootYT } from 'src/interfaces/yt.int';

const emit = defineEmits<{
  (e: 'modal-status-emit', status: string): void;
  (e: 'modal-course-emit'): void;
}>();

const store = useLessonsStore();

const { lessons: data, currentLesson } = storeToRefs(store);

const refresh = (item: Lesson): void => {
  store.setCurrentLesson(item);
  player.value.loadVideoById(currentLesson.value.videoId);
};

const accessToLesson = (item: Lesson): void => {
  if (!item.unlock && !isRunningOutTime.value)
    return emitReminderModal('error');
};

const player: Ref<RootYT> = ref(new YT.Player('player'));
const initYt = (): void => {
  const videoId = currentLesson.value.videoId;
  player.value = new YT.Player('player', {
    height: '350px',
    width: '100%',
    videoId,
    events: {
      onStateChange,
    },
  });
};

const durationYt = ref(0);

const onStateChange = (event: EventYT): void => {
  if (!event) return;

  const { duration = 0 } = event.target.playerInfo;
  durationYt.value = duration;

  if (!currentLesson.value.watched) timer(event.data);
  // timer(event.data);
};

const timer = (data: number): void => {
  switch (data) {
    case 0:
      activateNextLesson();
      break;

    case 1:
      startTimer();
      break;

    case 2:
      stopTimer();
      break;

    default:
      break;
  }
};

const progressValue = ref(0);
const addProgressPercent = (): void => {
  const percentPerVideo = 100 / data.value.length;
  progressValue.value += percentPerVideo;
};

const emitReminderModal = (status: string): void =>
  emit('modal-status-emit', status);

const activateNextLesson = (): void => {
  currentLesson.value.watched = true;
  const nextLesson = data.value[currentLesson.value.id];
  if (!nextLesson) return emitReminderModal('success');
  nextLesson.unlock = true;
};

const totalTimeTimer = ref(0);
const localTimeTimer = ref(0);

let timerInterval: NodeJS.Timeout;
let updateDisplayInterval: NodeJS.Timeout;

let start = 0,
  stoppedTime = 0,
  stoppedDuration = 0;

const sumTime = ref(
  data.value.reduce((acc: number, el: Lesson): number => acc + el.video_time, 0)
);
const externalTime = 5;
let availableTime = ref(sumTime.value + externalTime);

watch(availableTime, () => {
  reminderModalShown();
  if (availableTime.value !== 0) return;
  runningOutTime();
});

const reminderModalShown = () => {
  const allTime = sumTime.value + externalTime
  if (availableTime.value !== Math.floor(allTime / 2)) return;
  player.value.pauseVideo();
  emitReminderModal('warning');
};

const courseModalShown = (): void => emit('modal-course-emit');

const isRunningOutTime = ref(false);
const runningOutTime = () => {
  courseModalShown();
  clearTimer();
  displayedTime.value = updateTime(0);
  player.value.destroy();
  isRunningOutTime.value = true;
};

const startTimer = (): void => {
  if (!start) start = Date.now();
  if (stoppedTime) stoppedDuration += Date.now() - stoppedTime;
  updateDisplayInterval = setInterval(updateDisplayedTime, 1000);
  timerInterval = setInterval(runningClock, 1000);
};

const stopTimer = (): void => {
  stoppedTime = Date.now();
  clearInterval(timerInterval);
  clearInterval(updateDisplayInterval);
  totalTimeTimer.value += localTimeTimer.value;
};

const clearTimer = (): void => {
  clearInterval(timerInterval);
  clearInterval(updateDisplayInterval);
  localTimeTimer.value = 0;
  totalTimeTimer.value = 0;
  start = 0;
  stoppedTime = 0;
  stoppedDuration = 0;
};

const runningClock = (): void => {
  const currentTime = Date.now();
  localTimeTimer.value = Math.floor(
    (currentTime - start - stoppedDuration) / 1000
  );
};

const diffTimer = computed(
  (): number => durationYt.value - totalTimeTimer.value
);
const diffLocalTimer = computed(
  (): number => durationYt.value - localTimeTimer.value
);

const displayedTime = ref('');
const updateTime = (availableTime: number): string => {
  if (!availableTime) return '00:00:00';
  let hours, minutes, seconds: number;

  hours = Math.floor(availableTime / 60 / 60);
  minutes = Math.floor(availableTime / 60 - hours * 60);
  seconds = Math.floor(availableTime % 60);

  let hourString = hours < 10 ? '0' + hours : hours;
  let minuteString = minutes < 10 ? '0' + minutes : minutes;
  let secondsString = seconds < 10 ? '0' + seconds : seconds;
  return (displayedTime.value = `${hourString}г ${minuteString}хв ${secondsString}с`);
};
displayedTime.value = updateTime(availableTime.value);

const updateDisplayedTime = () => updateTime(availableTime.value--);

watch([diffTimer, diffLocalTimer], () => {
  if (
    diffLocalTimer.value &&
    diffLocalTimer.value >= 0 &&
    diffLocalTimer.value <= 1
  ) {
    clearTimer();
    addProgressPercent();
    activateNextLesson();
  }

  if (diffTimer.value && diffTimer.value >= 0 && diffTimer.value <= 2) {
    clearTimer();
    addProgressPercent();
    activateNextLesson();
  }
});

onMounted(async () => {
  initYt();
});
</script>
