<template>
  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 md:col-span-6 space-y-4">
      <HomeCalendar class="transition-all" />
      <DashboardCard class="h-72 transition-all">
        <VChart />
      </DashboardCard>
    </div>
    <div class="col-span-12 md:col-span-6 space-y-4">
      <DashboardCard>
        <HomeTable />
      </DashboardCard>
      <DashboardCard>
        <div class="flex flex-col space-y-4">
          <div class="flex justify-between">
            <span class="font-bold text-zinc-500">Weekly Revenue</span>
            <div class="p-2 bg-green-300 rounded-lg">
              <span class="iconify h-6 w-6 text-green-800" data-icon="heroicons-outline:cash"></span>
            </div>
          </div>
          <span class="text-2xl font-medium">£1,860</span>
        </div>
      </DashboardCard>
    </div>
  </div>
</template>