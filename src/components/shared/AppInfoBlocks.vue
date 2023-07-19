<template>
  <div class="row tw-justify-center tw-mb-10">
    <div class="col-12 col-md-9">
      <div class="row tw-justify-center">
        <div
          v-for="item in info"
          :key="item.id"
          :class="item.class"
          class="col-12 col-sm-6 col-md-3 tw-pb-0.5 md:tw-pb-0"
        >
          <q-card
            square
            class="tw-bg-light-grey-second tw-min-h-social-media-blocks"
          >
            <q-card-section class="tw-py-10">
              <div class="tw-flex tw-justify-center">
                <q-img
                  width="35px"
                  :src="`/src/assets/images/${item.img}.svg`"
                ></q-img>
              </div>
              <div class="tw-h-10 tw-mt-2 tw-text-center">
                {{ item.text }}
              </div>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
interface Info {
  id: number;
  text: string;
  img: string;
  class: string;
}

interface Props {
  info: Info[];
}

defineProps<Props>();
</script>
