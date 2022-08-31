<template>
  <div class="intro-y flex items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Languages Select</h2>
  </div>
  <!-- BEGIN: Basic Select -->
<div class="mt-3">
    <label>Basic</label>
    <div class="mt-2">
        <TomSelect v-model="select" :options="{
                      placeholder: 'Select your favorite language',
                    }" class="w-full">
            <option value="1">Spanish</option>
            <option value="2">English</option>
        </TomSelect>
    </div>
</div>
<!-- END: Basic Select -->
</template>

<script setup>
import { ref } from "vue";

const select = ref("1");
const selectMultiple = ref(["1", "3"]);
const selectHeader = ref(["2", "3", "5"]);
</script>
