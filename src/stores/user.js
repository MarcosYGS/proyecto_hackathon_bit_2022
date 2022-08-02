import { defineStore } from 'pinia'
import {createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
} from "firebase/auth"

import { auth } from '../firebase.js'
import router from "../router/index.js";



export const useUserStore = defineStore("userStore",
    {
        state: () => ({
            userData: null,
            loadingUser: false,
            loadingSession: false,
        }),
        actions: {

          // accion para autentificar con google
            async googleAuth(){
                try {
                    const provider = new  GoogleAuthProvider();
                    const result = await signInWithPopup(auth, provider);
                    const user= result.user;

                    this.userData ={
                        email: user.email,
                        password: "autentificado por google",
                        uid : user.uid,
                    };

                    router.push("/home");
                } catch (error) {
                    console.log(error.code)
                    return error.code
                }
            },

            // accion para registrarse con correo y con contraseña
            async registerUser (email, password) {
                this.loadingUser =true;
                try {
                    const {user} = await createUserWithEmailAndPassword(
                        auth,
                        email,
                        password
                    );
                    this.userData ={
                        email: user.email,
                        password: user.password,
                        uid : user.uid,
                    };
                    console.log(this.userData);
                    router().push("/home")
                } catch (error) {
                    console.log(error.code);
                    return error.code
                }finally{
                    this.loadingUser =false;
                }
            },

            // accion para ingresar por correo y contraseña
            async loginUser(email, password){
                this.loadingUser =true;
                try {
                    const {user} = await signInWithEmailAndPassword(auth, email, password);
                    console.log(user);
                    this.userData = { email: user.email, uid: user.uid, displayName: user.displayName, photoURL: user.photoURL};
                    router.push("/home");
                } catch (error) {
                    console.log(error.code);
                    return error.code

                }finally{
                    this.loadingUser =false;
                }
            },
            //accion para cerrar sesion
            async logoutUser(){
                try {

                    router.push("/")
                    this.userData =null;
                    await signOut(auth);
                    console.log("salimos" + this.userData)
                } catch (error) {
                    console.log(error);
                }

            },
            //acciones para mantener las seciones iniciadas para las rutas protegidas
            currentUser(){
                return new Promise((resolve, reject) => {
                    const unsubscribe = onAuthStateChanged(auth, (user) => {

                        if (user){

                            // await this.setUser(user)
                            this.userData ={
                                email: user.email,
                                uid:user.uid,
                                displayName: user.displayName,
                                photoURL: user.photoURL};
                                console.log("hey")
                        } else {
                            this.userData =null;
                        };
                        resolve(user)
                    }, e => reject(e));
                    unsubscribe()
                })
            },

        },
    })
