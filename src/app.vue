<template>
  <v-app>
    <common-header />

    <v-main>
      <v-container>
        <common-alert type="aredn" title="AREDN" />
        <common-alert type="local" title="Local" />
        <NuxtPage />
      </v-container>
    </v-main>

    <v-footer>
      &copy; {{ new Date().getFullYear() }} Amateur Radio Emergency Data
      Network, Inc.
    </v-footer>

    <!-- <common-loader /> -->
    <!-- <common-error /> -->
    <!-- <common-apimismatch /> -->
    <settings-ipaddresses />
    <settings-location />
    <settings-meshrf />
    <settings-system />
  </v-app>
</template>
