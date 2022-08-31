<script>
    export default {
        name: "UserForm",
    }
</script>

<script setup>
    defineProps({
        user: {
            type: Object,
            required: true,
        },
        textButton: {
            type: String,
            default: "Save",
        },
    })

    defineEmits(["submit"]);
</script>

<template>
  <div class="intro-y col-span-12 lg:col-span-6">
    <!-- BEGIN: Form Layout -->
    <form @submit.prevent="$emit('submit')" autocomplete="on">
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
          <button type="button" class="btn btn-outline-secondary w-24 mr-1">Cancel</button>
          <button type="submit" class="btn btn-primary w-24">{{ textButton }}</button>
        </div>
      </div>
    </form>
    <!-- END: Form Layout -->
  </div>
</template>