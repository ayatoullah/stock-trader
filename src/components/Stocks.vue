<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header bg-success">BMW</div>
            <div class="card-body">
                <div class="row">
                    <div class="col-4 col-offset-2">
                        <input type="text" class="form-control">
                    </div>
                    <div class="col-offset-2 col-8">
                        <button class="btn btn-success">Buy</button>
                    </div>
                </div>
                
              
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-header bg-success">BMW</div>
            <div class="card-body">
              <button class="btn btn-success">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
    .container{
        margin :2%;
    }
    .bg-success{
        background-color: #ddf0d7 !important;
    }
    .btn-success{
       background-color: #97cf98;
    }
    input{
        display: inline-block;
    }
    button{
        display: inline-block;
        float: right;
    }
</style>