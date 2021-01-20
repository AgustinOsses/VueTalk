<template>
  <section class="section">
    <div class="container">
      <button v-if="!user" @click="doLogin" class="button has-text-centered">
        Login with google 🚀
      </button>
      <template v-else>
        <h1>Hi {{ user.displayName }}</h1>
        <button @click="doLogout" class="button has-text-centered">
          Logout🪂
        </button>
      </template>
    </div>
  </section>
</template>

<script>
import { fb, auth } from "../../firebase";

export default {
  name: "Home",
  data() {
    return {
      user: null,
    };
  },

  methods: {
    async doLogin() {
      try {
        const provider = new fb.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        this.user = user.user;
        console.log(user);
      } catch (error) {
        console.log(error);
      }
    },
    async doLogout() {
      try {
        await auth.signOut();
        this.user = null;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 1rem;
}
</style>
