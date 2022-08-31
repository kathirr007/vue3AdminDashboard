import { defineStore } from "pinia";
import axiosClient from "../../axios";

export const useProspectsStore = defineStore("ProspectsStore", {
    state: () => ({
        step : 1,
        prospects: [],
        message: null,
        prospect: {
            firstname:"",
            lastname:"",
            gender:"",
            age:"",
            rfc:"",
            curp:"",
            email:"",
            mobilephone:"",
            homephone:"",
            officephone:"",
            extension:"",
            profession:"",
            servicepriority:"",
            prospectingorigin:"",
            prospectingmedium:"",
            state:"",
            city:"",
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