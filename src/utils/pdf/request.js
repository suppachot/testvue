import pdf from "@/plugins/pdf";

function exportRequest(obj) {
  const info = {
      documentid: obj.documentid,
      year: obj.year,
      date: obj.date,
      formattedDate: obj.formattedDate,
      //person
      personid: obj.person.personid,
      province: obj.person.province,
      district: obj.person.district,
      intoname: obj.person.intoname,
      first: obj.person.first,
      last: obj.person.last,
      nationality : obj.person.nationality,
      age: obj.person.age,
      //information
      addressnumber: obj.information.addressnumber,
      moo: obj.information.moo,
      alley: obj.information.alley,
      alleyway: obj.information.alleyway,
      road: obj.information.road,
      province_in: obj.information.province,
      county: obj.information.county,
      district_in: obj.information.district,
      postalcode: obj.information.postalcode,
      phone : obj.information.phone,
      //location_main
      foundation_name: obj.location_main.foundation_name,
      addressnumber_lo: obj.location_main.addressnumber,
      moo_lo: obj.location_main.moo,
      alley_lo: obj.location_main.alley,
      alleyway_lo: obj.location_main.alleyway,
      road_lo: obj.location_main.road,
      province_in_lo: obj.location_main.province,
      county_lo: obj.location_main.county,
      district_in_lo: obj.location_main.district,
      postalcode_lo: obj.location_main.postalcode,
      phone_lo : obj.location_main.phone,
      //location_other
      addressnumber_lo1: obj.location_other.location1.addressnumber,
      moo_lo1: obj.location_other.location1.moo,
      alley_lo1: obj.location_other.location1.alley,
      alleyway_lo1: obj.location_other.location1.alleyway,
      road_lo1: obj.location_other.location1.road,
      province_in_lo1: obj.location_other.location1.province,
      county_lo1: obj.location_other.location1.county,
      district_in_lo1: obj.location_other.location1.district,
      postalcode_lo1: obj.location_other.location1.postalcode,
      phone_lo1 : obj.location_other.location1.phone,

    cc: "ประจวบคีรีขันธ์",
    pid: "7-7777-99999-33-3",
    do: 5,
    no: "85562",
    headwrite:"ศูนย์บริการประชาชน",
    logo: require('@/static/image.json').logo,
  };
  const dateParts = obj.formattedDate.split(' ');
  const editday = dateParts[0]; // วันที่
  const editmonth = dateParts[1]; // เดือน
  const edityear = dateParts[3]; // ปี
 
  const docDefinition = {
    pageMargins: [50, 70, 50, 0],
    content: [
      {
        text: `ม.น.1`,
        fontSize: 18,
        bold: true,
        relativePosition: { x: 470, y: -55 },
      },
      {
        image: info.logo,
        width: 70,
        height: 80,
        absolutePosition: { x: 263, y: 42 },
      },
      {
        table: {
          widths: [149],
          body: [
            [
              {
                text: `คำขอที่${'.'.repeat(48)}\nรับวันที่${'.'.repeat(
                  50,
                )}\nลงชื่อ ${'.'.repeat(44)}ผู้รับ`,
                fontSize: 14,
                lineHeight: 1.1,
                margin: [5, 0, 0, 0],
              },
            ],
          ],
        },
        layout: {
          paddingTop: function (i, node) {
            return 5
          },
          paddingBottom: function (i, node) {
            return 7
          },
          hLineWidth: function () {
            return 0.2
          },
          vLineWidth: function () {
            return 0.2
          },
        },
        margin: [347, 0, 0, 0],
      },
      {
        text: `${info.documentid}/${info.year}`,
        bold: true,
        fontSize:14,
        relativePosition: { x: 390, y: -60 },
      },
      {
        text: `${editday} ${editmonth} ${edityear}`,
        bold: true,
        fontSize:14,
        relativePosition: { x: 390, y: -44 },
      },
      {
        text: `คำขอจดทะเบียนจัดตั้งมูลนิธิ`,
        alignment: "center",
        fontSize: 24,
        bold: true,
        margin: [0, 0, 0, 0],
      },
      // Child
      {
        text: `เขียนที่${".".repeat(76)}`,
        margin: [282, 5, 0, 0],
      },
      {
        text: info.headwrite,
        bold: true,
        relativePosition: { x: 340, y: -27 },
      },
      {
        text: `วันที่${".".repeat(24)}เดือน${".".repeat(33)}พ.ศ. ${".".repeat(
          24
        )}`,
        margin: [236, 0, 0, 0],
      },
      {
        text: `${editday}`,
        bold: true,
        relativePosition: { x: 270, y: -27  },
      },
      {
        text: `${editmonth}`,
        bold: true,
        relativePosition: { x: 340, y: -27  },
      },
      {
        text: `${edityear}`,
        bold: true,
        relativePosition: { x: 450, y: -27  },
      },
      {
        text: `ข้าพเจ้า${".".repeat(80)}ชื่อสกุล${".".repeat(77)}`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `${info.intoname} ${info.first}`,
        bold: true,
        relativePosition: { x: 125, y: -27  },
      },
      {
        text: info.last,
        bold: true,
        relativePosition: { x: 340, y: -27  },
      },
      {
        text: `สัญชาติ${".".repeat(60)}อายุ${".".repeat(
          10
        )}ปี บัตรประจำตัว${".".repeat(50)}เลขที่${".".repeat(28)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.nationality,
        bold: true,
        relativePosition: { x: 75, y: -27  },
      },
      {
        text: info.age,
        bold: true,
        relativePosition: { x: 195, y: -27  },
      },
      {
        text: info.personid,
        bold: true,
        relativePosition: { x: 290, y: -27  },
      },
      {
        text: info.no,
        bold: true,
        relativePosition: { x: 430, y: -27  },
      },
      {
        text: `ออกให้ ณ อำเภอ/เขต${".".repeat(75)}จังหวัด${".".repeat(80)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.district,
        bold: true,
        relativePosition: { x: 120, y: -27  },
      },
      {
        text: info.province,
        bold: true,
        relativePosition: { x: 325, y: -27  },
      },
      {
        text: `อยู่บ้านเลขที่${".".repeat(35)}หมู่ที่${".".repeat(
          21
        )}ตรอก/ซอย${".".repeat(100)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.addressnumber,
        bold: true,
        relativePosition: { x: 70, y: -27  },
      },
      {
        text: info.moo,
        bold: true,
        relativePosition: { x: 175, y: -27  },
      },
      {
        text: info.alley,
        bold: true,
        relativePosition: { x: 270, y: -27  },
      },
      {
        text: `ถนน${".".repeat(50)}ตำบล/แขวง${".".repeat(
          50
        )}อำเภอ/เขต${".".repeat(57)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.road,
        bold: true,
        relativePosition: { x: 38, y: -27  },
      },
      {
        text: info.district_in,
        bold: true,
        relativePosition: { x: 205, y: -27  },
      },
      {
        text: info.county,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `จังหวัด${".".repeat(60)}รหัสไปรษณีย์${".".repeat(
          40
        )}โทรศัพท์${".".repeat(55)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.province_in,
        bold: true,
        relativePosition: { x: 40, y: -27  },
      },
      {
        text: info.postalcode,
        bold: true,
        relativePosition: { x: 240, y: -27  },
      },
      {
        text: info.phone,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `ขอยื่นจัดตั้งมูลนิธิ ชื่อ${".".repeat(147)}`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `มูลนิธิ ${info.foundation_name}`,
        bold: true,
        relativePosition: { x: 170, y: -27  },
      },
      {
        text: `${".".repeat(202)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `${".".repeat(202)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `สำนักงานใหญ่ของมูลนิธิ ตั้งอยู่เลขที่${".".repeat(
          25
        )}หมู่ที่${".".repeat(20)}ตรอก/ซอย${".".repeat(52)}`,
        margin: [50, 0, 0, 0],
      },
      {
        text: info.addressnumber_lo,
        bold: true,
        relativePosition: { x: 220, y: -27  },
      },
      {
        text: info.moo_lo,
        bold: true,
        relativePosition: { x: 285, y: -27  },
      },
      {
        text: info.alley_lo,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `ถนน${".".repeat(50)}ตำบล/แขวง${".".repeat(
          50
        )}อำเภอ/เขต${".".repeat(57)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.road_lo,
        bold: true,
        relativePosition: { x: 38, y: -27  },
      },
      {
        text: info.district_in_lo,
        bold: true,
        relativePosition: { x: 205, y: -27  },
      },
      {
        text: info.county_lo,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `จังหวัด${".".repeat(60)}รหัสไปรษณีย์${".".repeat(
          40
        )}โทรศัพท์${".".repeat(55)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.province_in_lo,
        bold: true,
        relativePosition: { x: 35, y: -27  },
      },
      {
        text: info.postalcode_lo,
        bold: true,
        relativePosition: { x: 240, y: -27  },
      },
      {
        text: info.phone_lo,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `สำนักงานสาขาของมูลนิธิ ตั้งอยู่เลขที่${".".repeat(
          25
        )}หมู่ที่${".".repeat(20)}ตรอก/ซอย${".".repeat(51)}`,
        margin: [50, 0, 0, 0],
      },
      {
        text: info.addressnumber_lo1,
        bold: true,
        relativePosition: { x: 220, y: -27  },
      },
      {
        text: info.moo_lo1,
        bold: true,
        relativePosition: { x: 285, y: -27  },
      },
      {
        text: info.alley_lo1,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `ถนน${".".repeat(50)}ตำบล/แขวง${".".repeat(
          50
        )}อำเภอ/เขต${".".repeat(57)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.road_lo1,
        bold: true,
        relativePosition: { x: 38, y: -27  },
      },
      {
        text: info.district_in_lo1,
        bold: true,
        relativePosition: { x: 205, y: -27  },
      },
      {
        text: info.county_lo1,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `จังหวัด${".".repeat(60)}รหัสไปรษณีย์${".".repeat(
          40
        )}โทรศัพท์${".".repeat(55)}`,
        margin: [0, 0, 0, 0],
      },
      {
        text: info.province_in_lo1,
        bold: true,
        relativePosition: { x: 35, y: -27  },
      },
      {
        text: info.postalcode_lo1,
        bold: true,
        relativePosition: { x: 240, y: -27  },
      },
      {
        text: info.phone_lo1,
        bold: true,
        relativePosition: { x: 370, y: -27  },
      },
      {
        text: `พร้อมกับคำขอนี้ ข้าพเจ้าได้แนบหลักฐานดังต่อไนี้ จำนวน ${info.do} ชุด`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `(1) รายชื่อเจ้าของทรัพย์สินและรายการทรัพย์สินที่จะจัดสรรสำหรับมูลนิธิ`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `(2) รายชื่อ ที่อยู่ และอาชีพของผู้จะเป็นกรรมการของมูลนิธิทุกคน`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `(3) ข้อบังคับของมูลนิธิ`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `(4) คำมั่นว่าจะให้ทรัพย์สินแก่มูลนิธิของเจ้าของทรัพย์สินตาม (1) ที่มีผลตามกฎหมาย`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `(5) สำเนาพินัยกรรม ในกรณีที่การขอจดทะเบียนมูลนิธิหรือการจัดการทรัพย์สินสำหรับมูลนิธิตาม (1) เกิดขึ้นโดย`,
        margin: [50, 0, 0, 0],
      },
      {
        text: `เกิดขึ้นโดยผลขอลพินัยกรรมนั้น`,
        margin: [0, 0, 0, 0],
      },
      {
        text: `/-2-`,
        alignment: "right",
        //relativePosition: { x: 480, y: -9 },
      },
    ],
    defaultStyle: pdf.primaryStyle(),
  };
  docDefinition.content.push(
    {
      text: `-2-`,
      pageBreak: "before", //ขึ้นหน้าใหม่
      alignment: "center",
    },

    {
      text: `(6) สำเนาภาพถ่ายบัตรประจำตัวประชาชนหรือบัตรประจำตัวอื่นที่ส่วนราชการ หน่วยงานรัฐ หรือรัฐวิสาหกิจ`,
      margin: [50, 30, 0, 0],
    },
    {
      text: `ออกให้ และสำเนาภาพถ่ายทะเบียนบ้านของบุคคลตาม (1) และ (2) หรือหลักฐานอื่นที่สามารถแสดงสถานภาพของ `,
      margin: [0, 0, 0, 0],
    },
    {
      text: ` บุคคลและถิ่นที่อยู่ในทำนองเดียวกัน ในกรณีที่บุคคลดังกล่าวเป็นผู้ไม่มีหลักฐานตามกำหนด เช่น คนต่างด้าว หรือพระภิกษุ`,
      margin: [0, 0, 0, 0],
    },
    {
      text: `(7) แผนผังโดยสังเขปแสดงที่ตั้งสำนักงานใหญ่ และที่ตั้งสำนักงานสาขาทั้งป่วง (ถ้ามี)`,
      margin: [50, 0, 0, 0],
    },
    {
      text: `(8) หนังสืออนุญาตจากเจ้าของหรือผูครอบครองให้ใช้สถานที่ตาม (7)`,
      margin: [50, 0, 0, 0],
    },
    {
      text: `(9) สำเนารายงานการประชุมจัดตั้งมูลนิธิ (ถ้ามี)`,
      margin: [50, 0, 0, 0],
    },
    {
      text: `(10) เอกสารอื่นนๆ เช่น หนังสืออนุญาติจากเจ้าของชื่อหรือทายาท หรือส่วนราชการหน่วยงานรัฐ หรือ`,
      margin: [50, 0, 0, 0],
    },
    {
      text: ` นิติบุคคลที่เกี่ยงข้อง (ถ้ามี)`,
      margin: [0, 0, 0, 0],
    },
    {
      text: `ข้าพเจ้าขอรับรองว่าเอกสารและข้อความข้างต้นเป็นความจริงทุกประการ`,
      margin: [50, 0, 0, 0],
    },
    {
      table: {
        body: [
          [
            {
              text: `(ลงชื่อ)${".".repeat(60)}\n(${info.intoname} ${info.first} ${info.last}) \n ผู้ยื่นคำขอ`,
              alignment: "center",
            },
          ],
        ],
      },
      margin: [300, 15, 0, 0],
      layout: "noBorders",
    },
    {
      text: `ความเห็นของพนักงานเจ้าหน้าที่${".".repeat(148)}`,
      margin: [0,5, 0, 0],
    },
    {
      text: `${".".repeat(198)}`,
      margin: [0, 0, 0, 0],
    },
    {
      table: {
        body: [
          [
            {
              text: `(ลงชื่อ)${".".repeat(60)}\n(${".".repeat(
                55
              )}) \n พนักงานเจ้าหน้าที่ \n วันที่${".".repeat(15)}/${".".repeat(
                15
              )}/${".".repeat(15)}`,
              alignment: "center",
            },
          ],
        ],
      },
      margin: [300, 15, 0, 0],
      layout: "noBorders",
    },
    {
      text: `คำสั่งนายทะเบียน${".".repeat(168)}`,
      margin: [0, 5, 0, 0],
    },
    {
      text: `${".".repeat(198)}`,
      margin: [0, 0, 0, 0],
    },
    {
      table: {
        body: [
          [
            {
              text: `(ลงชื่อ)${".".repeat(60)}\n(${".".repeat(
                55
              )}) \n นายทะเบียน${".".repeat(40)} \n วันที่${".".repeat(15)}/${".".repeat(
                15
              )}/${".".repeat(15)}`,
              alignment: "center",
            },
          ],
        ],
      },
      margin: [300, 15, 0, 0],
      layout: "noBorders",
    },
  );

 window.pdfMake.createPdf(docDefinition).open();
  //  pdf.pdfPrintPreview(docDefinition)
}

export { exportRequest };
