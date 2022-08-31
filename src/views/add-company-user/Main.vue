<template>
    <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Add Company User</h2>
  </div>
    <router-link class="btn btn-primary shadow-md mr-2" :to="`/company-users`">Prev</router-link>
  <!-- <div class="mt-5 flex flex-row flex-wrap gap-4"> -->
  <div class="grid grid-cols-3 gap-3 mt-5">
    <div class="intro-y col-span-12 lg:col-span-6">
      <!-- BEGIN: Form Layout -->
      <form @submit.prevent="addCompanyUser" autocomplete="on">
        <div class="intro-y box p-5">
          <div class="mt-3">
            <label class="form-label">Name</label>
            <input v-model="user.name" type="text" class="form-control w-full" placeholder="Name" />
          </div>
          <div class="mt-3">
            <label class="form-label">Email</label>
            <input v-model="user.email" type="text" class="form-control w-full" placeholder="Email" />
          </div>
          <div class="mt-3">
            <label class="form-label">Password</label>
            <input v-model="user.password" type="password" class="form-control w-full" placeholder="Password" />
          </div>
          <div class="mt-3">
            <label class="form-label">Password Confirmation</label>
            <input v-model="user.password_confirmation" type="password" class="form-control w-full" placeholder="Password Confirmation" />
          </div>
          <div class="text-right mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary w-24">Save</button>
          </div>
        </div>
      </form>
      <!-- END: Form Layout -->
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { useUsersStore } from "../../stores/leader/users";
const { createUser } = useUsersStore();

const user = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
  parent_id: "11",
  role: "usercompany" 
});

const addCompanyUser = async () => {
  await createUser(user);
}

</script>

