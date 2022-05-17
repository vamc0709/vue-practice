function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
      // canIUse: false
      // healUp: false,
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: "0%" };
      }
      return { width: this.monsterHealth + "%" };
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: "0%" };
      } 
      return { width: this.playerHealth + "%" };
    },
    mayUseSpecialAttack() {
      //    return true;
      // console.log(this.currentRound%3);
      if (this.currentRound === 0) return true;
      return this.currentRound % 3 !== 0;
      // if(this.currentRound % 3 === 0) {
      //     return false;
      // }else {
      //     return true;
      // }
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        // alert('You lost!');
        this.winner = "monster";
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        // alert('You lost!');
        this.winner = "player";
      }
    },
  },
  methods: {
    startGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(2, 10);
      this.monsterHealth -= attackValue;
      this.addLogMethod('player', 'attack', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(5, 10);
      this.playerHealth -= attackValue;
      this.addLogMethod('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      this.currentRound = 0;
      const attackValue = getRandomValue(10, 30);
      this.monsterHealth -= attackValue;
      this.addLogMethod('player', 'specialAttack', attackValue);
      this.attackPlayer();
      // mayUseSpecialAttack();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100;
      } else {
        this.playerHealth += healValue;
      }
      this.attackPlayer();
      this.addLogMethod('player', 'heal', healValue);
    },
    surrender() {
      this.winner = "monster";
    },
    addLogMethod(who, what, value) {
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    }
  },
});
app.mount("#game");
