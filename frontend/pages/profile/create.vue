
<template>
<div class="container mx-auto font-sans">
  <div class="text-center text-xl mt-4 mx-auto"><b>Fill in Profile</b></div>
  <!-- component -->
<div class="p-2">
    <div class="mx-4">
        <div class="flex justify-center items-end">
           <div class="flex mt-2 text-white relative">
                <div class="rounded-full transition duration-500 ease-in-out h-20 w-20 py-3 border-2 bg-indigo-600 border-indigo-600">
                    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user-plus ">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="8.5" cy="7" r="4"></circle>
                        <line x1="20" y1="8" x2="20" y2="14"></line>
                        <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                </div>
                </div>
                
            </div>
        </div>
    </div>
    <div class="p-4">
        <div>
            <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-4 mx-2">Full Name</div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input placeholder="First Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> </div>
                </div>
                <div class="w-full flex-1 mx-2 svelte-1l8159u">
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input placeholder="Last Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> </div>
                </div>
            </div>
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-4 mt-2 text-gray-600 text-xs leading-8 uppercase"> Email</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type="email" placeholder="salinya@gmail.com" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> </div>
                </div>
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-4 mt-2 text-gray-600 text-xs leading-8 uppercase"> Phone</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input placeholder="xxx-xxx-xxxx" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> </div>
                </div>
            </div>
            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-4 mt-2 text-gray-600 text-xs leading-8 uppercase">Education</div>
                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <input type="text" placeholder="University" class="p-1 px-2 appearance-none outline-none w-full text-gray-800"> </div>
            </div>
            <!-- Position -->
            <div class="flex flex-col md:flex-row">
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-4 mt-2 text-gray-600 text-xs leading-8 uppercase"> Position</div>
                    <div class="bg-white text-gray-800 my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
                          <option placeholder="Position" disabled selected class="p-1 px-2 appearance-none outline-none w-full text-gray-800">Position</option>
                          <option>Full Stack Developer</option>
                          <option>Mobile Developer</option>
                          <option>Front End Developer</option>
                          <option>Back End Developer</option>
                          <option>Web Developement</option>
                          <option>UX/UI</option>
                          <option>Graphic Design</option>
                      </select>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-down" class="w-7 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"></path>
                      </svg>
                    </div>
                </div>
                
                <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-4 mt-2 text-gray-600 text-xs leading-8 uppercase"> Job Type</div>
                    <div class="bg-white text-gray-800 my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u">
                        <select placeholder="Position" class="p-1 px-2 appearance-none outline-none w-full text-gray-800">
                          <option placeholder="Position" disabled selected class="p-1 px-2 appearance-none outline-none w-full text-gray-800">Job Type</option>
                          <option>Part-time</option>
                          <option>Full-time</option>
                          <option>Internship</option>
                      </select>
                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-down" class="w-7 h-8" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
            </div>
            <div class="w-full mx-2 flex-1 svelte-1l8159u">
                    <div class="font-bold h-6 mt-2 text-gray-600 text-xs leading-8 uppercase"> Resume</div>
            <div class="text-center p-6 bg-white-100 border border-gray-300" @dragover="dragover" @dragleave="dragleave" @drop="drop">
          <input type="file" multiple name="fields[assetsFieldHandle][]" id="assetsFieldHandle" 
            class="w-px h-px opacity-0 overflow-hidden absolute" @change="onChange" ref="file" accept=".pdf,.jpg,.jpeg,.png" />
  
    <label for="assetsFieldHandle" class="block cursor-pointer">
      <div>
        <span class="underline text-center text-xl text-gray-400">Click here to upload Resume/CV</span>
      </div>
    </label>
  </div>
  </div>
        </div>
        <div class="flex-center flex-col flex p-2 items-center">
            <div class="flex-center flex flex-col">
                <button type="submit" class="text-base w-56 ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-indigo-600 bg-indigo-700 
        text-indigo-100 
        border duration-200 ease-in-out 
        border-indigo-600 transition">Done</button>
            </div>
        </div>
    </div>

</template>

<script>

export default {
  layout: 'dashboard',
  data() {
    return {}
  },
  methods: {},
}
</script>