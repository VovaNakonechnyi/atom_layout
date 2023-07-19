<template>
  <AppSubHeader :position="'center'" />
  <div class="col-sm-9 tw-px-3 tw-sm:px-0 tw-pb-2">
    <div
      class="row tw-justify-center tw-text-center tw-text-2xl tw-font-girloy-bold"
      v-html="currentLeson.title"
    ></div>
  </div>
  <div class="col-sm-9 tw-px-3 tw-sm:px-0 tw-pb-4">
    <div
      class="row tw-justify-center tw-text-center tw-text-lg tw-font-girloy-med"
    >
      <span class="tw-text-orange-400 tw-mr-1"
        >Епізод {{ currentLeson.id }}.</span
      >{{ currentLeson.subtitle }}
    </div>
  </div>

  <div class="col-sm-9 tw-pb-10" v-if="store.lessons.length">
    <TheAppLessonVideoAndTab
      @modal-status-emit="setModalStatus"
      @modal-course-emit="shownCourseModal"
    />
  </div>
  <div class="col-12 tw-py-8 tw-px-3 tw-sm:px-0 tw-bg-light-grey">
    <div class="row tw-justify-center tw-h-full">
      <div class="col-sm-9 col-12 tw-text-orange-400 tw-text-2xl">
        У цьому епізоді ви дізнаєтесь:
      </div>
      <div class="col-sm-9 col-12">
        <ul class="tw-list-decimal tw-px-4 tw-py-3">
          <li v-for="item in currentLeson.description" :key="item">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <AppCourseModal v-model:model-value="courseModal">
    <template #header> Ваш доступ до практикуму закінчився :( </template>
    <template #sub-title>
      Залиште заявку, щоб не пропустити шанс стартувати у професії, бути в курсі
      оновлень програми та найкращих умов навчання.
    </template>
  </AppCourseModal>
  <AppReminderModal
    :msg-status="modalStatus"
    v-model:model-value="reminderModalShown"
  />
</template>
<script lang="ts" setup>
import AppSubHeader from 'src/components/navigation/headers/AppSubHeader.vue';

import AppCourseModal from 'src/components/modals/AppCourseModal.vue';
import AppReminderModal from 'src/components/modals/AppReminderModal.vue';
import TheAppLessonVideoAndTab from 'src/components/pages/lessons/TheAppLessonVideoAndTab.vue';
import { useLessonsStore } from 'src/stores/lessons';

import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const store = useLessonsStore();
const { lessons, currentLesson: data } = storeToRefs(store);

await store.fetchLessons();

store.setCurrentLesson(lessons.value[0]);

const currentLeson = data;

const modalStatus = ref('');
const reminderModalShown = ref(false);
const setModalStatus = (status: string): void => {
  showReminderModal();
  modalStatus.value = status;
};
const showReminderModal = (): boolean => (reminderModalShown.value = true);

const courseModal = ref(false);
const shownCourseModal = (): boolean => (courseModal.value = true);
</script>

<style lang="scss" scoped></style>
