<script setup>
import { toRef, reactive } from 'vue'
const {props = {}, instance} = defineProps(['props', 'instance'])
const {

} = props

const users = [{
    id: '5d2c865e9a0bae79a6ef7cfa',
    firstName: 'Ashley',
    lastName: 'Mcdaniel',
    fullName: 'Ashley Mcdaniel',
    email: 'ashleymcdaniel@nebulean.com',
    country: 'Cayman Islands',
    starred: true,
    hasReport: false,
    status: 'warning',
    checked: false,
    trend: 'down',
    color: 'warning',
    graph: 'M 5 20 C 10 5, 15 5, 30 30 S 20 20, 70 20',
    graphColor: '#4ae387',
  },
  {
    id: '5d2c865ec73341e16e5f2251',
    firstName: 'Sellers',
    lastName: 'Todd',
    fullName: 'Todd Sellers',
    email: 'sellerstodd@nebulean.com',
    country: 'Togo',
    starred: false,
    hasReport: false,
    status: 'info',
    checked: false,
    trend: 'none',
    color: 'primary',
    graph: 'M 5 30 C 10 5, 30 10, 40 30 S 30 30, 90 40',
    graphColor: '#e34a4a',
  },
  {
    id: '5d2c865e38800c5ce28f2f6b',
    firstName: 'Sherman',
    lastName: 'Knowles',
    fullName: 'Sherman Knowles',
    email: 'shermanknowles@nebulean.com',
    country: 'Central African Republic',
    starred: true,
    hasReport: true,
    status: 'warning',
    checked: false,
    trend: 'none',
    color: 'warning',
    graph: 'M 5 20 C 10 5, 15 5, 30 30 S 20 20, 70 20',
    graphColor: '#4ae387',
  },
  {
    id: '5d2c865e957cd150b82e17a6',
    firstName: 'Vasquez',
    lastName: 'Lawson',
    fullName: 'Vasquez Lawson',
    email: 'vasquezlawson@nebulean.com',
    country: 'Bouvet Island',
    starred: true,
    hasReport: false,
    status: 'info',
    checked: false,
    trend: 'down',
    color: 'warning',
    graph: 'M 5 30 C 10 5, 30 10, 40 30 S 30 30, 90 40',
    graphColor: '#e34a4a',
  },
  {
    id: '5d2c865e9194dbe2faf99227',
    firstName: 'April',
    lastName: 'Sykes',
    fullName: 'April Sykes',
    email: 'aprilsykes@nebulean.com',
    country: 'Saint Vincent and The Grenadines',
    starred: false,
    hasReport: true,
    status: 'warning',
    checked: false,
    trend: 'down',
    color: 'primary',
    graph: 'M 5 20 C 10 5, 15 5, 30 30 S 20 20, 70 20',
    graphColor: '#4ae387',
  }]

  const keys = [{
    label: '用户',
    dataKey: 'fullName',
  }]
</script>

<template>
  <div class="flex flex-col">
  <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div class="shadow overflow-hidden border-gray-200">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                姓名
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                标题
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                状态
              </th>
              <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                角色
              </th>
              <th scope="col" class="relative px-6 py-3">
                <span class="sr-only">编辑</span>
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="">
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">
                      Jane Cooper
                    </div>
                    <div class="text-sm text-gray-500">
                      jane.cooper@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-gray-900">Regional Paradigm Technician</div>
                <div class="text-sm text-gray-500">Optimization</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                Admin
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
