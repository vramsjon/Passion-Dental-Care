<template>
  <div class="border-4 border-gray-400 h-[900px] w-[400px] p-8">
    <div class="flex border border-gray-300 py-4 px-4 justify-between">
      <input
        class="outline-none focus:outline-none focus:ring-0 focus:border-none"
        type="search"
        name=""
        id=""
        placeholder="Looking For..."
      />
      <div class="bg-blue-800 rounded-lg p-4"></div>
    </div>

    <div class="mt-30 space-y-4">
      <h2 class="text-blue-800 text-2xl">Recent Articles</h2>
      <div class="border-b border-gray-400 " v-for="index in 5" :key="index">
        <p class="text-gray-400">5 Alasan Mengapa Kamu Harus Tambal Gigi......</p>
      </div>
    </div>
    <div class="mt-10">
        <h2 class="text-blue-800 text-2xl">Archives</h2>
        <div class="">
            <select>
                <option  disabled value="">Select Month</option>
                <option value="">Januari</option>
                <option value="">Februari</option>
                <option value="">Maret</option>
                <option value="">April</option>
                <option value="">Mei</option>
                <option value="">Juni</option>
                <option value="">Juli</option>
                <option value="">Agustus</option>
                <option value="">September</option>
                <option value="">Oktober</option>
                <option value="">November</option>
                <option value="">Desember</option>
            </select>
        </div>

    </div>
  </div>
</template>
<script setup></script>
