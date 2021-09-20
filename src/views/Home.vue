<template>
  <DashboardLayout>
    <template v-slot:default="{ isDark }">
      <div class="grid grid-cols-12 gap-4">
        <HomeCalendar :isDark="isDark" />
        <DashboardCard class="bg-white dark:bg-coolGray-900 col-span-12 sm:col-span-6 xl:col-span-4">
          <VChart />
        </DashboardCard>
      </div>
    </template>
  </DashboardLayout>
</template>