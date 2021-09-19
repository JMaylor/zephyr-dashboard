<template>
  <div class="bg-blue-200 h-screen w-screen flex items-center justify-center">
    <div class="shadow-lg rounded-lg w-4/5">
      <div class="grid grid-cols-1 md:grid-cols-2">
        <div class="p-8 bg-white bg-opacity-30 rounded-l-2xl">
          <AuthAcceptTerms class="w-full" />
        </div>
        <div class="p-8 bg-white rounded-2xl md:rounded-l-none">
          <div class="flex justify-center items-center h-full">
            <router-link to="/">Go To Dashboard</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>