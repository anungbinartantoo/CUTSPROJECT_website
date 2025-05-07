<template>
  <section class="p-6 max-w-xl mx-auto">
    <h2 class="text-3xl font-bold mb-4">Reservasi</h2>
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium">Nama</label>
        <input type="text" class="w-full border p-2 rounded" placeholder="Nama lengkap" />
      </div>
      <div>
        <label class="block text-sm font-medium">Tanggal</label>
        <input type="date" class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block text-sm font-medium">Jam</label>
        <input type="time" class="w-full border p-2 rounded" />
      </div>
      <div>
        <label class="block text-sm font-medium">Layanan</label>
        <select class="w-full border p-2 rounded">
          <option>Haircut</option>
          <option>Shaving</option>
          <option>Hair Coloring</option>
          <option>Facial</option>
        </select>
      </div>
      <button type="submit" class="bg-black text-white px-4 py-2 rounded">Kirim Reservasi</button>
    </form>
  </section>
</template>

<script>
export default {
  name: 'Reservation',
}
</script>
