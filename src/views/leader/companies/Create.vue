<script>
export default {
  name: "CompaniesCreateView"
}
</script>

<script setup>
    import { reactive } from "vue";
    import { storeToRefs } from "pinia";
    import { useCompaniesStore } from "../../../stores/leader/companies";
    import CompanyForm from "../../../components/leader/companies/Form.vue";

    const { message } = storeToRefs(useCompaniesStore());

    const { createCompany } = useCompaniesStore();

    const form = reactive({
        city:"",
        name: "",
        email: "",
        state: "",
        password: "",
        postal_code: "",
        role: "company",
        password_confirmation: "",
    });

    const submit = async () => {
        await createCompany(form);
        /*
        if ( ! error.value) {
            await router.push({
            name: "courses",
            })
        }
        */
    }
</script>

<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Add Company</h2>
    </div>
    <router-link class="btn btn-primary shadow-md w-20 mr-2" :to="`/companies`">Prev</router-link>
    <div class="grid grid-cols-3 gap-3 mt-5">
        <p v-if="message">{{ message.value }}</p>
        <CompanyForm
            :company="form"
            @submit="submit"
        />
    </div>
</template>