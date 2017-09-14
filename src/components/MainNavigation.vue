<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    
    <a class="navbar-item" href="http://bulma.io">
      <img src="../assets/logo.png" alt="Rendevu: Secure, Safe and Sure">
    </a>
    <button class="button navbar-burger">
      <span></span>
      <span></span>
      <span></span>
    </button>
  </div>
  <div class="navbar-menu">
    <div class="navbar-end">
      <a class="navbar-item">
        Clients
      </a>
      <a class="navbar-item">
        Escorts
      </a>
      <a class="navbar-item">
        Affiliates
      </a>
      <a class="navbar-item">
        Blog
      </a>
      <a class="navbar-item">
        Media
      </a>
      <a class="navbar-item">
        Contact
      </a>
    </div>    
  </div>
</nav>
</template>

<script>
export default {
  name: 'main-navigation',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar-brand .navbar-item{
  padding:0;
  width:170px;
  background-color:#fff;
}
.navbar-brand img{
  max-height:4rem;
}
.navbar-burger{
  border:none;
}
.navbar-burger.is-active, .navbar-burger:hover{
  background-color:transparent;
}
</style>