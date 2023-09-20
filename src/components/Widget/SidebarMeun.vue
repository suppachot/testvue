<template>
  <v-navigation-drawer app class="custom-sidebar">
    <h1 class="sidebar-heading">ระบบงานมูลนิธิ</h1>
    <v-list  class="list-item">
      <v-list-item to="/license">
        <v-list-item-title  class="item-title" >จัดทำคำขออนุญาติ ม.น.1</v-list-item-title>
      </v-list-item>
      <v-list-item to="/about">
        <v-list-item-title class="item-title" >บันทึกผลการพิจารณา</v-list-item-title>
      </v-list-item>
      <v-list-item >
        <v-list-item-title class="item-title" >จัดทำใบขออนุญาติ</v-list-item-title>
      </v-list-item>
      <v-list-item >
        <v-list-item-title class="item-title" >บันทึกผลการลงนาม</v-list-item-title>
      </v-list-item>
      <v-list-item >
        <v-list-item-title class="item-title" >จัดทำใบเสร็จ</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "SidebarMeun",
};
</script>

<style scoped>
.custom-sidebar {
  background-image: url("@/assets/photos/sidebar-bg.jpg"); 
  background-size: cover;
  background-repeat: no-repeat;
  color: #fff; 
  width: 250px; 
}
.sidebar-heading {
  font-size: 24px;
  padding: 20px; 
}
.list-item {
  width: 250px;
}
.item-title {
  color: #fff; 
}
</style>
