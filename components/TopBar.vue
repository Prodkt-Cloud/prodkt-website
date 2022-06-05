<template>
  <Disclosure as="nav" class="bg-gray-900 p-6" v-slot="{ open }">
    <div class="mx-auto">
      <div class="relative flex items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div class="flex-1 flex items-center justify-center md:items-stretch md:justify-start">
          <div class="flex-shrink-0 flex items-top lg:items-center">
            <img class="block lg:hidden h-8 w-auto" src="assets/logo/prodkt-logomark.svg" alt="Prodkt" />
            <img class="hidden lg:block h-8 lg:h-16 w-auto" src="assets/logo/prodkt-logo.svg" alt="Prodkt" />
          </div>
          <div class="hidden md:block md:ml-6">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-800 hover:text-white', 'px-4 py-3 text-lg sm:text-sm']" :aria-current="item.current ? 'page' : undefined">
              <component :is="item.icon" class="mr-3 mb-1 flex-shrink-0 h-8 w-8 text-red-400" aria-hidden="true" />
              {{ item.name }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/vue/outline'
import { AppsIcon, DragDropIcon, UsersIcon, ShapeIcon, TriangleSquareCircleIcon, ColorSwatchIcon, TemplateIcon, Stack2Icon } from 'vue-tabler-icons'

const navigation = [
  { name: 'What we do', href: '/', current: false, icon: DragDropIcon },
  { name: 'Who we are', href: 'WhoWeAre', current: false, icon: UsersIcon },
  { name: 'Our work', href: 'OurWork', current: false, icon: ShapeIcon },
  { name: 'Design system', href: 'DesignSystem', current: false, icon: TriangleSquareCircleIcon },
  { name: 'Themes', href: 'Themes', current: false, icon: ColorSwatchIcon },
  { name: 'Blog', href: 'Blog', current: false, icon: TemplateIcon },
  { name: 'Capabilities', href: 'Capabilities', current: false, icon: Stack2Icon },
]
</script>