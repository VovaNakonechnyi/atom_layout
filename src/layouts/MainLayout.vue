<template>
  <q-layout view="lHh Lpr lFf">
    <div>
      <q-page-container>
        <q-page class="row tw-justify-center tw-pt-10">
          <router-view />
        </q-page>
      </q-page-container>
      <component :is="footer" />
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const footer = computed(() => route.meta.footer ?? {});
</script>

<script lang="ts">
import AppFooter from 'src/components/navigation/footers/AppFooter.vue';
import AppInfoBlocksFooter from 'src/components/navigation/footers/AppInfoBlocksFooter.vue';
export default {
  components: {
    AppFooter,
    AppInfoBlocksFooter,
  },
};
</script>
