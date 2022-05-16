   const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: [],
      name: [],
      enteredName:'',
      age:[],
      enteredAge:''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    addName() {
      this.name.push(this.enteredName);
    },
    addAge() {
      this.age.push(this.enteredAge);
      if (this.enteredAge >= 12) {
        this.enteredAge = '';
      }
      else {
        alert('Please enter a valid age');
        this.age = [];
      }
    },
    removeAge() {
      this.age.splice(1);
    },
    removeGoal(index) {    
     this.goals.splice(index, 1);
    }
  },
});

app.mount('#user-goals');