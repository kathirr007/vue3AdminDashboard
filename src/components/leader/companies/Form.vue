<script>
    export default {
        name: "CompanyForm",
    }
</script>

<script setup>
    defineProps({
        company: {
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
        <div class="intro-y box p-5 intro-y grid grid-cols-3 gap-3 mt-5">
          <div class="mt-3">
            <label class="form-label">Name</label>
            <input v-model="company.name" type="text" class="form-control w-full" placeholder="Name" />
          </div>
          <div class="mt-3">
            <label class="form-label">Email</label>
            <input v-model="company.email" type="text" class="form-control w-full" placeholder="Email" />
          </div>
          <div class="mt-3">
            <label class="form-label">Password</label>
            <input v-model="company.password" type="password" class="form-control w-full" placeholder="Password" />
          </div>
          <div class="mt-3">
            <label class="form-label">Password Confirmation</label>
            <input v-model="company.password_confirmation" type="password" class="form-control w-full" placeholder="Password Confirmation" />
          </div>
          <div class="mt-3">
            <label class="form-label">Postal Code</label>
            <input v-model.number="company.postal_code" type="text" class="form-control w-full" placeholder="Postal Code" />
          </div>
          <div class="mt-3">
            <label class="form-label">State</label>
            <select class="form-control" v-model="company.state">
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
          </div>
          <div class="mt-3">
            <label class="form-label">City</label>
            <select class="form-control" placeholder="Profession" v-model="company.city">
              <option value="">City</option>
              <option value="Cuauhtémoc">Cuauhtémoc</option>
              <option value="VenustianoCarranza">Venustiano Carranza</option>
              <option value="Miguel Hidalgo">Miguel Hidalgo</option>
            </select>
          </div>
          <div class="text-center mt-5">
            <button type="button" class="btn btn-outline-secondary w-24 mr-1">
              Cancel
            </button>
            <button type="submit" class="btn btn-primary w-24">{{ textButton }}</button>
          </div>
        </div>
      </form>
      <!-- END: Form Layout -->
  </div>
</template>