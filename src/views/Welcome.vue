<template>
  <div class="welcome container">
      <p>Welcome</p>
        <div v-if="isRegistered">
            <h2>Sign up</h2>
            <SignupForm />
            <p>Already registered? <span @click="isRegistered = !isRegistered">Login</span> then</p>
        </div>
        <div v-else>
            <h2>Log in</h2>
            <LoginForm />
            <p>No account yet? <span @click="isRegistered = !isRegistered">Signup</span> then</p>            
        </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginForm from '../components/LoginForm.vue'
import { ref } from '@vue/reactivity'



export default {
    components: {SignupForm, LoginForm},
    setup() {
        const isRegistered = ref(false)


        return {isRegistered}
    }


}
</script>

<style>
    .welcome {
        text-align: center;
        padding: 20px 0;
    }
    /* form styles */
    .welcome form {
        width: 300px;
        margin: 20px auto;        
    }

    .welcome label {
        display: block;
        margin: 20px 0 10px;
    }

    .welcome input {
        width: 100%;
        padding: 10px;
        border-radius: 20px;
        border: 1px solid #eee;
        outline: none;
        color: #999;
        margin: 10px auto;
    }

    .welcome span {
        font-weight: bold;
        text-decoration: underline;
        cursor: pointer;
    }

    .welcome button {
        margin: 20px auto;
    }

</style>