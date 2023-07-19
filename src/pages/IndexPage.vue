<template>
  <AppSubHeader />
  <div class="col-sm-9 tw-py-6 tw-px-5 sm:tw-px-0">
    <div class="row">
      <div
        class="col-12 col-md-9 tw-bg-def-img tw-bg-no-repeat tw-bg-right tw-bg-contain"
      >
        <div class="row">
          <div class="col-12 tw-flex tw-items-center">
            <q-img
              class="tw-mr-2 tw-max-w-[25px]"
              src="/src/assets/images/play.svg"
            ></q-img>
            Безкоштовний практикум від Вадима Короленка із старту в таргетованій
            рекламі
          </div>
        </div>
        <div class="row tw-my-4">
          <div
            class="col-12 tw-text-center md:tw-text-left tw-text-xl md:tw-text-3xl tw-font-girloy-bold"
            v-html="HEADING_TEXT"
          ></div>
        </div>
        <div class="row tw-block md:tw-hidden">
          <div class="col-12 tw-flex tw-justify-center">
            <q-img
              width="200px"
              height="300px"
              fit="contain"
              src="/src/assets/images/vk.svg"
            >
            </q-img>
          </div>
        </div>
        <div class="row tw-m-3">
          <div class="col">
            <ul
              class="tw-list-disc tw-font-girloy-reg marker:tw-text-orange-400"
            >
              <li
                class="tw-pl-2"
                v-for="item in mainListDescr"
                v-html="item.text"
                :key="item.id"
              ></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <q-form class="col-12" @submit="onSubmit">
            <div class="row">
              <div class="col-12 col-md-3">
                <q-input
                  class="tw-mb-2 md:tw-pr-2"
                  square
                  outlined
                  v-model="form.name"
                  :rules="[
                    (val) => useRequired(val),
                    (val) => useMinLength(val, 2),
                  ]"
                  lazy-rules
                  label="Ваше імʼя"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input
                  class="tw-mb-2"
                  square
                  outlined
                  v-model="form.phone"
                  :rules="[
                    (val) => useRequired(val),
                    (val) => useValidPhoneNumber(val),
                  ]"
                  lazy-rules
                  label="+38(065)-431-8283"
                  mask="+38(###)-###-####"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-input
                  class="tw-mb-2 md:tw-px-2"
                  square
                  outlined
                  v-model="form.email"
                  :rules="[
                    (val) => useRequired(val),
                    (val) => useValidEmail(val),
                  ]"
                  lazy-rules
                  label="E-mail"
                />
              </div>
              <div class="col-12 col-md-3">
                <q-btn
                  type="submit"
                  style="width: 100%; height: 65%"
                  unelevated
                  square
                  class="tw-bg-orange tw-text-white tw-normal-case"
                  >Розпочати</q-btn
                >
              </div>
            </div>
          </q-form>
        </div>
      </div>
      <div
        class="col-3 tw-hidden md:tw-block tw-bg-bg-second tw-bg-no-repeat tw-bg-right tw-bg-contain"
      ></div>
    </div>
  </div>
  <div class="col-12 tw-px-5 tw-bg-light-grey">
    <div class="row tw-justify-center">
      <div class="col-12 col-md-9 tw-py-8">
        <div class="row tw-justify-center tw-font-girloy-reg">
          <div class="col-9">
            <div
              class="col-12 tw-text-xl md:tw-text-2xl tw-text-center md:tw-text-left tw-text-orange-400"
            >
              Практикум проходить на навчальній платформі Atom.
            </div>
            <div class="col-12 col-md-7 tw-mt-4 tw-text-center md:tw-text-left">
              <div class="tw-text-1xl tw-font-girloy-bold">
                Реєструйтесь зараз і отримуйте подарунок:
              </div>
              <div>
                1 клієнта на ведення рекламних кампаній Facebook та Instagram
                (можливість почати заробляти одразу після безкоштовного
                навчання)
              </div>
            </div>

            <div class="col-12 col-md-10 tw-mt-4 tw-hidden md:tw-block">
              <div class="row">
                <div
                  class="col tw-mr-2 tw-flex tw-justify-center tw-items-center"
                >
                  <q-card
                    :flat="false"
                    class="tw-flex tw-justify-center tw-p-5 tw-rounded-xl"
                  >
                    <q-btn
                      @click="showCourseModal"
                      style="width: 220px; height: 100%"
                      unelevated
                      square
                      class="tw-bg-orange tw-text-white tw-normal-case"
                      >Розпочати практикум</q-btn
                    >
                  </q-card>
                  <q-img
                    class="tw-ml-6 tw-mb-4"
                    style="min-width: 100px"
                    width="100px"
                    src="/src/assets/images/prize.svg"
                  >
                  </q-img>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-10 tw-mt-4 tw-block md:tw-hidden">
              <div class="row">
                <div class="col-12 tw-flex tw-justify-center tw-items-center">
                  <q-img
                    class="tw-ml-6 tw-mb-4"
                    style="max-width: 125px; max-height: 125px"
                    src="/src/assets/images/prize.svg"
                  >
                  </q-img>
                  <q-img
                    width="175px"
                    src="/src/assets/images/phone.png"
                  ></q-img>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <q-img
              class="tw-hidden md:tw-block"
              width="175px"
              src="/src/assets/images/phone.png"
            ></q-img>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-12 col-sm-9 tw-py-10 tw-px-5 sm:tw-px-0">
    <div class="row">
      <div
        class="col-12 tw-text-center md:tw-text-left tw-text-xl md:tw-text-3xl tw-font-girloy-bold tw-break-words"
      >
        6 відео, що можуть змінити ваше життя на краще
      </div>
      <div class="col-12">
        <div class="row tw-mx-3 tw-my-5">
          <div class="col tw-mr-3">
            <ul
              class="tw-list-disc marker:tw-text-orange-400 tw-flex tw-flex-col tw-flex-wrap md:tw-h-44"
            >
              <li
                v-for="item in videoListDescr"
                v-html="item.text"
                :key="item.id"
                class="tw-mb-4 tw-mr-8 tw-pl-2 tw-break-all"
              ></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 tw-text-center tw-text-xl tw-text-orange-400">
        Старт вже сьогодні
      </div>
      <div class="col-12 tw-mt-2">
        <div class="row">
          <div
            class="col-12 col-md-6 tw-flex tw-justify-center md:tw-justify-end"
          >
            <q-btn
              @click="showCourseModal"
              style="width: 250px; height: 100%"
              unelevated
              square
              class="tw-bg-orange tw-text-white tw-normal-case"
              >Розпочати</q-btn
            >
          </div>
          <div
            class="col-12 col-md-4 tw-flex tw-justify-center md:tw-justify-start tw-px-2 tw-pt-2 md:tw-pt-0 tw-font-bold tw-text-center"
          >
            Реєструйтесь у Telegram-боті та побачимось на практикумі
          </div>
        </div>
      </div>
    </div>
  </div>
  <AppCourseModal v-model:model-value="courseModal">
    <template #header> Отримайте доступ </template>
    <template #sub-title>
      До практикуму Вадима Короленка по налаштуванню рекламних кампаній у
      Facebook та Instagram
    </template>
  </AppCourseModal>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';

import AppSubHeader from 'src/components/navigation/headers/AppSubHeader.vue';

import AppCourseModal from 'src/components/modals/AppCourseModal.vue';

import {
  useRequired,
  useMinLength,
  useValidEmail,
  useValidPhoneNumber,
} from 'src/composables/validation/index.ts';

import { HEADING_TEXT } from 'src/constants/index.ts';

const form = reactive({
  name: '',
  phone: '',
  email: '',
});
const courseModal = ref(false);

const showCourseModal = () => (courseModal.value = true);

const onSubmit = () => {
  console.log(form);
};

const mainListDescr = [
  {
    id: 1,
    text: '<span class="tw-font-girloy-bold">Що таке трафік</span> і хто такий спеціаліст Facebook+lnstagram',
  },
  {
    id: 2,
    text: '<span class="tw-font-girloy-bold">4 кроки старту:</span> пошук клієнта, налаштування реклами ведення, масштабування',
  },
  {
    id: 3,
    text: '<span class="tw-font-girloy-bold">Практикум:</span> налаштування першої рекламної кампанії Facebook Ads наживо',
  },
  {
    id: 4,
    text: '<span class="tw-font-girloy-bold">Пошук перших клієнтів:</span> 6 способів із вкладеннями грошей і без',
  },
  {
    id: 5,
    text: '<span class="tw-font-girloy-bold">Як</span> спеціалісту <span class="tw-font-girloy-bold">вийти на прибуток</span> $3000 на місяць',
  },
];

const videoListDescr = [
  {
    id: 1,
    text: '<span class="tw-font-girloy-bold ">Разом</span> онлайн налаштуємо рекламу <br/> і розберемось в професії',
  },
  {
    id: 2,
    text: 'Зможете заробляти онлайн <span class="tw-font-girloy-bold ">з будь-якої <br/> точки світу</span>',
  },
  {
    id: 3,
    text: 'Розберемо разом <span class="tw-font-girloy-bold ">4 кроки до доходу</span> <br/> в $100 на день з демонстрацією',
  },
  {
    id: 4,
    text: '<span class="tw-font-girloy-bold ">Це безкоштовно!</span> Отримайте нову <br/> професію та онлайн-дохід',
  },
  {
    id: 5,
    text: '<span class="tw-font-girloy-bold ">Подарунок чекає:</span> можливість <br/> по завершенню отримати клієнта',
  },
  {
    id: 6,
    text: '<span class="tw-font-girloy-bold ">У вас вийде.</span> Виходить у тисяч людей <br/> віком з 14 по 65 років',
  },
];
</script>

<style lang="scss" scoped></style>
