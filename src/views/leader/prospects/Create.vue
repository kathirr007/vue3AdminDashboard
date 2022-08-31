<script>
  export default {
    name: "ProspectsCreateView"
  }
</script>

<script setup>
   import { storeToRefs } from "pinia";
   import { useRoute, useRouter } from "vue-router";
   import { useProspectsStore } from "../../../stores/leader/prospects";
   import { useActivitiesStore } from "../../../stores/leader/activities";
   import ActivitieForm from "../../../components/leader/activities/Create.vue";
   import ProspectStep1Form from "../../../components/leader/prospects/Create_step_1.vue";
   import ProspectStep2Form from "../../../components/leader/prospects/Create_step_2.vue";
   
   const route = useRoute();
   const router = useRouter();
   const { prospect: form, step } = storeToRefs(useProspectsStore());
   const { activitie: formactivitie } = storeToRefs(useActivitiesStore());

   const submit = async () => {
      step.value = (step.value == 1) ? 2 : 3;
      /*
      await router.push({
        name: "side-menu-add-prospect",
      })
      */
    }
</script>

<template>
  <div class="flex items-center mt-8">
    <h2 class="intro-y text-lg font-medium mr-auto">Prospect</h2>
  </div>
  <!-- BEGIN: Wizard Layout -->
  <div class="intro-y box py-10 sm:py-20 mt-5">
    <div class="relative before:hidden before:lg:block before:absolute before:w-[69%] before:h-[3px] before:top-0 before:bottom-0 before:mt-4 before:bg-slate-100 before:dark:bg-darkmode-400 flex flex-col lg:flex-row justify-center px-5 sm:px-20">
      <div class="intro-x lg:text-center flex items-center lg:block flex-1 z-10" v-if="(step >= 1)">
        <button class="w-10 h-10 rounded-full btn btn-primary">1</button>
        <div class="lg:w-32 font-medium text-base lg:mt-3 ml-3 lg:mx-auto">
          Prospect Details
        </div>
      </div>

      <div class="intro-x lg:text-center flex items-center lg:block flex-1 z-10 mt-5 lg:mt-0">
        <button class="w-10 h-10 rounded-full btn btn-primary" v-if="(step >= 2)">2</button>
        <button class="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" v-else>2</button>
        <div class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
          Prospect Address
        </div>
      </div>

      <!--
      <div
        class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
      >
        <button
          class="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
        >
          3
        </button>
        <div
          class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
        >
          Setup Your Business Details
        </div>
      </div>
      

      <div
        class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10"
      >
        <button
          class="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400"
        >
          4
        </button>
        <div
          class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400"
        >
          Setup Billing Account
        </div>
      </div>
      -->
      <div class="intro-x lg:text-center flex items-center mt-5 lg:mt-0 lg:block flex-1 z-10">
        <button class="w-10 h-10 rounded-full btn btn-primary" v-if="(step >= 3)">3</button>
        <button class="w-10 h-10 rounded-full btn text-slate-500 bg-slate-100 dark:bg-darkmode-400 dark:border-darkmode-400" v-else>3</button>
        <div class="lg:w-32 text-base lg:mt-3 ml-3 lg:mx-auto text-slate-600 dark:text-slate-400">
          Activity
        </div>
      </div>
    </div>

    <div class="px-5 sm:px-20 mt-10 pt-10 border-t border-slate-200/60 dark:border-darkmode-400">
      <ProspectStep1Form
        v-if="(step == 1)"
        :prospect="form"
        @submit="submit"
      />

      <ProspectStep2Form
        v-if="(step == 2)"
        :prospect="form"
        @submit="submit" 
      />

      <ActivitieForm
        v-if="(step == 3)"
        :activitie="formactivitie"
        @submit="submit" 
      />
    </div>
  </div>
  <!-- END: Wizard Layout -->
</template>
