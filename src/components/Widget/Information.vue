<template>
  <div>
    <v-row class="my-custom-row">
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="addressnumber"
          label="บ้านเลขที่"
          dense
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          v-model="moo"
          label="หมู่ที่"
          dense
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="my-custom-row">
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="alley"
          label="ตรอก"
          dense
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field
          v-model="alleyway"
          label="ซอย"
          dense
          outlined
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3">
        <v-text-field v-model="road" label="ถนน" dense outlined></v-text-field>
      </v-col>
    </v-row>

    <v-row class="my-custom-row">
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="province"
          label="จังหวัด"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="county"
          label="อำเภอ/เขต"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="district"
          label="ตำบล/แขวง"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="postalcode"
          label="รหัสไปรษณีย์"
          dense
          outlined
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row class="my-custom-row">
      <v-col cols="12" sm="3">
        <v-text-field
          v-model="phone"
          label="เบอร์โทรศัพท์"
          dense
          outlined
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="3">
        <slot></slot>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Information",
  data() {
    return {
      addressnumber: "",
      moo: "",
      alley: "",
      alleyway: "",
      road: "",
      province: "",
      county: "",
      district: "",
      postalcode: "",
      phone: "",
    };
  },
  props: {
    information: Object,
    location_main: Object,
    location_other: Object,
  },
  watch: {
    information: {
      handler(newData) {
        if (newData) {
          this.addressnumber = newData.addressnumber || "";
          this.moo = newData.moo || "";
          this.alley = newData.alley || "";
          this.alleyway = newData.alleyway || "";
          this.road = newData.road || "";
          this.province = newData.province || "";
          this.county = newData.county || "";
          this.district = newData.district || "";
          this.postalcode = newData.postalcode || "";
          this.phone = newData.phone || "";
        }
      },
      deep: true,
    },
    location_main: {
      handler(newData) {
        if (newData) {
          this.addressnumber = newData.addressnumber || "";
          this.moo = newData.moo || "";
          this.alley = newData.alley || "";
          this.alleyway = newData.alleyway || "";
          this.road = newData.road || "";
          this.province = newData.province || "";
          this.county = newData.county || "";
          this.district = newData.district || "";
          this.postalcode = newData.postalcode || "";
          this.phone = newData.phone || "";
        }
      },
      deep: true,
    },
    location_other: {
      handler(newData) {
        if (newData) {
          this.addressnumber = newData.addressnumber || "";
          this.moo = newData.moo || "";
          this.alley = newData.alley || "";
          this.alleyway = newData.alleyway || "";
          this.road = newData.road || "";
          this.province = newData.province || "";
          this.county = newData.county || "";
          this.district = newData.district || "";
          this.postalcode = newData.postalcode || "";
          this.phone = newData.phone || "";
        }
      },
      deep: true,
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
    flex-direction: column;
  }
  .my-custom-row .v-col {
    width: 100%; 
    margin-bottom: -45px;
  }
}
</style>
