<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 col-xs-12 col-sm-12 my-1">
        <div
          class="card text-white bg-primary mb-3 card_tile"
          style="max-width: 18rem;"
        >
          <div class="card-body">
            <h5 class="card-title">Pages</h5>
            <p class="card-text">
              {{ tiles.page }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-xs-12 col-sm-12 my-1">
        <div
          class="card text-white bg-primary mb-3 card_tile"
          style="max-width: 18rem;"
        >
          <div class="card-body">
            <h5 class="card-title">Per Pages</h5>
            <p class="card-text">
              {{ tiles.per_page }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-xs-12 col-sm-12 my-1">
        <div
          class="card text-white bg-primary mb-3 card_tile"
          style="max-width: 18rem;"
        >
          <div class="card-body">
            <h5 class="card-title">Total</h5>
            <p class="card-text">
              {{ tiles.total }}
            </p>
          </div>
        </div>
      </div>

      <div class="col-md-3 col-xs-12 col-sm-12 my-1">
        <div
          class="card text-white bg-primary mb-3 card_tile"
          style="max-width: 18rem;"
        >
          <div class="card-body">
            <h5 class="card-title">Total Pages</h5>
            <p class="card-text">
              {{ tiles.total_pages }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Users -->
    <div class="row">
      <div
        v-for="user in userData"
        :key="user.id"
        class="col-md-3 col-xs-12 col-sm-12 my-1 "
      >
        <div class="card h-100 card_user">
          <img :src="user.avatar" class="card-img-top mx-auto image" />
          <div class="card-body">
            <div class="card-title">
              {{ user.first_name }} {{ user.last_name }}
            </div>
            <div>
              {{ user.email }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tiles: [],
      userData: [],
    };
  },

  mounted() {
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        this.tiles = response.data;
        this.userData = response.data.data;
        //console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped>
.card_tile {
  background-image: linear-gradient(#0f2027, #203a43, #2c5364);
}

.card_user {
  background-image: linear-gradient(150deg, #f731db, #4600f1 100%);
  color: #fff;
}
.image {
  border-radius: 50%;
  width: 100px;
  margin-top: 10px;
  border: 2px solid #fff;
}
</style>
