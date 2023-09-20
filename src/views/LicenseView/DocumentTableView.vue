<template>
    <div>
        <v-simple-table>
          <thead>
            <tr>
              <th class="text-left" width="500">รายการเอกสาร</th>
              <th class="text-left" width="120">จำนวน</th>
              <th class="text-left" width="200">หลักฐาน</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="document in documents" :key="document.id">
              <td>({{ document.id }}) {{ document.name }}</td>
              <td>
                <v-select
                  dense
                  outlined
                  :label="`${document.description}`"
                ></v-select>
              </td>
              <td>
                <v-file-input label="ไฟล์หลักฐาน" outlined dense></v-file-input>
                {{ document.file }}
              </td>
            </tr>
          </tbody>
        </v-simple-table>
    </div>
</template>

<script>
export default {
  name: "DocumentTableView",
  props:{
    documents: Array,
  }
};
</script>
