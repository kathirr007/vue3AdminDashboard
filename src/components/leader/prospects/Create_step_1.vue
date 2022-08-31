<script>
export default {
    name: "ProspectStep1Form",
}
</script>

<script setup>
// import { storeToRefs } from "pinia";
import { reactive } from 'vue';
import useVuelidate from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'

const submit = reactive({
    name: "",
});
const rules = {
    name: { 
        required,
        minLength: minLength(2)
        },
};

const v$ = useVuelidate(rules, submit)

const submitt = async () => {
    const result = await v$.value.$validate()
    if(result) {
        alert('ok')
    } else {
        alert('error')
    }
}

// const validate = useVuelidate(rules, toRefs(submit));
// const save = () => {
//     validate.value.$touch();
//     if (validate.value.$invalid) {
//         Toastify({
//             node: dom("#failed-notification-content")
//                 .clone()
//                 .removeClass("hidden")[0],
//             duration: 3000,
//             newWindow: true,
//             close: true,
//             gravity: "top",
//             position: "right",
//             stopOnFocus: true,
//         }).showToast();
//     } else {
//         Toastify({
//             node: dom("#success-notification-content")
//                 .clone()
//                 .removeClass("hidden")[0],
//             duration: 3000,
//             newWindow: true,
//             close: true,
//             gravity: "top",
//             position: "right",
//             stopOnFocus: true,
//         }).showToast();
//     }
// };

defineProps({
    prospect: {
        type: Object,
        required: true,
    },
})

defineEmits(["submit"]);
</script>

<template>
    <form @submit.prevent="$emit('submit')" autocomplete="on">
     <div class="font-medium text-base">Profile</div>
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <!-- <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtFirstname" class="form-label">First Name</label>
                <FormKit type="text" v-model="prospect.firstname" />
            </div> -->

            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtFirstname" class="form-label">First Name</label>
                <input
                  type="text"
                  id="txtFirstname"
                  class="form-control"
                  required
                  placeholder="First Name *"
                  v-model="prospect.firstname" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtLastname" class="form-label">Last Name</label>
                <input
                  type="text"
                  id="txtLastname"
                  class="form-control"
                  required
                  placeholder="Last Name *"
                  v-model="prospect.lastname" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtLastname" class="form-label">Second Name</label>
                <input
                  type="text"
                  id="txtLastname"
                  class="form-control"
                  placeholder="Second Name"
                  v-model="prospect.lastname" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Place of Birth</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Place of Birth"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label>Gender</label>
                <div class="flex flex-col sm:flex-row mt-2">
                    <div class="form-check mr-2">
                        <input
                          v-model="prospect.gender"
                          class="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="Feminine" />
                        <label class="form-check-label" for="feminine">Feminine</label>
                    </div>
                    <div class="form-check mr-2 mt-2 sm:mt-0">
                        <input
                          v-model="prospect.gender"
                          class="form-check-input"
                          type="radio"
                          name="horizontal_radio_button"
                          value="Male" />
                        <label class="form-check-label" for="male">Male</label>
                    </div>
                </div>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Age</label>
                <input
                  v-model.number="prospect.age"
                  type="number"
                  class="form-control"
                  placeholder="Age"
                  minlength="1"
                  maxlength="2" />
            </div>
             <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">RFC</label>
                <input
                  v-model="prospect.rfc"
                  type="text"
                  class="form-control"
                  placeholder="RFC"
                  maxlength="16" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">CURP</label>
                <input
                  v-model="prospect.curp"
                  type="text"
                  class="form-control"
                  placeholder="CURP" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Email</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Email"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Mobile Phone</label>
                <input
                  v-model.number="prospect.mobilephone"
                  type="text"
                  class="form-control w-full"
                  placeholder="Mobile Phone" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Home Phone</label>
                <input
                  v-model.number="prospect.homephone"
                  type="text"
                  class="form-control w-full"
                  placeholder="Home Phone" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtOfficePhone" class="form-label">Office Phone</label>
                <input
                  type="text"
                  id="txtOfficePhone"
                  class="form-control"
                  placeholder="Office Phone"
                  v-model="prospect.officephone" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Extension</label>
                <input
                  v-model.number="prospect.extension"
                  type="number"
                  class="form-control"
                  placeholder="Extension" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Profession</label>
                <select class="form-control" placeholder="Profession" v-model="prospect.profession">
                    <option value="">Profession</option>
                    <option value="Abogado">ABOGADO</option>
                    <option value="Ama de casa">AMA DE CASA</option>
                    <option value="Arquitecto">ARQUITECTO</option>
                    <option value="Comerciante">COMERCIANTE</option>
                    <option value="Consultor">CONSULTOR</option>
                    <option value="Contador">CONTADOR</option>
                    <option value="Dentista">DENTISTA</option>
                    <option value="Empleado Gobierno">EMPLEADO GOBIERNO</option>
                    <option value="Empleado IP">EMPLEADO IP</option>
                    <option value="Empresario">EMPRESARIO</option>
                    <option value="Enfermera">ENFERMERA</option>
                    <option value="Ingeniero">INGENIERO</option>
                    <option value="Médico">MÉDICO</option>
                    <option value="Profesionista">PROFESIONISTA</option>
                </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Service Priority</label>
                <select class="form-control" v-model="prospect.servicepriority" required>
                    <option disabled value="">Service Priority *</option>
                    <option value="Bajo">Bajo</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Alto</option>
                    <option value="Pendiente">Pendiente</option>
                </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Prospect Origin</label>
                <select class="form-control" v-model="prospect.prospectingorigin" required>
                    <option disabled value="">Prospecting Origin *</option>
                    <option value="Cartera Propia">CARTERA PROPIA</option>
                    <option value="Casas Funerarias">CASAS FUNERARIAS</option>
                    <option value="Centros Comerciales">CENTROS COMERCIALES</option>
                    <option value="Conferencias">CONFERENCIAS</option>
                    <option value="Empresas">EMPRESAS</option>
                    <option value="En línea">EN LINEA</option>
                    <option value="Eventos">EVENTOS</option>
                    <option value="Exposiciones">EXPOSICIONES</option>
                    <option value="Facebook">FACEBOOK</option>
                    <option value="Hospitales">HOSPITALES</option>
                    <option value="Iglesias">IGLESIAS</option>
                    <option value="Mercado Público">MERCADO PUBLICO</option>
                    <option value="Metrobus">METROBUS</option>
                    <option value="Mexicraneos">MEXICRANEOS</option>
                    <option value="Oficina Corporativo">OFICINA CORPORATIVO</option>
                    <option value="Otros">OTROS</option>
                    <option value="Panteones">PANTEONES</option>
                    <option value="Prensa">PRENSA</option>
                    <option value="PRIDE CDMX 2022">PRIDE CDMX 2022</option>
                    <option value="Programas de Radio">PROGRAMAS DE RADIO</option>
                    <option value="Radio">RADIO</option>
                    <option value="Redes Sociales">REDES SOCIALES</option>
                    <option value="Santa Gloria">SANTA GLORIA</option>
                    <option value="Telemarketing">TELEMARKETING</option>
                    <option value="Televisión">TELEVISION</option>
                    <option value="Temporada Nov 2021">TEMPORADA NOV 2021</option>
                    <option value="Webinar BBF">WEBINAR BBF</option>
                </select>
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label class="form-label">Prospecting Medium</label>
                <select class="form-control" v-model="prospect.prospectingmedium" required>
                    <option disabled value="">Prospecting Medium *</option>
                    <option value="Bajo">Bajo</option>
                    <option value="Medio">Medio</option>
                    <option value="Alto">Alto</option>
                    <option value="Pendiente">Pendiente</option>
                </select>
            </div>
            <div class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <!-- <button class="btn btn-secondary w-24" disabled>Previous</button> -->
                <button class="btn btn-primary w-24 ml-2">Next</button>
            </div>
        </div>
    </form>
</template>