<template lang="pug">
.table(class="h-[70vh]")
  .text-4xl.text-center.table-cell.align-middle Welcome to Aji Voca Learn
    .mx-auto.w-fit
      img.w-64.h-64(src="~/assets/images/vt.png")
    .flex.flex-row-reverse.flex-wrap
      NuxtLink.flex-1.m-2(class="min-w-[15rem]", to="/settings")
        UiButton.w-full(raised, icon="arrow_forward") Import Words
      NuxtLink.flex-1.m-2(class="min-w-[15rem]", to="/add")
        UiButton.w-full(outlined, icon="note_add") Add Word
</template>
