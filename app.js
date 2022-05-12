const app = Vue.createApp({
  data() {
    return {
      counter: 05,
      name: '',
    //fullname: '',
      lastName: '',
      // confirmedName: "",
      // coarseGoalA: 'Finish the course',
      // coarseGoalB: 'Learn Vue.js  ',
      // vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return "";
      }
      return this.name;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      if (this.counter > 0) {
        this.counter = this.counter - num;
      }
    },
    setName(event) {
      this.name = event.target.value;
    },
    // confirmedInput() {
    //   this.confirmedName = this.name;
    // },
    resetInput() {
      this.name = "";
      this.lastName = "";
    },

    // submitForm(){
    //     event.preventDefault();
    //     alert('Form submitted!');
    // }
    // outputGoal() {
    //     const randomNumber = Math.random();
    //     if (randomNumber > 0.5) {
    //         return this.coarseGoalA;
    //     } else {
    //         return this.coarseGoalB;
    //     }

    // }
    // updateCoarseGoal(event) {
    //     this.coarseGoal = event.target.value;

    // }
  },
  watch: {
    counter(value) {
        if (value > 100) {
            this.counter = 0;
            alert(`Counter value not allowed to be greater than 100`);
        }
        // }   else if (value < 0) {   
        //     this.counter = 0;
        // }
    }
//     name(value) {
//       if (value === "") {
//         this.fullname = "";
//       } else {
//         this.fullname = value + ' ' + this.lastName;
//       }
//     },
//   },
//   lastName(value){
//     if (value === "") {
//         this.fullname = "";
//       } else {
//         this.fullname = this.name + ' ' + value;
//       }
  },
  computed: {
      fullname() {
          if (this.name === '' || this.lastName === '') {
              return '';
          }
          return this.name + ' ' + this.lastName;
      },
    },
});

app.mount("#events");
