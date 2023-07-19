<template>
  <AppSubHeader />
  <div class="col-12 col-md-9 tw-px-2 md:tw-px-0 tw-mb-10 tw-h-64">
    <div class="row">
      <div class="col-12 col-md-8">
        <div class="row">
          <div class="col-12 tw-text-2xl tw-text-orange-400">
            Реєстрація на практикум
          </div>
          <div
            class="col-12 tw-text-xl sm:tw-text-3xl tw-text-center md:tw-text-left tw-font-girloy-bold tw-mt-6"
            v-html="HEADING_TEXT"
          ></div>
          <div class="col-12 tw-flex tw-justify-center md:tw-hidden">
            <q-img
              class=""
              width="150px"
              src="/src/assets/images/phone.png"
            ></q-img>
          </div>
          <div
            class="col-12 tw-mt-6 tw-py-2 tw-pl-2 tw-border-l-2 tw-border-l-orange-400"
          >
            <div class="tw-text-md tw-font-girloy-bold">Майже готово!</div>
            <div class="tw-font-normal">
              Щоб отримати доступ до практикуму, переходьте і підписуйтесь
              на бот
            </div>
          </div>
          <div
            class="col-12 tw-flex tw-items-center md:tw-items-start md:tw-justify-start tw-flex-col tw-font-girloy-bold tw-mt-6"
          >
            <div class="tw-mb-2 tw-text-center md:tw-text-left">
              Саме там ви будете отримувати посилання до серії з 6 відео
              та додаткові матеріали
            </div>
            <q-btn
              unelevated
              square
              class="tg-btn tw-normal-case tw-font-girloy-reg tw-text-xs tw-px-16 tw-py-3 tw-w-64"
            >
              Відкрити Telegam
            </q-btn>
          </div>
        </div>
      </div>
      <div class="tw-hidden md:tw-block">
        <q-img width="175px" src="/src/assets/images/phone.png"></q-img>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AppSubHeader from 'src/components/navigation/headers/AppSubHeader.vue';

import { HEADING_TEXT } from 'src/constants/index.ts';
</script>

<style lang="scss" scoped>
$tg-btn-color: #229ed9;
.tg-btn {
  background-color: $tg-btn-color;
  color: white;
  transition-duration: 0.2s;
  &:hover {
    background-color: white;
    color: $tg-btn-color;
    border: 1px solid $tg-btn-color;
    transition-duration: 0.2s;
  }
}
</style>
