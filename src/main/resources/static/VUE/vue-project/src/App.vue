<template>
  <div>

    <!--    &lt;!&ndash; p>Country: {{ name }}</p>-->
    <!--    <p>Age: {{ age }}</p>-->
    <!--    <p>Population: {{ population }}</p>-->
    <!--    <p>Currency: {{ currency }}</p>-->
    <!--    <p>Capital: {{ capital }}</p>-->
    <!--    <p>Budget: ${{ budget }} billion</p>-->
    <!-- &ndash;&gt;-->
    <!--    <template v-if="isClick">-->
    <!--      <p v-if="budget % 2">🔥🔥🔥</p>-->
    <!--      <p v-else>💪💪💪</p>-->
    <!--    </template>-->

    <!--    <button @click="budgetPlus()">-->
    <!--      Click me 🔥-->
    <!--    </button>-->

    <!--    <p>Largest cities in Ukraine:</p>-->
    <!--    <ul>-->
    <!--      &lt;!&ndash;   Детальніше про списки   https://ua.vuejs.org/guide/essentials/list.html#v-for&ndash;&gt;-->
    <!--      <li v-for="(city, index) in largestCities">{{ city }}</li>-->
    <!--    </ul>-->

    <!--    <v-select :options="largestCities"-->
    <!--              v-model="largestCity"-->
    <!--              @update:modelValue="changeLargestCity($event)"-->
    <!--    ></v-select>-->
    <form action="/Sign">
      <label class="loh">
        Стать:
        <label for="choice1">Чоловіча</label>
        <input class="input" type="radio" id="stats" name="stat" value="male" required="required" checked
               v-model="gender">
        <label for="choice2">Жіноча</label>
        <input class="input" type="radio" id="stats" name="stat" value="fem" v-model="gender">
      </label>
      <label class="loh">
        E-Mail:
        <input v-model="email" class="input" type="text" name="login" id="email">
        <p v-if="err_1" class="error" id="e_error">error</p>
      </label>
      <label class="loh">
        Password:
        <input v-model="password" class="input" type="text" name="password" id="password">
        <p v-if="err_2" class="error" id="p_error">error</p>
      </label>
      <label class="loh">
        Name:
        <input v-model="name" class="input" type="text" name="name" id="name" required="required">
        <p v-if="err_3" class="error" id="n_error">error</p>
      </label>
      <label class="loh">
        Surname:
        <input v-model="surname" class="input" id="surname" type="text" name="surname" required="required">
        <p v-if="err_4" class="error" id="s_error">error</p>
      </label>
      <label class="loh">
        Date of birth:
        <input v-model="date_of_birth" class="input" type="date" name="date_of_birth" id="birth" required="required"
               placeholder="00.00.0000">
        <p v-if="err_5" class="error">error</p>
      </label>
      <label class="loh">
        Group
        <select v-model="group" class="spisok" type="text" name="group" id="group">
          <option value="">Choose a Group</option>
          <option value="IA-11">IA-11</option>
          <option value="IA-12">IA-12</option>
          <option value="IA-13">IA-13</option>
          <option value="IA-14">IA-14</option>
        </select>
        <p v-if="err_6" class="error" id="b_error">error</p>
      </label>
      <label class="loh">
        <p v-if="err_7" class="error" id="b_error">error</p>
        <input class="input"
               @input="changePhone()"
               v-model="phone_number"
               v-mask="'38(0##)###-##-##'"
               placeholder="38(0__)___-__-__"
        >
        Phone Number
      </label>
    </form>
    <button @click="buttonclick()" class="signbut">SignUp</button>
    <button @click="make_copy()" class="copy_but">Copy</button>
    <button @click="make_delete()" class="delete_but">Delete</button>

    <table class="megatable" id="table1">
      <thead>
      <tr>
        <th class="th" scope="col">Checkbox</th>
        <th class="th" scope="col">Email</th>
        <th class="th" scope="col">Password</th>
        <th class="th" scope="col">Name</th>
        <th class="th" scope="col">Surname</th>
        <th class="th" scope="col">Birth</th>
        <th class="th" scope="col">Stat</th>
        <th class="th" scope="col">Telephone</th>
      </tr>
      </thead>
      <tbody id="table_body">
      <tr v-for="(masiv, index) in tabledb">
        <th><input type="checkbox" :value="index" v-model="checkboxes"></th>
        <th v-for="(element,index) in masiv">{{ element }}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {defineComponent} from 'vue'

import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css'
import {mask} from 'vue-the-mask'


export default defineComponent({
  props: {
    //Реквізити - https://ua.vuejs.org/guide/components/props.html#props-declaration
  },
  components: {
    //Локальна реєстрація компонентів
    // https://ua.vuejs.org/guide/components/registration.html#local-registration
    vSelect,
  },
  directives: {
    //Локальна реєстрація директив
    mask
  },
  data: () => ({
    err_1: false,
    err_2: false,
    err_3: false,
    err_4: false,
    err_5: false,
    err_6: false,
    err_7: false,
    email: "",
    password: "",
    name: "",
    surname: "",
    phone_number: '',
    date_of_birth: "",
    group: '',
    gender: 'Male',
    tabledb: [],
    checkboxes: []

    // //змінні компонету
    // name: 'Ukraine',
    // age: 31,
    // population: 41167336,
    // currency: 'Hryvnia',
    // capital: 'Kyiv',
    // largestCities: [
    //   'Kyiv',
    //   'Kharkiv',
    //   'Odesa',
    //   'Dnipro',
    //   'Donetsk',
    //   'Lviv',
    // ],
    // budget: 588,
    // isClick: false,
    // largestCity: '',
    // phoneNumber: '',

  }),


  watch: {
    //Спостерігачі
    // variableName: function (variableVale) {
    //більш детально https://ua.vuejs.org/guide/essentials/watchers.html#base-example
    email() {
      this.err_1 = !this.emailCheck()
    },
    password() {
      this.err_2 = !this.passwordCheck()
    },
    name() {
      this.err_3 = !this.nameCheck()
    },
    surname() {
      this.err_4 = !this.surnameCheck()
    },
    group() {
      this.err_5 = !this.groupCheck()
    },
    date_of_birth() {
      this.err_6 = !this.dateCheck()
    },
    phone_number() {
      this.err_7 = !this.phoneCheck()
    },


  },
  methods: {
    // //Викликається коли тиснемо на кнопку
    // budgetPlus() {
    //   this.budget++;
    //   this.isClick = true;
    // },
    // //Викликається коли змінюємо вибір міста в v-select
    // changeLargestCity(value) {
    //   alert('New select city ' + value);
    // },
    // //Викликається коли вводжимо номер телефона
    // changePhone() {
    //   console.log(this.phoneNumber)
    // },

    buttonclick() {

      if (!this.emailCheck() ||
          !this.passwordCheck() ||
          !this.nameCheck() ||
          !this.surnameCheck() ||
          !this.phoneCheck() ||
          !this.dateCheck() ||
          !this.groupCheck()
      ) {
        alert("it's your fault")
        return
      }
      this.tabledb.push([
        this.email,
        this.password,
        this.name,
        this.surname,
        this.date_of_birth,
        this.gender,
        this.phone_number
      ])
    },

    make_delete() {
       if(this.tabledb.length==0){
        alert("Nothing to delete")
        return
      }
      this.tabledb.pop()
    },
    make_copy() {
      if(this.tabledb.length==0){
        alert("Nothing to copy")
        return
      }
      let new_item = this.tabledb[this.tabledb.length-1]
      this.tabledb.push(new_item)
    },
    
    emailCheck() {
      let emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}])|(([a-zA-Z\-\d]+\.)+[a-zA-Z]{2,}))$/
      return emailRegex.test(this.email)
    },
    passwordCheck() {
      let passwordRegex = /^(.{8,})/
      return passwordRegex.test(this.password)
    },
    phoneCheck() {
      let numberRegex = /^(38)([(]0\d{2}[)])(\d{3})-(\d{2})-(\d{2})/
      return numberRegex.test(this.phone_number)
    },
    nameCheck() {
      let nameRegex = /^(\w)[\D]/
      return nameRegex.test(this.name)
    },
    surnameCheck() {
      let nameRegex = /^(\w)[\D]/
      return nameRegex.test(this.surname)
    },
    dateCheck() {
      let today = new Date()
      let birth = new Date(this.date_of_birth)
      return today > birth
    },
    groupCheck() {
      return this.group !== ""
    }

  },
})
</script>

















