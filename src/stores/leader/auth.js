import { defineStore } from "pinia";

import axiosClient from "../../axios";
import router from "@/router";

export const useAuthStore = defineStore("AuthStore", {
    state: () => ({
        //company: {},
        //companies: [],
        message: null,
        user:{
            data:{},
            token: sessionStorage.getItem("TOKEN"),
        }
    }),
    actions: {
        async loginUser(userData) {
            axiosClient.post(`/login`, userData)
            .then (({data}) => {
                this.user.data = data.user;
                this.user.token = data.token;
                sessionStorage.setItem("TOKEN", this.user.token);
                sessionStorage.setItem("UserDataLogin", this.user);
                //this.company = data;
                
                router.push({
                    name: "side-menu-dashboard-overview-1",
                })
            })
            /*
            .catch(function (error) {
                this.message = error;
            })
            
            finally {
                this.loadingUser = false;
            }
            */
        },
    }
});