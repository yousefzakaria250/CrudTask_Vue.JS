<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <RouterLink class="navbar-brand" to="/">Navbar</RouterLink>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink class="nav-link active"  to="/login">Login</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink class="nav-link active"  to="/Register">Register</RouterLink>
        </li>
         <!-- <li class="nav-item">
          <RouterLink class="nav-link active"  to="/Employees">Employees</RouterLink>
        </li> -->
      </ul>
    </div>
  </div>
</nav>
    </div>
  </header>
  <RouterView />
</template>

<script>
import setAuthHeader from './Utils/setAuthHeader';

export default {
  mounted() {
   setAuthHeader();
  }
}
</script>
