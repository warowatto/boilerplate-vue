<template>
  <v-container>
    {{ value }}

    <v-text-field label="Regular" v-model="value" />
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop, PropSync } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop()
  value!: string;

  private setUpdateValue(value: string) {}
}
</script>
