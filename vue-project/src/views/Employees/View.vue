<template>
<div class ="container">
  <div class="card">
    <div class ="card-header">
        <h4> Employees  
        <RouterLink to="/Employee/Create" class = "btn btn-primary float-end">
            Add Student
        </RouterLink>  
    </h4>
    </div>

    <div class="card-body">
        <table class ="table table-bordered">
            <thead>
                <tr>
                 <!--   <th> ID </th> -->
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone Number </th>
                    <th> Image </th>
                    <th> State </th>
                    <th> Action </th>

                </tr>
            </thead>
        <tbody>
            <tr v-for="Employee in this.Employees">
               <!-- <td>  {{Employee.id}}  </td> -->
                <td> {{Employee.name }}</td>
                <td> {{ Employee.email }} </td>
                <td> {{ Employee.phoneNumber }}</td>
                <td> {{ Employee.user_Image }}</td>
                <td> {{ Employee.state }}</td>
                <td> 
                    <RouterLink :to="{ path: '/Employee/'+Employee.id}" class = "btn btn-success">
                        Edit
                    </RouterLink> 
                    <button type="button" @click ="deleteStudent(Employee.id)" class ="btn btn-danger" > Delete</button>
                </td>
            </tr>
        </tbody>
        </table>
    </div>

  </div>
  </div>
</template>

<script>
import axios from 'axios'
    export default {

        name:'Employees',
        data(){
            return{
                Employees:[]
            }
        },
        mounted(){
         console.log('I am Here') ;
          //  this.getEmployees() ;
           this.getEmployeesWithId();

        } ,
        methods:{
           getEmployees(){
                axios.get('https://localhost:7263/api/Employee/GetAllUser').then(res=>{
                    this.Employees = res.data.data;
                    console.log(this.Employees);
                }) ;
            },
              getEmployeesWithId(){
                axios.get('https://localhost:7263/api/Employee/GetAllUserWithSupervisior').then(res=>{
                    this.Employees = res.data.data;
                    console.log(this.Employees);
                }) ;
            },

            deleteStudent(EmployeeId)
            {
                console.log(EmployeeId);
                if(confirm('Are you sure , you want to delete Employee ? '))
                    {
                        console.log(EmployeeId);
                        axios.patch(`https://localhost:7263/api/Employee/DeleteUser?id=${EmployeeId}`).then(res=>{
                           alert('Employee Is Delete Successfully');
                            console.log(res);
                            this.getEmployees();
                        }).catch(error => {
                            if (error.response) {
                                if (error.response.status == 404) {    
                                    alert(this.response.Message);
                             }
                            }
                        });
            }
        },
    }
    }
</script>