Vue.createApp({
  data() {
    return { courses: [], courseContent: "initial" };
  },
  computed: {},
  methods: {
    addCourse() {
      this.courses.push(this.courseContent);
    },
  },
}).mount("#app");
