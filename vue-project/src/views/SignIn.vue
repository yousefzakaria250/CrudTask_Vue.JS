<template>
  <div class="container w-50">
    <form @submit.prevent="login">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" name="email" id="email" v-model="email">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input class="form-control" type="password" name="password" id="password" v-model="password">
      </div>
      <button type="submit" class="btn d-block mx-auto w-25 btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
//import jwt from 'jsonwebtoken';
import setAuthHeader from '../Utils/setAuthHeader';


export default {
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  methods: {
    login() {
      const loginData = {
        email: this.email,
        password: this.password
      };

      // Send the login request to your server
      axios
        .post('https://localhost:7263/api/Account/Login', loginData)
        .then(response => {
          // Handle successful login
          const token = response.data.token;
  //      const decodedToken = jwt.decode(token);
    //    const role = decodedToken.roles[0];
          localStorage.setItem('token', token);
      //    localStorage.setItem('role', role);
          setAuthHeader();
          this.$router.push('/Employees');
        })
        .catch(error => {
          // Handle login error
          if (error.response && error.response.data && error.response.data.message) {
            this.error ='An error occurred during login.';
          } else {
            this.error = 'An error occurred during login.';
          }
          alert('An error occurred during login.');
        });
    }
  }
};
</script>