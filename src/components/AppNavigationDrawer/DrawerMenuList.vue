<template>
  <v-navigation-drawer permanent>
    <v-list>
      <v-list-item>
        <v-avatar size="200">
          <v-img :src="require('../../assets/logo.png')"></v-img>
        </v-avatar>
      </v-list-item>

      <v-list-item link>
        <v-list-item-content>
          <v-list-item-title class="text-h6"> PC Build Now </v-list-item-title>
          <v-list-item-subtitle>来装机吧！</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list nav dense>
      <v-list-item-group mandatory v-model="selectedItem" color="primary">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-spacer></v-spacer>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    selectedItem: 0,
    items: [
      { text: "配置单生成", icon: "mdi-pen" },
      { text: "历史配置", icon: "mdi-history" },
      { text: "配置单集市", icon: "mdi-store" },
      { text: "关于 Build PC Now", icon: "mdi-information-outline" },
    ],
  }),
}
</script>
