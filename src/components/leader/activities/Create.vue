<script>
    export default {
        name: "ActivitieForm",
    }
</script>

<script setup>
import { ref } from "vue";
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

defineProps({
    activitie: {
        type: Object,
        required: true,
    },
})

defineEmits(["submit"]);

// const categories = ref([1, 3]);
const categories = ref([]);
const editorConfig = {
  toolbar: {
    items: [],
  },
};
const editorData = ref("<p>Comments</p>");

// const date = ref();
// const startDate = new Date();
// const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
// date.value = new Date();

// Date start - end
// const start_date = ref();
// const flow = ref([ 'calendar' ]);

// const end_date = ref();
// const flows = ref([ 'month', 'year' ]);

// Date
const start_date = ref(new Date());
const end_date = ref(new Date());

const start_time = ref({ 
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });
const end_time = ref({ 
            hours: new Date().getHours(),
            minutes: new Date().getMinutes()
        });

</script>

<template>
    <form @submit.prevent="$emit('submit')" autocomplete="on">
        <div class="font-medium text-base">Profile</div>
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <!-- <div class="intro-y col-span-12 sm:col-span-6">
                <label for="txtTitle" class="form-label">Activities</label>
                <input type="text" id="txtTitle" class="form-control" placeholder="Activities"
                    v-model="activitie.title" />
            </div> -->
            <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">Activity</label>
                <TomSelect
                    id="crud-form-2"
                    v-model="categories"
                    class="w-full"
                    multiple>
                    <option value="">Activity</option>
                    <option value="1">Call</option>
                    <option value="2">Quote</option>
                    <option value="3">Meet</option>
                    <option value="4">Whatsapp</option>
                    <option value="5">SMS</option>
                </TomSelect>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">Start Date Activity</label>
                <Datepicker v-model="start_date"  utc modelType="yyyy.MM.dd" placeholder="Select Start Date Activity" :enableTimePicker="false"  />
             </div>
            <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">Start Time</label>
                 <Datepicker v-model="start_time" timePicker placeholder="Select Start Time Activity" />
            </div>

            <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">End Date Activity</label>
                  <Datepicker v-model="end_date"  utc modelType="yyyy.MM.dd" placeholder="Select End Date Activity" :enableTimePicker="false" />
             </div>
              <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">End Time</label>
                 <Datepicker v-model="end_time" timePicker placeholder="Select End Time Activity" />
            </div>


             <!-- <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">Start Date Activity</label>
                  <Datepicker v-model="start_date" :flow="flow" utc modelType="yyyy.MM.dd" placeholder="Select Date"  />
             </div> 
             <div class="intro-y col-span-12 sm:col-span-6">
                <label for="crud-form-2" class="form-label">End Date Activity</label>
                  <Datepicker v-model="end_date" :flow="flows" utc />
             </div>-->



            <!-- <div class="intro-y col-span-12 sm:col-span-6">
                <label>Start Date</label>
                 <Datepicker v-model="date" class="mt-2"  />
            </div>
            

            <div class="intro-y col-span-12 sm:col-span-6">
                <label>End Date</label>
                 <Datepicker v-model="time" timePicker />
            </div> -->
           

           
          
             <div class="intro-y col-span-12 ">
                <label>Comments</label>
                <div class="mt-2">
                    <ClassicEditor v-model="editorData" :config="editorConfig" placeholder="comments"/>
                </div>
            </div>



            <!-- <div class="intro-y col-span-12 sm:col-span-6 relative ">
                
                <div class="absolute rounded-l w-10 h-1/2 flex items-center justify-center bg-slate-100 border text-slate-500 dark:bg-darkmode-700 dark:border-darkmode-800 dark:text-slate-400">
                    <CalendarIcon class="w-4 h-4" />
                </div>
                <Litepicker v-model="date" :options="{
                                autoApply: false,
                                showWeekNumbers: true,
                                dropdowns: {
                                minYear: 1990,
                                maxYear: null,
                                months: true,
                                years: true,
                                },
                            }" class="form-control pl-12" />
            </div> -->

            

            <!--    <div class="intro-y col-span-12 sm:col-span-6">
                <label for="txtType" class="form-label">Type</label>
                <input
                    type="text"
                    id="txtType"
                    class="form-control"
                    placeholder="Lastname"
                    v-model="activitie.type"
                />
            </div>

                
                <div class="intro-y col-span-12 sm:col-span-6">
                    <label for="txtEmail" class="form-label">Email</label>
                    <input
                        type="text"
                        id="txtEmail"
                        class="form-control"
                        placeholder="Important Meeting"
                        v-model="prospect.email"
                    />
                </div>
                <div class="intro-y col-span-12 sm:col-span-6">
                    <label for="txtOfficePhone" class="form-label">Office Phone</label>
                    <input
                        type="text"
                        id="txtOfficePhone"
                        class="form-control"
                        placeholder="Job, Work, Documentation"
                        v-model="prospect.officephone"
                    />
                </div>
                <div class="intro-y col-span-12 sm:col-span-6">
                    <label for="input-wizard-5" class="form-label">Doesn't Have</label>
                    <input
                        id="input-wizard-5"
                        type="text"
                        class="form-control"
                        placeholder="Job, Work, Documentation"
                    />
                </div>
                <div class="intro-y col-span-12 sm:col-span-6">
                    <label for="input-wizard-6" class="form-label">Size</label>
                    <select id="input-wizard-6" class="form-select">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
                -->
            <div class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <button class="btn btn-secondary w-24">Previous</button>
                <button class="btn btn-primary w-24 ml-2">Next</button>
            </div>
        </div>
    </form>
</template>

<style>
.dp__theme_light {
   --dp-background-color: #1b253b;
   --dp-text-color: #b6c0ce;
   --dp-hover-color: #1e40af;
   --dp-hover-text-color: #b6c0ce;
   --dp-hover-icon-color: #959595;
   --dp-primary-color: #1e40af;
   --dp-primary-text-color: #b6c0ce;
   --dp-secondary-color: #b6c0ce;
   --dp-border-color: #959595;
   --dp-menu-border-color: #2d2d2d;
   --dp-border-color-hover: #1b253b;
   --dp-disabled-color: #737373;
   --dp-scroll-bar-background: #212121;
   --dp-scroll-bar-color: #484848;
   --dp-success-color: #1e40af;
   --dp-success-color-disabled: #428f59;
   --dp-icon-color: #b6c0ce;
   --dp-danger-color: #e53935;
   --dp-highlight-color: rgba(0, 92, 178, 0.2);
}
.dp__input {
    padding: 8px 40px;
    font-family: Roboto;
    font-size: 0.875rem;
}
</style>