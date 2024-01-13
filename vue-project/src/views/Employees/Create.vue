<template>
  <div class="container mt-5">
    <div class="card">
      <div class="card-header">
        <h4>Add Employee</h4>
      </div>
      <div class="card-body">
        <ul class="alert alert-warning" v-if="errorList.length > 0">
          <li class="mb-0 ms-3" v-for="(error, index) in errorList" :key="index">
            {{ error }}
          </li>
        </ul>
        <div class="mb-3">
          <label>Name</label>
          <input type="text" v-model="model.Employee.name" class="form-control">
        </div>
        <div class="mb-3">
          <label>Email</label>
          <input type="email" v-model="model.Employee.email" class="form-control">
        </div>
        <div class="mb-3">
          <label>Phone Number</label>
          <input type="text" v-model="model.Employee.phoneNumber" class="form-control">
        </div>
        <div class="mb-3">
          <label>Image</label>
          <input type="text" v-model="model.Employee.user_Image" class="form-control">
        </div>
        <div class="mb-3">
     <!--  <label>Degree State</label>
          <input type="text" v-model="model.Employee.degreeStateId" class="form-control">    -->
           <label>Degree State</label>
          <select v-model="model.Employee.degreeStateId" class="form-control">
            <option value="">Select Degree State</option>
            <option v-for="state in degreeStates" :value="state.id" :key="state.id">{{ state.state }}</option>
          </select>
        </div>
        <div class="mb-3">
          <button type="button" @click="saveEmployee" class="btn btn-primary">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EmployeeCreate',
  data() {
    return {
      errorList: [],
      degreeStates: [],
      model: {
        Employee: {
          name: '',
          email: '',
          phoneNumber: '',
          user_Image: '',
          degreeStateId: '',
        },
      },
    };
  },
  mounted() {
    this.fetchDegreeStates();
  },
  methods: {
    fetchDegreeStates() {
      axios.get('https://localhost:7263/api/Employee/EmployeeState (Graduated / UnGraduated)')
        .then((response) => {
          console.log(response.data);
          this.degreeStates = response.data;
        })
        .catch((error) => {
          console.log('Error fetching degree states:', error);
        });
    },
    saveEmployee() {
      axios
        .post('https://localhost:7263/api/Employee/AddUser', this.model.Employee)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          this.model.Employee = {
            name: '',
            email: '',
            phoneNumber: '',
            user_Image: '',
            degreeStateId: '',
          };
        })
        .catch((error) => {
          if (error.response) {
            if (error.response.status === 405) {
              this.errorList = [error.response.data.message];
            }
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        });
    },
  },
};
</script>