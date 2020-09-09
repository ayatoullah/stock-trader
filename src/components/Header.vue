<template>
  <section>
    <div>
       <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
         
            <router-link tag="li" class="nav-link" to="/" active-class="active" exact><a>Stock Trader</a></router-link>
            <router-link tag="li" class="nav-link" to="/portfolio" active-class="active"><a>Portfolio</a></router-link>
            <router-link tag="li" class="nav-link" to="/stocks" active-class="active"><a>Stocks</a></router-link>
 

        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click="isOpen=!isOpen"
            >Save & load</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown" v-if="isOpen">
              <a class="dropdown-item" href="#">Save</a>
              <a class="dropdown-item" href="#">Load</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item right-nav">
            <a class="nav-link disabled" href="#">Funds</a>
          </li>
        </ul>
      </div>
    </nav>

    </div>
   
  </section>
</template>
<script>
export default {
  data(){
    return{
      isOpen:this.isOpened
    }
  },
  props: ['isOpened']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 0 16px;
}
.navbar {
  border: 1px solid #e6e6e6;
  margin: 2%;
  border-radius: 2px;
}
nav ul li .right-nav {
  /* list-style:none;
  margin:10px; */
  float: right;
}
nav ul li .left-nav {
  /* list-style:none;
  margin:10px; */
  float: left;
}
/* .right-nav{
  display: inline;
}
.left-nav{
  display: inline;
} */
</style>