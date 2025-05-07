<template>
  <nav class="bg-black text-white p-4 flex justify-between items-center">
    <div class="flex items-center space-x-2">
      <img src="/icon.png" alt="Logo" class="w-8 h-8" />
      <h1 class="text-xl font-bold">CutsProject</h1>
    </div>
    <ul class="flex space-x-4">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/services">Services</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/reservation">Reservation</router-link></li>

    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
