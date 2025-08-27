<template>
  <div class="border-4 border-gray-400 w-full max-w-[400px] mx-auto p-6 sm:p-8 rounded-lg">
    <!-- Search -->
    <div class="flex border border-gray-300 py-3 px-4 justify-between items-center gap-3">
      <input
        class="flex-1 outline-none focus:outline-none focus:ring-0 border-none"
        type="search"
        placeholder="Looking For..."
      />
      <div class="bg-blue-800 rounded-lg p-3 sm:p-4"></div>
    </div>

    <!-- Recent Articles -->
    <div class="mt-8 space-y-4">
      <h2 class="text-blue-800 text-xl sm:text-2xl">Recent Articles</h2>
      <div
        class="border-b border-gray-400 pb-2"
        v-for="index in 5"
        :key="index"
      >
        <p class="text-gray-400 text-sm sm:text-base">
          5 Alasan Mengapa Kamu Harus Tambal Gigi......
        </p>
      </div>
    </div>

    <!-- Archives -->
    <div class="mt-8">
      <h2 class="text-blue-800 text-xl sm:text-2xl mb-3">Archives</h2>
      <select
        class="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option disabled value="">Select Month</option>
        <option>Januari</option>
        <option>Februari</option>
        <option>Maret</option>
        <option>April</option>
        <option>Mei</option>
        <option>Juni</option>
        <option>Juli</option>
        <option>Agustus</option>
        <option>September</option>
        <option>Oktober</option>
        <option>November</option>
        <option>Desember</option>
      </select>
    </div>
  </div>
</template>

<script setup></script>
