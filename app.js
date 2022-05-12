const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name:'',
            confirmedName:'',

            // coarseGoalA: 'Finish the course',
            // coarseGoalB: 'Learn Vue.js  ',
            // vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        add(num) {
            this.counter=this.counter + num;
        },
        reduce(num) {
            this.counter=this.counter - num;
        },
        setName(event,lastName) {
            this.name = event.target.value;  + ' ' + lastName;
        },
        confirmedInput() {
             this.confirmedName = this.name;
        },
        resetInput(){
            this.name = '';
        }
        
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
    }
});

app.mount('#events');

