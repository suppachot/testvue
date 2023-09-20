<template>
  <div>
      <v-row class="my-custom-row">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="foundation_name"
            label="ขอจัดตั้งมูลนิธิ"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "Adress",
  data() {
    return {
      foundation_name: "",
    };
  },
  props:{
    location_main: Object,
  },
  watch: {
    location_main: {
      handler(newData) {
        if (newData) {
          this.foundation_name = newData.foundation_name || "";
        }
      },
      deep: true, 
    },
  },
};
</script>

<style scoped>
.my-custom-row {
  margin-top:10px ;
  margin-bottom: -35px;
}
@media (max-width: 600px) {
  .my-custom-row {
    flex-direction: column; /* จัดเรียงแนวดิ่งเมื่อขนาดหน้าจอเล็ก */
  }
  .my-custom-row .v-col {
    width: 100%; /* กำหนดความกว้างเต็มของ v-col บนหน้าจอเล็ก */
  }
}
</style>
