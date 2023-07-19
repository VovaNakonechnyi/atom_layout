<template>
  <q-dialog
    :model-value="modelValue"
    @update:model-value="emit('update:modelValue', $event)"
  >
    <q-card style="max-width: 700px" class="tw-pb-10">
      <q-card-section class="row items-center q-pb-none">
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>

      <div class="col-12 tw-px-8 md:tw-px-12">
        <div class="row">
          <slot name="body"></slot>
        </div>
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
interface Props {
  modelValue?: boolean;
}

withDefaults(defineProps<Props>(), {
  modelValue: false,
});

const emit = defineEmits<{
  (e: 'update:modelValue', shown: boolean): void;
}>();
</script>
