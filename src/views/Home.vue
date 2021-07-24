<template>
  <div>
    {{ title }}
    <v-text-field label="Regular" :value="userName" @change="setUserName" />
    <hello-component :value="ip" />
  </div>
</template>

<script lang="ts">
import { HttpService } from '@/services/HttpService';
import { Inject } from '@vue-ioc/core';
import { Vue, Component, Watch } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

import HelloComponent from '@/components/HelloWorld.vue';

const UserStore = namespace('user');

@Component({
  name: 'Home',
  components: { HelloComponent },
})
export default class Home extends Vue {
  title = 'hello';
  ip = '1';

  @Inject() private readonly httpService!: HttpService;

  @UserStore.State(state => state.name) readonly userName!: string;
  @UserStore.Mutation('setName') setUserName!: (name: string) => void;

  async mounted() {}

  @Watch('userName')
  watchEvent(newValue: string, oldValue: string): void {
    console.log('changed', `${oldValue} -> ${newValue}`);
  }

  get printTitle(): string {
    return `${this.title} ${this.userName}`;
  }
}
</script>
