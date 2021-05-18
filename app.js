const app = Vue.createApp({
  data() {
    return {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/50.jpg"
    }
  },
  methods: {
    async getUser(){
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      this.firstName = results[0].name.first
      this.lastName = results[0].name.lastName
      this.email = results[0].email
      this.picture = results[0].picture.large
      this.gender = results[0].gender
    }
  }
})

app.mount('#app')