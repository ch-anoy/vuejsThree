const app = Vue.createApp({
  data() {
    return {
      title: "Create a post",
      text1: "<h1> BANGLADESH </h1>",
      text2: "bangladesh",
      link: "https://vuejs.org",
      count: 0,
      name: "Anoy",
      confirmedName: "",
    };
  },
  watch: {
    count(value) {
      if (value > 5) {
        this.count = 0;
      }
    },
  },
  computed: {
    fullName() {
      console.log("Executing Computed");
      return this.name + "web dev";
    },
  },
  methods: {
    outputFullname() {
      console.log("Executing Full Name");
      return this.name + "Web Dev";
    },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("Form Submitted");
    },
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
    setName(event) {
      this.name = event.target.value;
    },
  },
});
app.mount("#app");
