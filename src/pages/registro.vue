<template class="atras">
  <div class="atras row justify-center" >

    <div class="col-8 row self-center contenido" >
      <div class="col-6 row formulario2 justify-center text-white" v-if="!vista">
      </div>

      <div class="col-6 row formulario justify-center text-white" v-if="vista">
 <div class="col-6 self-center">
  <q-form
          @submit.prevent="handleSubmit"
          class="q-gutter-md">
          <h3>Registro</h3>
          <q-input dark dense standout filled type="email" label="Email" class="col-12  self-center" v-model="email"
            :rules="[
            val => !!val || '* Campo requerido',]" />
          <q-input dark dense standout filled :type="isPwd ? 'password' : 'text'" label="contraseña"
            class="col-12  self-center" v-model="pasword" :rules="[
              val => !!val || '* Campo requerido',
              val => val.length > 6 || 'Debe ser mas de 6 caracteres',
            ]">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>

          <q-input dark dense standout filled :type="isPwd ? 'password' : 'text'" label="Confirme contraseña"
            class="col-12  self-center" v-model="repasword" :rules="[
              val => !!val || '* Campo requerido',
              val => val == pasword || ' contraseñas no coinciden',
            ]">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>

          <div class="row justify-center">
            <q-btn label="Registrarse" type="submit" color="primary" />
          </div>
        </q-form>

 </div>


        <div class="col-7 self-center text-white">
            <q-separator color="orange" inset />

          <q-btn class="q-mt-md boton self-center" label="ingresar con google" color="red-10" @click="userStore.googleAuth()">
            <q-icon name="mdi-google" />
          </q-btn>
        </div>
        <div class="col-7">
          <q-separator color="orange" inset />
          <p style="text-align:center;">si ya tienes cuenta ingresa <a href="#" @click="cambiarVistaReg()">aqui</a></p>
        </div>

      </div>


<div class="col-6 imagen2 row justify-center text-white" v-if="vista">
</div>
      <div class="col-6 imagen row justify-center text-white" v-if="!vista">
        <q-form @submit.prevent="handleSubmit2" class="q-gutter-md self-center">
          <h3>Ingresar</h3>
          <q-input dark dense standout filled type="email" label="Email" class="col-12  self-center" v-model="email"
            :rules="[
            val => !!val || '* Campo requerido',]" />
          <q-input dark dense standout filled :type="isPwd ? 'password' : 'text'" label="contraseña"
            class="col-12  self-center" v-model="pasword" :rules="[
              val => !!val || '* Campo requerido',
              val => val.length > 6 || 'Debe ser mas de 6 caracteres',
            ]">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
            </template>
          </q-input>

          <div class="row justify-center">
            <q-btn label="Ingresar" type="submit" color="primary" />
          </div>

        </q-form>

        <div class="col-7 self-center text-white">
            <q-separator color="orange" inset />

          <q-btn class="q-mt-md boton self-center" label="ingresar con google" color="red-10" @click="userStore.googleAuth()">
            <q-icon name="mdi-google" />
          </q-btn>
        </div>
        <div class="col-7">
          <q-separator color="orange" inset />
          <p style="text-align:center;">si ya tienes cuenta ingresa <a href="#" @click="cambiarVistaLog()">aqui</a></p>
        </div>

      </div>
    </div>

  </div>

</template>

<script setup>


import { ref } from "vue"
import { useUserStore } from "../stores/user"


const userStore = useUserStore();
const isPwd = ref(true);
const pasword = ref("1234567");
const vista = ref(false);
// import { ref } from 'vue';

// const isPwd = ref(true);
const email = ref("prueba@gmail.com");
const repasword = ref("1234567");
// const formState = reactive({
//     email: "",
//    // password: "",
//     repassword:"",
// })

const handleSubmit = async () => {

  console.log("procesando formulario")
  console.log(email.value)
  console.log(pasword.value)
  await userStore.registerUser(email.value, pasword.value)
  console.log("registrado")

}

const handleSubmit2 = async () => {
  await userStore.loginUser(email.value, pasword.value)
}
const cambiarVistaReg = () => {

  vista.value= false;
console.log("cambiar vista" + vista.value)
}
const cambiarVistaLog = () => {

  vista.value=true;
  console.log("cambiar vista" + vista.value)
}






</script>

<style scoped>
/* .contenido{

} */
.atras {
  background-image: url(../assets/mockou.jpg);
  height: 100vh;
}

.prueba {
  background-color: aqua;
}

.imagen {
  background-color: rgb(51, 51, 51, 0.702);
  height: 80vh;
  border-radius: 0px 10% 10% 0%;
}

.formulario {
  background-color: rgb(51, 51, 51, 0.702);
  height: 80vh;
  border-radius: 10% 0% 0% 10%;

}
.formulario2 {
  background-color: rgb(51, 51, 51, 0.702);
  background-size: 80%;
  background-image: url("../assets/account.png");
  background-position:center center; /*respecto a body*/
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 10% 0% 0% 10%;

}
.imagen2 {
  background-color: rgba(122, 119, 119, 0.893);
  background-size: 80%;
  background-image: url("../assets/account.png");
  background-position:center center; /*respecto a body*/
  background-repeat: no-repeat;
  height: 80vh;
  border-radius: 0px 10% 10% 0%;
}

.boton
{
  width: 20vw;
}
</style>
