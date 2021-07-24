<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Module } from '@vue-ioc/core';
import { Vue, Component } from 'vue-property-decorator';

import { HttpService } from '@/services/HttpService';

@Module({
  providers: [HttpService],
})
@Component
export default class App extends Vue {}
</script>
