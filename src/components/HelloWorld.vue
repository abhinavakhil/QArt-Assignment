<template>
  <div class="container col-md-12 col-xs-12 table ">
    <mdb-datatable
      :data="data"
      striped
      bordered
      :display="3"
      reactive
      :time="7000"
    />
  </div>
</template>

<script>
import { mdbDatatable } from "mdbvue";
export default {
  components: {
    mdbDatatable,
    // mdbContainer,
  },
  data() {
    return {
      columns: [],
      rows: [],
    };
  },
  computed: {
    data() {
      return {
        columns: this.columns,
        rows: this.rows,
      };
    },
  },
  methods: {
    filterData(dataArr, keys) {
      let data = dataArr.map((entry) => {
        let filteredEntry = {};
        keys.forEach((key) => {
          if (key in entry) {
            filteredEntry[key] = entry[key];
          }
        });
        return filteredEntry;
      });
      return data;
    },
  },
  mounted() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => res.json())
      .then((res) => {
        //console.log(res.data);
        let newData = res.data;
        let keys = ["id", "employee_name", "employee_salary", "employee_age"];
        let entries = this.filterData(newData, keys);
        //columns
        this.columns = keys.map((key) => {
          return {
            label: key.toUpperCase(),
            field: key,
            sort: "asc",
          };
        });
        //rows
        entries.map((entry) => this.rows.push(entry));
      })
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.pagination {
  height: 4px;
}
</style>
