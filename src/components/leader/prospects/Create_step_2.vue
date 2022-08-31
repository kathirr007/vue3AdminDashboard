<script>
export default {
    name: "ProspectStep2Form",
}
</script>

<script setup>


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
        <div class="font-medium text-base">Address</div>
        <div class="grid grid-cols-12 gap-4 gap-y-5 mt-5">
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Street</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Street"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Outdoor</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Outdoor"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Indoor</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Indoor"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Zip Code</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Zip Code"
                  v-model="prospect.email" />
            </div>
             <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">State</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="State"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">City</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="City"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Town</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Town"
                  v-model="prospect.email" />
            </div>
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Suburb</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Suburb"
                  v-model="prospect.email" />
            </div>
            
            <div class="intro-y col-span-12 sm:col-span-6 md:col-span-4">
                <label for="txtEmail" class="form-label">Country</label>
                <input
                  type="text"
                  id="txtEmail"
                  class="form-control"
                  placeholder="Country"
                  v-model="prospect.email" />
            </div>

            
            <!-- <div class="intro-y col-span-12 sm:col-span-6">
                <label class="form-label">State</label>
                <select class="form-control" v-model="prospect.state">
                    <option disabled value="">State</option>
                    <option value="">Seleccione una opción</option>
                    <option value="Aguacalientes">Aguacalientes</option>
                    <option value="Baja California">Baja California</option>
                    <option value="Baja California Sur">Baja California Sur</option>
                    <option value="Campeche">Campeche</option>
                    <option value="Chiapas">Chiapas</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Ciudad de México">Ciudad de México</option>
                    <option value="Coahuila">Coahuila</option>
                    <option value="Colima">Colima</option>
                    <option value="Durango">Durango</option>
                    <option value="Estado de México">Estado de México</option>
                    <option value="Extranjero">Extranjero</option>
                    <option value="Guanajuato">Guanajuato</option>
                    <option value="Guerrero">Guerrero</option>
                    <option value="Hidalgo">Hidalgo</option>
                    <option value="Jalisco">Jalisco</option>
                    <option value="Michoacan">Michoacan</option>
                    <option value="Morelos">Morelos</option>
                    <option value="Nayarit">Nayarit</option>
                    <option value="Nuevo León">Nuevo León</option>
                    <option value="Oaxaca">Oaxaca</option>
                    <option value="Puebla">Puebla</option>
                    <option value="Querétaro">Querétaro</option>
                    <option value="Quintana Roo">Quintana Roo</option>
                    <option value="San Luis Potosi">San Luis Potosi</option>
                    <option value="Sinaloa">Sinaloa</option>
                    <option value="Sonora">Sonora</option>
                    <option value="Tabasco">Tabasco</option>
                    <option value="Tamaulipas">Tamaulipas</option>
                    <option value="Tlaxcala">Tlaxcala</option>
                    <option value="Veracruz">Veracruz</option>
                    <option value="Yucatan">Yucatan</option>
                    <option value="Zacatecas">Zacatecas</option>
                </select>
            </div> -->
           <!-- <div class="intro-y col-span-12 sm:col-span-6">
                <label class="form-label">City</label>
                <select class="form-control" placeholder="City" v-model="prospect.city">
                    <option value="">City</option>
                    <option value="Cuauhtémoc">Cuauhtémoc</option>
                    <option value="VenustianoCarranza">Venustiano Carranza</option>
                    <option value="Miguel Hidalgo">Miguel Hidalgo</option>
                </select>
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
                </div> -->
            <div class="intro-y col-span-12 flex items-center justify-center sm:justify-end mt-5">
                <button class="btn btn-secondary w-24">
                    Previous
                    </button>
                <button class="btn btn-primary w-24 ml-2">Next</button>
            </div>
        </div>
    </form>
</template>