<template>
  <div>
      <v-row class="my-custom-row">
        <v-col cols="12" sm="3" >
          <v-text-field
            v-model="personid"
            label="เลขบัตรประจำตัวประชาชน"
            dense
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="province"
            label="จังหวัด ที่ออกบัตร"
            dense
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="district"
            label="อำเภอ/เขต ที่ออกบัตร"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="my-custom-row">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="intoname"
            label="คำนำหน้าชื่อ"
            dense
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="first"
            label="ชื่อตัว"
            dense
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="last"
            label="ชื่อสกุล"
            dense
            outlined
          ></v-text-field>
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-model="nationality"
            label="สัญชาติ"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row class="my-custom-row">
        <v-col cols="12" sm="3">
          <v-text-field
            v-model="age"
            label="อายุ"
            dense
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  name: "PersonInformation",
  data() {
    return {
      personid: "",
      province: "",
      district: "",
      intoname: "",
      first: "",
      last: "",
      nationality: "",
      age: "",
    };
  },
  props: {
    person: Object, 
  },

  watch: {
    // ตรวจสอบการเปลี่ยนแปลงใน personData
    person: {
      handler(newData) {
        // ถ้ามีข้อมูลใหม่ถูกส่งมา
        if (newData) {
          // อัปเดตค่า data ของคอมโพเนนต์
          this.personid = newData.personid || "";
          this.province = newData.province || "";
          this.district = newData.district || "";
          this.intoname = newData.intoname || "";
          this.first = newData.first || "";
          this.last = newData.last || "";
          this.nationality = newData.nationality || "";
          this.age = newData.age || "";
        }
      },
      deep: true, // ให้ตรวจสอบการเปลี่ยนแปลงใน property ภายใน personData
    },
  },
};
</script>

<style scoped>
.my-custom-row {
  margin-top: 15px;
  margin-bottom: -35px;
}
@media (max-width: 600px) {
  .my-custom-row {
    display: flex;
    flex-direction: column; /* จัดเรียงแนวดิ่งเมื่อขนาดหน้าจอเล็ก */
    /*margin-bottom: auto;*/
  }
  .my-custom-row .v-col {
    width: 100%; 
    margin-bottom: -50px;

  }
}
</style>
