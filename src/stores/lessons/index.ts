import { defineStore } from 'pinia';
import api from 'src/api';
import { Lesson } from 'src/interfaces/common.int';
import { State } from 'src/interfaces/stores/lessons';

const { lessons } = api;

export const useLessonsStore = defineStore('lessons', {
  state: (): State => ({
    lessons: [
      {
        id: 0,
        title: '',
        subtitle: '',
        video_url: '',
        video_time: 0,
        description: [''],
        watched: false,
        btn_text: '',
        img: '',
        unlock: false,
        videoId: '',
      },
    ],
    currentLesson: {
      id: 0,
      title: '',
      subtitle: '',
      video_url: '',
      video_time: 0,
      description: [''],
      watched: false,
      btn_text: '',
      img: '',
      unlock: false,
      videoId: '',
    },
  }),
  actions: {
    async fetchLessons(): Promise<void> {
      this.lessons = await lessons.apiLessons();
    },
    setCurrentLesson(lesson: Lesson): void {
      this.currentLesson = lesson;
    },
  },
});
