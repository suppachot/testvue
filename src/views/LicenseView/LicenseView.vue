<template>
  <div>
    <SidebarMeun />
    <Appbar />

    <v-row class="custom-row1">
      <span class="custom-span">เลขที่คำขอ</span>
      <v-col cols="12" sm="2">
        <v-text-field v-model="documentid" outlined dense> </v-text-field>
      </v-col>

      <span class="custom-span">/</span>
      <v-col cols="12" sm="2">
        <v-text-field v-model="year" outlined dense></v-text-field>
      </v-col>

      <span class="custom-span">วันที่</span>
      <v-col cols="12" sm="2">
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

    <v-tabs centered v-model="activeTab">
      <v-tab v-for="link in links" :key="link">
        {{ link }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="activeTab">
      <v-tab-item class="container">
        <v-card-title class="custom-card-title">
          <v-icon dark class="custom-icon">mdi-smart-card</v-icon
          >ข้อมูลผู้ขอยื่น
        </v-card-title>
        <PersonInformation />

        <v-card-title class="custom-card-title">
          <v-icon dark class="custom-icon">mdi-card-account-mail</v-icon
          >ข้อมูลติดต่อ
        </v-card-title>
        <Information />
      </v-tab-item>

      <v-tab-item class="container">
        <v-card-title class="custom-card-title">
          <v-icon dark class="custom-icon">mdi-home-city-outline</v-icon>
          ข้อมูลสำนักงานใหญ่
        </v-card-title>
        <Adress />
        <Information />
        <div v-for="index in officeCount" :key="index" class="custom-block">
          <v-card-title class="custom-card-title">
            <v-icon dark class="custom-icon">mdi-home-city-outline</v-icon>
            ข้อมูลสำนักงาน {{ index }}
          </v-card-title>
          <Information>
            <template v-slot:default>
              <v-btn
                @click="AddInformations"
                color="success"
                class="d-sm-flex align-center mt-2"
              >
                <v-icon dark class="custom-icon"
                  >mdi-plus-circle-outline</v-icon
                >
                <span class="custom-text">เพิ่ม</span>
              </v-btn>
            </template>
          </Information>
        </div>
      </v-tab-item>

      <v-tab-item class="container">
        <v-card-title class="custom-card-title">
          <v-icon dark class="custom-icon">mdi-clipboard-list </v-icon>
          ข้อมูลวัตถุประสงค์
        </v-card-title>
        <div
          v-for="(objective, index) in objectives"
          :key="index"
          class="custom-block2"
        >
          <v-row class="my-custom-row">
            <v-col cols="12" sm="3">
              <v-select
                v-model="objective.selectedItem"
                :items="objectiveItem"
                label="วัตถุประสงค์"
                outlined
                dense
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="objective.value"
                :label="`วัตถุประสงค์ที่ ${index + 1}`"
                outlined
                dense
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn
                @click="AddObjective"
                color="success"
                class="d-sm-flex align-center mt-2"
              >
                <v-icon dark class="custom-icon"
                  >mdi-plus-circle-outline</v-icon
                >
                <span class="custom-text">เพิ่ม</span>
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-tab-item>

      <v-tab-item class="container">
        <v-card-title class="custom-card-title"> เอกสารประกอบ </v-card-title>
        <DocumentTableView :documents="documentsTable" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import Appbar from "@/components/Widget/Appbar";
import SidebarMeun from "@/components/Widget/SidebarMeun";
import Information from "@/components/Widget/Information";
import PersonInformation from "@/components/Widget/PersonInformation";
import Adress from "@/components/Gobal/Adress";
import DocumentTableView from "./DocumentTableView";
import datalist from "@/static/datalist.json";

export default {
  name: "LicenseView",

  components: {
    Appbar,
    SidebarMeun,
    Information,
    PersonInformation,
    Adress,
    DocumentTableView,
  },
  data() {
    return {
      documentid: "",
      year: "",
      date: "",
      menu: false,
      currentDate: new Date(),
      links: [
        "ผู้ยื่นคำขอ",
        "ข้อมูลมูลนิธิ",
        "วัตถุประสงค์มูลนิธิ",
        "เอกสารประกอบ",
      ],
      activeTab: 0,
      officeCount: 1,
      objectiveItem: ["วัตถุประสงค์"],
      objectives: 1,
      documentsTable: datalist.documents,
    };
  },
  methods: {
    AddInformations() {
      if (this.officeCount < 3) {
        this.officeCount++;
      } else {
        alert("ไม่สามารถเพิ่มข้อมูลสำนักงานได้เกิน 3 สำนักงาน");
      }
    },
    AddObjective() {
      if (this.objectives < 5) {
        this.objectives++;
      } else {
        alert("ไม่สามารถเพิ่มข้อมูลวัตถุประสงค์ได้เกิน 5 วัตถุประสงค์");
      }
    },
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
.custom-row {
  margin-top: 10px;
  width: auto;
}
.custom-row1 {
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 20px;
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
.workplace {
  font-size: 14px; /* ขนาดข้อความสถานที่ปฎิบัติงาน */
  color: #080808; /* สีข้อความสถานที่ปฎิบัติงาน */
  margin-top: 4px; /* ระยะห่างด้านบนของข้อความสถานที่ปฎิบัติงาน */
  margin-left: 600px;
}
.custom-card-title {
  color: white;
  background-color: #4db2be;
  font-size: 20px;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
}
.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -35px;
}
.my-custom-row {
  margin-top: 10px;
  margin-bottom: -35px;
}
.custom-icon {
  margin-right: 5px;
  font-size: 24px;
}
.custom-text {
  font-size: 18px;
}
.custom-box2 {
  height: 200px;
}
.container {
  align-content: center;
}
.custom-container {
  align-content: center;
  max-width: 1100px;
  max-height: 100px;
}
@media (max-width: 600px) {
  /* ในกรณีที่ความกว้างของหน้าจอเล็กกว่าหรือเท่ากับ 600px */
  .custom-app-bar .heading {
    font-size: 18px; /* เปลี่ยนขนาดตัวอักษรให้เหมาะสมกับมือถือ */
  }
  .custom-app-bar .align-right {
    display: none; /* ซ่อนสถานที่ปฎิบัติงานในมือถือ */
  }
  .custom-span {
    display: block;
    margin-bottom: 10px; /* ปรับค่าความระยะห่างตามที่เหมาะสม */
    margin-top: -15px;
  }
  .custom-card-title {
    margin-top: 30px;
  }
  .my-custom-row {
    margin-top: 30px;
    margin-bottom: -35px;
  }
}
</style>
