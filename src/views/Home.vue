<template>
  <DashboardLayout>
    <div class="grid grid-cols-12 gap-4">
      <HomeCalendar />
      <DashboardCard class="bg-white dark:bg-coolGray-900 col-span-12 sm:col-span-6">
        <VChart />
      </DashboardCard>
      <DashboardCard class="bg-white dark:bg-coolGray-900 col-span-12 md:col-span-6">
        <HomeTable />
      </DashboardCard>
    </div>
  </DashboardLayout>
</template>