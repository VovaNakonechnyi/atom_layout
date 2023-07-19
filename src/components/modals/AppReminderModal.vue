<template>
  <AppModal
    :model-value="modalShown"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <template #body>
      <div
        class="col-12 tw-flex tw-justify-center sm:tw-justify-start col-sm-1 tw-pb-3 sm:tw-pb-0"
      >
        <q-img width="30px" height="30px" :src="modalIcon"></q-img>
      </div>
      <div
        class="col-12 col-sm-11 tw-text-center sm:tw-text-left tw-pl-0 sm:tw-pl-1"
      >
        {{ modalText }}
      </div>
    </template>
  </AppModal>
</template>

<script lang="ts" setup>
import { computed, toRefs } from 'vue';
import AppModal from 'src/components/modals/AppModal.vue';

interface Props {
  msgStatus?: string;
  modalShown?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  msgStatus: '',
  modalShown: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', shown: boolean): void;
}>();

const { msgStatus } = toRefs(props);

const modalIcon = computed(() => `src/assets/images/${msgStatus.value}.svg`);

const modalText = computed(() => {
  if (msgStatus.value)
    switch (msgStatus.value) {
      case 'success':
        return 'Дякуємо! З вами зв’яжеться менеджер і надішле подарунок';
      case 'warning':
        return 'Час спливає. У вас залишилось половина часу, щоб додивитись';
      case 'error':
        return 'Додивіться поточне відео, щоб отримати доступ до наступних';
    }
  return '';
});
</script>
