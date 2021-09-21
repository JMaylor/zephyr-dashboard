<template>
  <div class="bg-blue-200 h-screen w-screen flex items-center justify-center">
    <div class="shadow-lg rounded-2xl w-4/5">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="p-8 bg-white bg-opacity-30 rounded-t-2xl md:rounded-tr-none md:rounded-bl-2xl">
          <AuthAcceptTerms class="w-full" />
        </div>
        <div class="p-8 bg-white rounded-b-2xl md:rounded-l-none md:rounded-r-2xl">
          <div class="flex justify-center items-center h-full">
            <router-link to="/dashboard">Go To Dashboard</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>