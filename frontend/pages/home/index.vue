<template>
  <!-- <div class="popular-movies">
    <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">
      POPULAR MOVIES
    </h2>
  </div> -->
  
    <div class="overflow-y-scroll max-h-screen">
        <div class="flex justify-center content-around">
            <div class="grid grid-rows-3 justify-items-center mt-4 mb-4">
                
                <!-- row 1-->
                <div class="bg-blue-500 rounded-md flex flex-col mx-4 my-4  w-3/4  h-56 ">
                    <div class="grid grid-cols-2 ">
                        <div class="grid grid-rows-2">
                            <p class="text-2xl text-white ml-4 pt-7 pl-12">
                                Seach for Internships
                            </p>
                            <p class="text-sm text-white text-justify ml-4  pl-12">
                                An internship is a short-term work experience offered by companies and other organizations 
                                for people usually students, but not alwaysto get some entry-level exposure to a particular 
                                industry or field. 
                            </p>
                        </div>

                        <div class="grid grid-rows-3 flex justify-center">
                            <div class="grid grid-rows-1"></div>
                            <div class="grid grid-rows-1">
                                <button class="grid grid-rows-1  bg-white hover:bg-pink-200 text-blue-500 font-bold py-2 px-4 
                                    border-b-4 border-blue-600 hover:border-pink-400 rounded-md pt-4 drop-shadow-lg hover:drop-shadow-xl mt-3 ml-8 w-40 h-14" type="button">
                                    Explore Now
                                </button>
                            </div>
                            <div class="grid grid-rows-1"></div>
                        </div>
                    </div>
                </div>
                <!-- end row 1-->

                <!-- row 2-->
                <div class="bg-blue-500 rounded-md flex flex-col mx-4 my-4  w-3/4  h-56 ">
                    <div class="grid grid-cols-2 ">
                        <div class="grid grid-rows-2">
                            <p class="text-2xl text-white ml-4 pt-7 pl-12">
                                Seach for Full-time jobs
                            </p>
                            <p class="text-sm text-white text-justify ml-4  pl-12">
                                A full-time job is one that expects a person to work a certain number of hours per week. The number 
                                of hours required to work is determined by a company, institution, or government, typically 40–42 
                                hours per week as full-time work.
                            </p>
                        </div>

                        <div class="grid grid-rows-3 flex justify-center">
                            <div class="grid grid-rows-1"></div>
                            <div class="grid grid-rows-1">
                                <button class="grid grid-rows-1  bg-white hover:bg-pink-200 text-blue-500 font-bold py-2 px-4 
                                    border-b-4 border-blue-600 hover:border-pink-400 rounded-md pt-4 drop-shadow-lg hover:drop-shadow-xl mt-3 ml-8 w-40 h-14" type="button">
                                    Explore Now
                                </button>
                            </div>
                            <div class="grid grid-rows-1"></div>
                        </div>
                    </div>
                </div>
                <!--end row 2-->

                <!-- row 3-->
                <div class="bg-blue-500 rounded-md flex flex-col mx-4 my-4  w-3/4  h-56 ">
                    <div class="grid grid-cols-2 ">
                        <div class="grid grid-rows-2">
                            <p class="text-2xl text-white ml-4 pt-7 pl-12">
                                Seach for Part-time jobs
                            </p>
                            <p class="text-sm text-white text-justify ml-4  pl-12">
                                A part-time job is one that usually requires a person to work fewer hours per workweek than their 
                                employer deems full-time employment. There isn't a set number of hours per week that's legally  
                                considered full-time or part-time employment. 
                            </p>
                        </div>

                        <div class="grid grid-rows-3 flex justify-center">
                            <div class="grid grid-rows-1"></div>
                            <div class="grid grid-rows-1">
                                <button class="grid grid-rows-1  bg-white hover:bg-pink-200 text-blue-500 font-bold py-2 px-4 
                                    border-b-4 border-blue-600 hover:border-pink-400 rounded-md pt-4 drop-shadow-lg hover:drop-shadow-xl mt-3 ml-8 w-40 h-14" type="button">
                                    Explore Now
                                </button>
                            </div>
                            <div class="grid grid-rows-1"></div>
                        </div>
                    </div>
                </div>
                <!--end row 3-->

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