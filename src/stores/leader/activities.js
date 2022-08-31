import { defineStore } from "pinia";
import axiosClient from "../../axios";

export const useActivitiesStore = defineStore("ActivitiesStore", {
    state: () => ({
        step : 1,
        message: null,
        activities: [],
        activitie: {
            type:"",
            title:"",
            is_done:"",
            user_id:"",
            schedule_to:"",
        },
    }),
    actions: {
        /*
        async createCompany(company) {
            axiosClient.post('/companies/register', company)
            .then (({data}) => {
                this.company = data.result;
                this.message = data.message;
            })
            .catch(function (error) {
                this.message = error.message;
            })
        },
        async fetchCompany(id) {
            axiosClient.get(`/company/${id}`)
            .then (({data}) => {
                this.company = data;
            })
            .catch(function (error) {
                this.message = error.message;
            })
        },
        async updateCompany(company) {
            axiosClient.patch(`/companies/update/${company.id_user}`, company)
            .then (({data}) => {
                this.company = data.result;
                this.message = data.message;
            })
            .catch(function (error) {
                this.message = error.message;
            })
        },
        */
    }
});