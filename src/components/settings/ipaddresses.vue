<template>
  <v-dialog v-model="showDialog" max-width="400">
    <v-card>
      <v-card-title>
        <h2>IP settings</h2>
      </v-card-title>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn small right class="warning" @click="save">Save</v-btn>
        <v-btn small right class="error" @click="cancel">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { SettingDialogs } from "@/types";
import useOpenSettings from "@/use/openSettings";

export default defineComponent({
  name: "IpAddresses",
  setup() {
    const { closeSettings, onOpenSettings, showDialog } = useOpenSettings(
      SettingDialogs.ipaddresses
    );

    function cancel() {
      closeSettings();
    }

    function save() {
      closeSettings();
    }

    onOpenSettings();

    return {
      cancel,
      save,
      showDialog,
    };
  },
});
</script>
