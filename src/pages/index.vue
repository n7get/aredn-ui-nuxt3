<template>
  <div>
    <v-row>
      <v-col cols="12">
        <status-systeminfo></status-systeminfo>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6"><status-ipaddresses /></v-col>
      <v-col cols="12" sm="6"><status-meshrf /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6"><status-location /></v-col>
      <v-col cols="12" sm="6"><status-olsrinfo /></v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="6" md="4"><status-filesysteminfo /></v-col>
      <v-col cols="12" sm="6" md="4"><status-performance /></v-col>
      <v-col cols="12" sm="6" md="4"><status-memory /></v-col>
    </v-row>

    <!-- <v-row>
      <v-spacer></v-spacer>
    </v-row> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import { mapState } from "pinia";
// import { useAppStore } from "@/stores/AppStore";
// import { useNodeStore } from "@/stores/NodeStore";

export default defineComponent({
  name: "status",
  // head() {
  //   return {
  //     title: this.nodeName + ' [' + this.$options.name + ']',
  //   };
  // },
  methods: {
    // ...mapActions(['expireResources', 'loadResources', 'pageResources']),
  },
  computed: {
    // ...mapGetters(['nodeName']),
  },
  // created() {
  //   const resources = [
  //     'ip',
  //     'MeshRF',
  //     'location',
  //     'sysinfo',
  //     'olsr',
  //     'storage',
  //     'memory',
  //   ]

  //   this.$nuxt.$on('refresh-node', () => {
  //     this.expireResources(resources)
  //     this.loadResources()
  //   })

  //   this.pageResources(resources)
  // },
  // mounted() {
  //   this.loadResources()
  // },
});
</script>
