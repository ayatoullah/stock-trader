<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="card">
          <div class="card-header bg-primary">BMW</div>
          <div class="card-body">
            <div class="row">
              <div class="col-4 col-offset-2">
                <input type="text" class="form-control" />
              </div>
              <div class="col-offset-2 col-8">
                <button class="btn btn-warning">Sell</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container{
    margin:2%;
}
.card-header {
  color: #437898;
  text-align: left;
}
.bg-primary {
  background-color: #daeef5 !important;
  border-color: #d8ecf0;
}
.btn-warning {
  background-color: #e88e89;
  border-color: #cc9b9e;
  color: white;
}
</style>