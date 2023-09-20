<template>
  <div class="form-field">
    <v-container class="custom-container">
      <v-row class="custom-row">
        <span class="custom-span">เลขที่คำขอ</span>
        <v-col cols="12" sm="2">
          <v-text-field v-model="documentid" outlined dense> </v-text-field>
        </v-col>

        <span class="custom-span">/</span>
        <v-col cols="12" sm="2">
          <v-text-field v-model="year" outlined dense></v-text-field>
        </v-col>

        <span class="custom-span">วันที่</span>
        <v-col cols="12" sm="3">
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            :return-value.sync="date"
            lazy
            offset-y
            transition="scale-transition"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="date"
                outlined
                dense
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="menu = false">ยกเลิก</v-btn>
              <v-btn text color="primary" @click="$refs.menu.save(date)"
                >ยืนยัน</v-btn
              >
            </v-date-picker>
          </v-menu>
        </v-col>

        <v-col cols="12" sm="3" class="custom-col">
          {{ formattedDate }}
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "RequestNumber",

  data() {
    return {
      menu: false,
      date: "",
      currentDate: new Date(),
    };
  },
  computed: {
    formattedDate() {
      if (!this.date) {
        return ""; 
      }
      const dateObj = new Date(this.date);
      
      const options = {
        year: "numeric",
        era: "short",
        month: "long",
        day: "2-digit",
      };
      return dateObj.toLocaleDateString("th-TH-u-ca-buddhist", options);
    },
  },
  mounted() {
    if (!this.date) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().substr(0, 10); // รูปแบบวันที่ให้เป็น "YYYY-MM-DD"
      this.date = formattedDate;
    }
  },
};
</script>

<style scoped>
.custom-container {
  align-content: center;
  max-width: 800px;
  max-height: 100px;
}
.custom-row {
  margin-top: 10px;
  width: auto;
}
.custom-col {
  margin-top: 10px;
}
.form-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}
.custom-span {
  margin-bottom: 8px;
  margin-top: 20px;
}
.form-field {
  display: flex;
  flex-direction: column;
}
</style>
