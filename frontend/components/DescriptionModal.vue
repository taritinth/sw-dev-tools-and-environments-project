<template>
  <div>
    <!-- Modal -->
    <div class="fixed top-0 flex left-0 justify-center items-center md:inset-0 h-modal sm:h-full" id="popup-modal">
        <div class="relative px-4 w-full max-w-6xl h-full md:h-auto">
            <!-- Modal content -->
            <div class="relative bg-white rounded-xl shadow dark:bg-gray-700 bg-blue-50">
                <!-- Modal header (close icon)-->
                <div class="flex justify-end p-2">
                    <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                    </button>
                </div>
                <!-- Modal body -->
                <div class="flex flex-col pb-5 pt-0 text-center px-20">
                    <!-- first box -->
                    <div class="flex items-center bg-white py-3 pl-5 rounded-xl">
                        <div class="flex bg-blue-50 rounded-lg w-14 h-14">
                            <img class="object-contain" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/True_Corporation_%28Thailand%29.svg/1280px-True_Corporation_%28Thailand%29.svg.png">
                        </div>
                        <div class="flex flex-col items-start pl-5">
                            <p class="font-bold text-lg">Backend Develop (Part-time)</p>
                            <p class="text-base text-gray-400">True Co.</p>
                        </div>
                    </div>
                    <!-- second box -->
                    <div class="flex items-center justify-around bg-white p-3 rounded-xl mt-5">
                        <div class="flex flex-col items-center pl-5">
                            <p class="text-base text-gray-400">Due Date</p>
                            <p class="font-bold text-lg">Any time</p>
                        </div>
                        <div class="flex flex-col items-center pl-5">
                            <p class="text-base text-gray-400">Salary</p>
                            <p class="font-bold text-lg">Paid</p>
                        </div>
                        <div class="flex flex-col items-center pl-5">
                            <p class="text-base text-gray-400">Job Type</p>
                            <p class="font-bold text-lg">Part-time</p>
                        </div>
                    </div>
                    <!-- description box -->
                    <div class="flex flex-col items-start bg-white p-5 rounded-xl mt-5 pb-7">
                        <div class="pl-5 my-2">
                            <p class="text-base text-gray-400">Description</p>
                        </div>
                        <div class="flex flex-col items-start pl-5 max-h-80 overflow-auto">
                            <p class="text-base font-semibold mt-2 mb-1">
                                หน้าที่ความรับผิดชอบ
                            </p>
                            <p class="text-base text-left leading-7">
                                - ออกแบบและพัฒนา API สำหรับ integrated ระหว่าง System<br>
                                - ออกแบบและพัฒนา Mobile Application<br>
                                - แก้ไข software defects และปรับปรุงพัฒนา Applications<br>
                                - ออกแบบ พัฒนาระบบ และดูแลโครงการสารสนเทศที่สำคัญของบริษัท ตลอดจนการให้ข้อเสนอแนะแนวคิดใหม่ๆ เพื่อการพัฒนาปรับปรุงผลิตภัณฑ์และบริการ<br>
                                - คิดค้นเทคโนโลยีและเครื่องมือใหม่ๆ เพื่อนำมาใช้ในการพัฒนาผลิตภัณฑ์ บริการ และระบบสารสนเทศของบริษัท<br>
                                - ศึกษาและรวบรวมข้อมูล เพื่อใช้ออกแบบและพัฒนาระบบของฝ่ายงานต่างๆ เพื่อการดำเนินธุรกิจของบริษัท<br>
                            <p class="text-base font-semibold mt-2 mb-1">
                                คุณสมบัติ
                            </p>
                            <p class="text-base text-left leading-7">
                                - วุฒิการศึกษาระดับปริญญาตรีหรือปริญญาโท ในสาขาวิชา วิศวกรรมคอมพิวเตอร์, วิทยาการคอมพิวเตอร์, เทคโนโลยีสารสนเทศ, คอมพิวเตอร์ธุรกิจ<br>
                                - มีประสบการณ์หรือความรู้ด้าน Full Stack Developer, Java, Golang, RESTFul API development, K8S, Docker, Software Development<br>
                                - มีประสบการณ์หรือความรู้ด้าน Frontend Developer, Flutter, Native Swift - IOS, Native Kotlin - Android, Design , Vue, Angular<br>
                                - มีประสบการณ์หรือความรู้ด้าน Backend Developer Golang, Java Spring Boot, Nodejs, Kotlin, Kafka, Elasticsearch (ELK)<br>
                                - วุฒิการศึกษาระดับปริญญาตรีหรือปริญญาโท ในสาขาวิชา วิศวกรรมคอมพิวเตอร์, วิทยาการคอมพิวเตอร์, เทคโนโลยีสารสนเทศ, คอมพิวเตอร์ธุรกิจ<br>
                                - มีประสบการณ์หรือความรู้ด้าน Full Stack Developer, Java, Golang, RESTFul API development, K8S, Docker, Software Development<br>
                                - มีประสบการณ์หรือความรู้ด้าน Full Stack Developer, Java, Golang, RESTFul API development, K8S, Docker, Software Development<br>
                                - มีประสบการณ์หรือความรู้ด้าน Frontend Developer, Flutter, Native Swift - IOS, Native Kotlin - Android, Design , Vue, Angular<br>
                                - มีประสบการณ์หรือความรู้ด้าน Backend Developer Golang, Java Spring Boot, Nodejs, Kotlin, Kafka, Elasticsearch (ELK)<br>
                            </p>      
                        </div>
                    </div>
                    <button data-modal-toggle="popup-modal" type="button" class="w-56 self-end text-white bg-indigo-700 hover:bg-indigo-600 text-lg rounded-lg items-center px-5 py-2.5 text-center mt-5">
                        Apply
                    </button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>