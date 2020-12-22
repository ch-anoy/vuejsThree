const app = Vue.createApp({
  data() {
    return {
      title: "Create a post",
      text1: "<h1> BANGLADESH </h1>",
      text2: "bangladesh",
      link: "https://vuejs.org",
      count: 0,
      name: "",
    };
  },
  methods: {
    getText() {
      return this.text1;
    },
    getAnotherText() {
      return this.text2;
    },
    onIncrement() {
      this.count++;
    },
    onDecrement() {
      this.count--;
    },
    setName(event, lastName) {
      this.name = event.target.value + lastName;
    },
  },
});
app.mount("#app");
