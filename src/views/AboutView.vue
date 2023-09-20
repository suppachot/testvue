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

      <v-col cols="12" sm="2" class="custom-col">
        {{ formattedDate }}
      </v-col>
      <v-col cols="12" sm="1">
        <v-btn color="primary" @click="searchData">ค้นหา</v-btn>
      </v-col>
    </v-row>

    <v-tabs centered v-model="activeTab" v-if="searchResult">
      <v-tab v-for="link in links" :key="link" >
        {{ link }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="activeTab" v-if="searchResult ">
      <v-tab-item class="container" >
        <v-card-title class="custom-card-title" >
          <v-icon dark class="custom-icon">mdi-smart-card</v-icon
          >ข้อมูลผู้ขอยื่น
        </v-card-title>
        <PersonInformation
           :person="searchResult ? searchResult.person : null"  
        />

        <v-card-title class="custom-card-title" >
          <v-icon dark class="custom-icon">mdi-card-account-mail</v-icon
          >ข้อมูลติดต่อ
        </v-card-title>
        <Information
          :information="searchResult ? searchResult.information : null"
        />
      </v-tab-item>

      <v-tab-item class="container" >
        <v-card-title class="custom-card-title">
          <v-icon dark class="custom-icon">mdi-home-city-outline</v-icon>
          ข้อมูลสำนักงานใหญ่
        </v-card-title>
        <Adress
          :location_main="searchResult ? searchResult.location_main : null"
        />
        <Information
          :location_main="searchResult ? searchResult.location_main : null"
        />

        <div v-for="index in officeCount" :key="index" class="custom-block">
          <v-card-title class="custom-card-title">
            <v-icon dark class="custom-icon">mdi-home-city-outline</v-icon>
            ข้อมูลสำนักงาน {{ index }}
          </v-card-title>
          <Information
            :location_other="
              searchResult
                ? searchResult.location_other['location' + index]
                : null
            "
          >
            <template v-slot:default>
              <v-btn
                @click="AddInformations"
                color="success"
                class="d-sm-flex align-center"
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
                class="d-sm-flex align-center"
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

    <v-footer class="custom-footer">
      <v-btn
        color="success"
        class="custom-button"
        :disabled="isDataEmpty"
        @click="previewPdf"
      >
        <v-icon dark class="custom-icon">mdi-printer</v-icon>
        <span class="custom-textf">พิมพ์</span>
      </v-btn>
      <v-btn
        color="primary"
        class="custom-button"
        :disabled="!isDataEmpty"
        @click="storeData"
      >
        <v-icon dark class="custom-icon">mdi-content-save</v-icon>
        <span class="custom-textf">จัดเก็บ</span>
      </v-btn>
    </v-footer>
  </div>
</template>

<script>
import Appbar from "@/components/Widget/Appbar";
import SidebarMeun from "@/components/Widget/SidebarMeun";
import Information from "@/components/Widget/Information";
import PersonInformation from "@/components/Widget/PersonInformation";
import Adress from "@/components/Gobal/Adress";
import DocumentTableView from "./LicenseView/DocumentTableView";
import datalist from "@/static/datalist.json";
import { exportRequest } from "../utils/pdf/request";

export default {
  name: "AboutView",
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

      searchResult: null, //ค้นหาใน testdata obj
      isDataFound: true, // เพิ่มสถานะเพื่อติดตามว่าข้อมูลเจอหรือไม่

      datafield: [], // เก็บข้อมูล obj
      isDataEmpty: true, // ตัวแปรสถานะของ dataafiled
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
    //ค้นหาข้อมูลใน json
    searchData() {
      // ให้ค้นหาข้อมูลจาก testdata.json โดยเรียกใช้ฟังก์ชัน find
      this.searchResult = datalist.testdata.find((item) => {
        return item.documentid === this.documentid && item.year === this.year;
      });
      if (!this.searchResult) {
        this.searchResult = null;
        alert("ไม่พบข้อมูล");
      }
      // if (this.searchResult) {
      //   this.isDataFound = true; // ตั้งค่าให้ข้อมูลเจอ
      // } else {
      //   this.isDataFound = false; // ตั้งค่าให้ไม่พบข้อมูล
      //   this.searchResult = null;
      //   alert("ไม่พบข้อมูล");
      // }
    },
    //คำสัง่ button
    toggleStoreClicked() {
      this.storeClicked = !this.storeClicked;
    },
    storeData() {
      // เก็บข้อมูลใน datafield
      this.datafield = {
        documentid: this.documentid,
        year: this.year,
        date: this.date,
        person: this.searchResult ? this.searchResult.person : null,
        information: this.searchResult ? this.searchResult.information : null,
        objectives: this.objectives,
        location_main: this.searchResult
          ? this.searchResult.location_main
          : null,
        location_other: Object.assign(
          {},
          this.searchResult ? this.searchResult.location_other : null
        ),
      };
      this.isDataEmpty = false; // ตั้งค่า isDataEmpty เป็น false เมื่อมีข้อมูล
    },
    previewPdf() {
      let data = this.datafield;
      let obj = {
        documentid: data.documentid,
        year: data.year,
        date: data.date,
        formattedDate: this.formattedDate,
        person: {
          personid: data.person ? data.person.personid : null,
          province: data.person ? data.person.province : null,
          district: data.person ? data.person.district : null,
          intoname: data.person ? data.person.intoname : null,
          first: data.person ? data.person.first : null,
          last: data.person ? data.person.last : null,
          nationality: data.person ? data.person.nationality : null,
          age: data.person ? data.person.age : null,
        },
        information: {
          addressnumber: data.information
            ? data.information.addressnumber
            : null,
          moo: data.information ? data.information.moo : null,
          alley: data.information ? data.information.alley : null,
          alleyway: data.information ? data.information.alleyway : null,
          road: data.information ? data.information.road : null,
          province: data.information ? data.information.province : null,
          county: data.information ? data.information.county : null,
          district: data.information ? data.information.district : null,
          postalcode: data.information ? data.information.postalcode : null,
          phone: data.information ? data.information.phone : null,
        },
        location_main: {
          foundation_name: data.location_main
            ? data.location_main.foundation_name
            : null,
          addressnumber: data.location_main
            ? data.location_main.addressnumber
            : null,
          moo: data.location_main ? data.location_main.moo : null,
          alley: data.location_main ? data.location_main.alley : null,
          alleyway: data.location_main ? data.location_main.alleyway : null,
          road: data.location_main ? data.location_main.road : null,
          province: data.location_main ? data.location_main.province : null,
          county: data.location_main ? data.location_main.county : null,
          district: data.location_main ? data.location_main.district : null,
          postalcode: data.location_main ? data.location_main.postalcode : null,
          phone: data.location_main ? data.location_main.phone : null,
        },
        location_other: {
          location1: {
            addressnumber: data.location_other.location1
              ? data.location_other.location1.addressnumber
              : null,
            moo: data.location_other.location1
              ? data.location_other.location1.moo
              : null,
            alley: data.location_other.location1
              ? data.location_other.location1.alley
              : null,
            alleyway: data.location_other.location1
              ? data.location_other.location1.alleyway
              : null,
            road: data.location_other.location1
              ? data.location_other.location1.road
              : null,
            province: data.location_other.location1
              ? data.location_other.location1.province
              : null,
            county: data.location_other.location1
              ? data.location_other.location1.county
              : null,
            district: data.location_other.location1
              ? data.location_other.location1.district
              : null,
            postalcode: data.location_other.location1
              ? data.location_other.location1.postalcode
              : null,
            phone: data.location_other.location1
              ? data.location_other.location1.phone
              : null,
          },
          location2: {
            addressnumber: data.location_other.location2
              ? data.location_other.location2.addressnumber
              : null,
            moo: data.location_other.location2
              ? data.location_other.location2.moo
              : null,
            alley: data.location_other.location2
              ? data.location_other.location2.alley
              : null,
            alleyway: data.location_other.location2
              ? data.location_other.location2.alleyway
              : null,
            road: data.location_other.location2
              ? data.location_other.location2.road
              : null,
            province: data.location_other.location2
              ? data.location_other.location2.province
              : null,
            county: data.location_other.location2
              ? data.location_other.location2.county
              : null,
            district: data.location_other.location2
              ? data.location_other.location2.district
              : null,
            postalcode: data.location_other.location2
              ? data.location_other.location2.postalcode
              : null,
            phone: data.location_other.location2
              ? data.location_other.location2.phone
              : null,
          },
        },
      };
      console.log(obj);
      exportRequest(obj);
    },
  },
  computed: {
    formattedDate() {
      if (!this.date) {
        return " ";
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
    canPrint() {
      return this.datafield !== null;
    },
    canSave() {
      return this.datafield !== null;
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
.custom-textf {
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
.custom-footer {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
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
