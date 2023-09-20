<template>
    <v-app-bar app class="custom-app-bar">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="heading">จัดทำคำขออนุญาติ ม.น.1</v-toolbar-title>
      <span class="align-right" >สถานที่ปฎิบัติงาน: อำเภอเมืองปทุมธานี</span>
    </v-app-bar>
</template>
<script>
export default {
  name: "Appbar",
};
</script>

<style scoped>
.heading {
  font-size: 24px;
  color: black;
  padding: 10px;
}
.align-right {
  text-align: right;
  flex: 1;
}
@media (max-width: 600px) {
  /* ในกรณีที่ความกว้างของหน้าจอเล็กกว่าหรือเท่ากับ 600px */
  .custom-app-bar .heading {
    font-size: 18px; /* เปลี่ยนขนาดตัวอักษรให้เหมาะสมกับมือถือ */
  }
  .custom-app-bar .align-right {
    display: none; /* ซ่อนสถานที่ปฎิบัติงานในมือถือ */
  }
}

</style>