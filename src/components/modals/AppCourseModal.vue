<template>
  <AppModal
    :model-value="modalShown"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #body>
      <div
        class="flex tw-justify-center tw-text-center col-12 tw-text-3xl tw-text-orange-400 tw-font-girloy-med"
      >
        <slot name="header"></slot>
      </div>
      <div
        class="flex tw-justify-center col-12 tw-text-md tw-text-center tw-py-5"
      >
        <slot name="sub-title"></slot>
      </div>
      <div class="flex tw-justify-center col-12">
        <div class="row">
          <q-form class="col-12" @submit="onSubmit">
            <div class="row">
              <div class="col-12">
                <q-input
                  class="tw-mb-2"
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
              <div class="col-12">
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
              <div class="col-12">
                <q-input
                  class="tw-mb-2"
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
              <div class="col-12">
                <q-btn
                  type="submit"
                  style="width: 100%; height: 75%"
                  unelevated
                  square
                  class="tw-bg-orange tw-text-white tw-normal-case"
                  >Отримати доступ</q-btn
                >
              </div>
            </div>
          </q-form>
        </div>
      </div>
    </template>
  </AppModal>
</template>

<script lang="ts" setup>
import AppModal from 'src/components/modals/AppModal.vue';

import {
  useRequired,
  useMinLength,
  useValidEmail,
  useValidPhoneNumber,
} from 'src/composables/validation/index.ts';
import { reactive } from 'vue';

interface Props {
  modalShown?: boolean;
}

withDefaults(defineProps<Props>(), {
  modalShown: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', shown: boolean): void;
}>();

const form = reactive({
  name: '',
  phone: '',
  email: '',
});

const onSubmit = () => {
  console.log(form);
};
</script>
