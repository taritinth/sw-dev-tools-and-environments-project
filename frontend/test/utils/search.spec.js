import { mount, createLocalVue, shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuex from 'vuex'
import SearchPage from '@/pages/search/index.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const $router = {
  push: jest.fn(),
}

const $route = {
  query: {
    query: '',
    type: '',
  },
}

const $toast = {
  error: jest.fn(),
}
// Following lines tell Jest to mock any call to `axios.get`
// and to return `mockPostList` instead
jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          _id: '62091a6ea3f9106fed159b71',
          company: {
            _id: '620919f7a3f9106fed159b50',
            fullname: 'Meta',
            email: 'meta@gmail.com',
            phone: '0801234567',
            type: 'company',
            website: '',
            position: '',
            education: '',
            jobType: '',
            createdAt: '2022-02-13T14:47:19.582Z',
            updatedAt: '2022-02-13T14:47:58.743Z',
            __v: 0,
            profileImg:
              'https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/profile/620919f7a3f9106fed159b50_1644763678651.webp',
          },
          title: 'UX Designer',
          overview: 'We are looking for proficient with Meta technologies.',
          description:
            '<h2><u>หน้าที่ความรับผิดชอบ</u></h2><p>- ออกแบบและพัฒนา API สำหรับ integrated ระหว่าง System</p><p>- ออกแบบและพัฒนา Mobile Application</p><p>- แก้ไข software defects และปรับปรุงพัฒนา Applications</p><p>- ออกแบบ พัฒนาระบบ และดูแลโครงการสารสนเทศที่สำคัญของบริษัท ตลอดจนการให้ข้อเสนอแนะแนวคิดใหม่ๆ เพื่อการพัฒนาปรับปรุงผลิตภัณฑ์และบริการ</p><p>- คิดค้นเทคโนโลยีและเครื่องมือใหม่ๆ เพื่อนำมาใช้ในการพัฒนาผลิตภัณฑ์ บริการ และระบบสารสนเทศของบริษัท</p><p>- ศึกษาและรวบรวมข้อมูล เพื่อใช้ออกแบบและพัฒนาระบบของฝ่ายงานต่างๆ เพื่อการดำเนินธุรกิจของบริษัท</p><p><br></p><h2><u>คุณสมบัติ</u></h2><p>- วุฒิการศึกษาระดับปริญญาตรีหรือปริญญาโท ในสาขาวิชา วิศวกรรมคอมพิวเตอร์, วิทยาการคอมพิวเตอร์, เทคโนโลยีสารสนเทศ, คอมพิวเตอร์ธุรกิจ</p><p>- มีประสบการณ์หรือความรู้ด้าน Full Stack Developer, Java, Golang, RESTFul API development, K8S, Docker, Software Development</p><p>- มีประสบการณ์หรือความรู้ด้าน Frontend Developer, Flutter, Native Swift - IOS, Native Kotlin - Android, Reactive Programming , Design , Vue, Angular</p><p>- มีประสบการณ์หรือความรู้ด้าน Backend Developer Golang, Java Spring Boot, Nodejs, Kotlin, Kafka, Elasticsearch (ELK)</p>',
          type: 'fulltime',
          dueDate: null,
          status: true,
          salary: true,
          createdAt: '2022-02-13T14:49:18.824Z',
          updatedAt: '2022-02-13T14:49:18.824Z',
          __v: 0,
        },
        {
          _id: '62091985a3f9106fed159b31',
          company: {
            _id: '62091715a3f9106fed159ae6',
            fullname: 'Agoda',
            email: 'agoda@gmail.com',
            phone: '021234567',
            type: 'company',
            website: '',
            position: '',
            education: '',
            jobType: '',
            createdAt: '2022-02-13T14:35:01.812Z',
            updatedAt: '2022-02-13T18:02:15.863Z',
            __v: 0,
            profileImg:
              'https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/profile/62091715a3f9106fed159ae6_1644763676651.webp',
          },
          title: 'Full Stack Developer',
          overview:
            'We are looking for Full Stack Developer with Excellent understanding of object-oriented JavaScript, TypeScript',
          description:
            '<p><strong>About Agoda</strong>&nbsp;</p><p><br></p><p>Agoda is an online travel booking platform for accommodation, flights, and more. We build and deploy cutting edge technology that connects travelers with more than 2.5 million accommodations globally. Based in Asia and part of Booking Holdings, our 4,000+ talents coming from 90+ different nationalities foster a work environment rich in diversity, creativity, and collaboration. We innovate through a culture of experimentation and ownership, enabling our customers to experience the world.&nbsp;</p><p><br></p><p><strong>Get to Know our Team:&nbsp;</strong></p><p><br></p><p>The Full Stack Engineering Department builds the Agoda web and app products. We have several teams in front-end focusing on different aspects of our products including accommodations, flights, payments, marketing, post-booking services, and more. Agoda’s marketplace is the world. We build localized and optimized user experiences at scale on every major internet platform. These include our mobile websites, native apps, and desktop sites. We hire people from around the world who have a passion for using technology to create and implement the best user experiences. Our teams work on the full stack and build end-to-end systems including user interfaces, APIs, backend systems, and database systems. Our products are always evolving and under experimentation. We accomplish this by having an amazing degree of automation, CI/CD systems, and use a modularized approach. As we are data driven and measure our results, we continually innovate and improve our work. We are looking for the next great talent who strives to learn and grow and has a standard of excellence, strong sense of ownership, and great technical skills.</p><p><br></p><p><strong>The Opportunity:</strong></p><p><br></p><p>We are looking for key contributors to our industry leading front-end websites.&nbsp;You’ll be working on products which have evolved tremendously over the past several years to become the global market leader.&nbsp;&nbsp;</p><p><br></p><p>You’ll be using the most current technologies and best practices to accomplish our goals. Our typical day involves the creation of new end to end systems, building advanced architectures, creation of new features on our high uptime / frequently published websites and apps, development of fast and reliable automated testing systems and working in a culture that is always looking to improve our quality, tools, and efficiency.&nbsp;</p><p><br></p><p><strong>In this Role, you’ll get to:</strong>&nbsp;</p><p><br></p><p>Lead development of features, experiments, technical projects and complex systems&nbsp;</p><p>Be a technical architect, mentor, and driver towards the right technology&nbsp;</p><p>Build high volume websites with current technologies including TS, React, and GraphQL</p><p>Continue to evolve our architecture and build better software</p><p>Be a major contributor to our agile and scrum practices&nbsp;</p><p>Get involved with full stack engineering and collaborate with server, other client, and infrastructure technical team members to build the best solution</p><p>What you’ll Need to Succeed:</p><p><br></p><p>At least 3 years of experience developing web applications in client-side frameworks such as React, Angular, VueJS, etc. 5+ years preferred</p><p>B.S. in Computer Science or quantitative field; M.S. preferred&nbsp;</p><p>Working experience with agile, analytics, A/B testing, GIT Flow</p><p>Excellent HTML/CSS skills – you understand not only how to build the data, but how to make it look great too</p><p>3-5+ years’ experience developing performance-critical applications that run in a production environment using one of the backend languages/frameworks such as .NET, .NET Core, Java, Scala, NodeJS, Go or Python.</p><p>Excellent understanding of object-oriented JavaScript, TypeScript</p><p>You love new technologies and approaches and want to use the best tools available. We want people who can help us continually evolve our stack.</p><p>Great communication and coordination skills</p><p>Excellent analytical thinking and problem-solving skills</p><p>You have a good command of the English language.</p><p><br></p><p><strong>It’s Great if you have:</strong></p><p><br></p><p>Knowledge in physical architecture at scale, building resilient, no single point of failures, highly available solutions.</p><p>Knowledge in one or more of the following: NoSQL technologies (CouchBase, ElasticSearch, Redis), Queueing system experience (Kafka, RabbitMQ, ActiveMQ, MSMQ).</p><p>Knowledge and hands on experience in CI/CD solutions would be a plus</p><p>Excellent understanding of object-oriented JavaScript, TypeScript</p><p>Strong experience in all aspects of client-side performance optimization,</p><p>Extremely proficient in modern mobile and server coding and design practices. For example, Clean Code, SOLID principals, and TDD.&nbsp;</p><p>Experience in multiple front-end platforms including iOS, Android, Web, and API services</p><p>Have worked on an app or internet company that is at scale with large numbers of users and transactions per second</p><p>Have experience in a data driven company with experience analyzing and working with Big Data</p><p>Lead teams and greenfield projects solving large system problems</p><p>Worked on global projects serving world markets with distributed data centers and localization of the front end and data</p>',
          type: 'internship',
          dueDate: null,
          status: true,
          salary: true,
          createdAt: '2022-02-13T14:45:25.775Z',
          updatedAt: '2022-02-13T14:45:25.775Z',
          __v: 0,
        },
        {
          _id: '620917d3a3f9106fed159b0c',
          company: {
            _id: '62091695a3f9106fed159ad6',
            fullname: 'Slack',
            email: 'slack@gmail.com',
            phone: '0801234567',
            type: 'company',
            website: '',
            position: '',
            education: '',
            jobType: '',
            createdAt: '2022-02-13T14:32:53.648Z',
            updatedAt: '2022-02-13T14:35:56.034Z',
            __v: 0,
            profileImg:
              'https://jobjab-bucket-1.s3.ap-southeast-1.amazonaws.com/profile/62091695a3f9106fed159ad6_1644762901582.webp',
          },
          title: 'Project Manager',
          overview: 'We are looking for part-time PM.',
          description:
            '<h2><u>หน้าที่ความรับผิดชอบ</u></h2><p>- ออกแบบและพัฒนา API สำหรับ integrated ระหว่าง System</p><p>- ออกแบบและพัฒนา Mobile Application</p><p>- แก้ไข software defects และปรับปรุงพัฒนา Applications</p><p>- ออกแบบ พัฒนาระบบ และดูแลโครงการสารสนเทศที่สำคัญของบริษัท ตลอดจนการให้ข้อเสนอแนะแนวคิดใหม่ๆ เพื่อการพัฒนาปรับปรุงผลิตภัณฑ์และบริการ</p><p>- คิดค้นเทคโนโลยีและเครื่องมือใหม่ๆ เพื่อนำมาใช้ในการพัฒนาผลิตภัณฑ์ บริการ และระบบสารสนเทศของบริษัท</p><p>- ศึกษาและรวบรวมข้อมูล เพื่อใช้ออกแบบและพัฒนาระบบของฝ่ายงานต่างๆ เพื่อการดำเนินธุรกิจของบริษัท</p>',
          type: 'parttime',
          dueDate: null,
          status: true,
          salary: true,
          createdAt: '2022-02-13T14:38:11.302Z',
          updatedAt: '2022-02-13T14:38:11.302Z',
          __v: 0,
        },
      ],
    })
  ),
}))
describe('SearchPage', () => {
  let store
  let authMock
  let authMock2

  beforeEach(() => {
    // store = new Vuex.Store(cloneDeep({ state: { auth: { loggedIn: false } } }))
    // store = new Vuex.Store(cloneDeep({ state: { v: { email: 'test@test' } } }))
    authMock = {
      user: null,
      loggedIn: false,
      strategy: 'local',
    }
    authMock2 = {
      user: null,
      loggedIn: true,
      strategy: 'local',
    }
  })

  // Test Case No.1
  test('Should render Search title', () => {
    const wrapper = mount(SearchPage, {
      mocks: {
        $auth: authMock,
        $route,
        $toast,
        $router,
      },
    })
    const title = wrapper.get('[data-test="title"]').text()
    expect(title).toEqual('Search')
  })

  // Test Case No.2
  test('Should render 1 box of input', async () => {
    const wrapper = mount(SearchPage, {
      mocks: {
        $auth: authMock,
        $route,
        $toast,
        $router,
      },
    })
    const inputBox = wrapper.findAll('[data-test="search-input"]')
    expect(inputBox).toHaveLength(1)
  })

  test('should loads jobs', async () => {
    const wrapper = shallowMount(SearchPage, {
      mocks: {
        $auth: authMock,
        $route,
        $router,
        $toast,
      },
    })

    await flushPromises()

    const jobs = wrapper.findAll('[data-test="job"]')
    expect(jobs).toHaveLength(3)
  })

  // Test Case No.3
  test('Should render Search title', () => {
    const wrapper = mount(SearchPage, {
      mocks: {
        $auth: authMock2,
        $route,
        $toast,
        $router,
      },
    })
    const title = wrapper.get('[data-test="title"]').text()
    expect(title).toEqual('Search')
  })

  // Test Case No.4
  test('Should render 1 box of input', async () => {
    const wrapper = mount(SearchPage, {
      mocks: {
        $auth: authMock2,
        $route,
        $toast,
        $router,
      },
    })
    const inputBox = wrapper.findAll('[data-test="search-input"]')
    expect(inputBox).toHaveLength(1)
  })
  // Test Case No.5
  test('should loads jobs', async () => {
    const wrapper = shallowMount(SearchPage, {
      mocks: {
        $auth: authMock2,
        $route,
        $router,
        $toast,
      },
    })

    await flushPromises()

    const jobs = wrapper.findAll('[data-test="job"]')
    expect(jobs).toHaveLength(3)
  })
})
