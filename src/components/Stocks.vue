<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-6" v-for="(item,index) in stocks" :key="index">
          <div class="card">
            <div class="card-header bg-success">
              {{item.name}}
              <span>(price:{{item.price}})</span>
            </div>
            <div class="card-body">
              <div class="row">
                <div class="col-4 col-offset-2">
                  <input type="text" class="form-control" />
                </div>
                <div class="col-offset-2 col-8">
                  <button class="btn btn-success">Buy</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      stocks: [
        { name: "BMW", price: 75 },
        { name: "Apple", price: 111 },
        { name: "Twitter", price: 312 },
        { name: "Google", price: 9},
      ],
    };
  },
};
</script>
<style scoped>
.container {
  margin: 2%;
}
.bg-success {
  background-color: #ddf0d7 !important;
}
.btn-success {
  background-color: #97cf98;
}
input {
  display: inline-block;
}
button {
  display: inline-block;
  float: right;
}
.col-sm-6 {
  margin: 1% 0% !important;
}
span {
  font-size: 12px;
}
</style>