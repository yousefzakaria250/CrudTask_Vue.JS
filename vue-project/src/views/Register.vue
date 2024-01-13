<template>
  <div class="container w-50">
    <form @submit.prevent="register">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" class="form-control" v-model="email" id="email">
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input type="text" class="form-control" v-model="name" id="name">
      </div>
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">Phone</label>
        <input class="form-control" type="text" v-model="phoneNumber" id="phoneNumber">
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input class="form-control" type="password" v-model="password" id="password">
      </div>
      <div class="mb-3">
        <label for="role" class="form-label">Role</label>
        <input class="form-control" type="text" v-model="UserRole" id="role">

         <select v-model="model.Employee.UserRole" class="form-control">
            <option v-for="state in degreeStates" :value="state.id" :key="state.id">{{ state.state }}</option>
          </select>



      </div>
      <button type="submit" class="btn d-block mx-auto w-25 btn-primary">Sign Up</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      phoneNumber: '',
      password: '',
      UserRole: ''
    };
  },
  methods: {
    
    register() {
      const registrationData = {
        name: this.name,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        UserRole: this.UserRole
      };
      console.log('test');

      // Perform registration logic here
      // Send the registration request to your server
      axios
        .post('https://localhost:7263/api/Account/Register', registrationData)
        .then(response => {
          // Handle successful registration
          // You can perform any necessary actions based on the server's response
          console.log('Registration successful:', response.data);
          alert('Registration successful') ;
          // Redirect the user to the login page or perform any other actions
          this.$router.push('/login');
        })
        .catch(error => {
          if (error.response && error.response.data) {
            console.error('Registration error:', error.response.data);
            alert('More Data Is Required');
          } else {
            console.error('Registration error:', error);
            alert('Registration error') ;
          }
        });
    }
  }
};
</script>