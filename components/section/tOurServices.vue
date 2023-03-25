<template>
  <v-row justify="center" class="ma-0 white py-16">

    <VCol cols="12" class="my-7">
      <VDivider inset class="gray" light/>
    </VCol>


    <VCol cols="12"
     md="6"
      align-self="center"
       class="" :class="$vuetify.breakpoint.mdAndUp ? 'mr-n16' :'mr-n0'" style="z-index: 4;"
       data-aos="fade-left"
       data-aos-delay="400"
       data-aos-once="true"
       data-aos-easing="ease-in-out"
       >
      <VCard class="px-md-12 pa-7" flat>
        <div class="my-4 text-md-h4 text-h5 font-weight-bold">
          Let’s fight ‘safe account’ scams​
        </div>
        <p class="text-subtitle-2 text-md-subtitle-1">
          Beacon Stack Team or the Police will never tell you that your money is at risk and you need to move it to a safe account.
        </p>
        <VBtn depressed color="accent" to="/faqs" >
          Learn how to stay safe
        </VBtn>

      </VCard>
    </VCol>

    <VCol cols="10" md="6"
    data-aos="fade-right"
    data-aos-delay="400"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    >
      <VCard flat>
        <!--todo  illustration picture to be here -->
        <v-img width="1000" src="https://e0.pxfuel.com/wallpapers/110/42/desktop-wallpaper-home-security-system-without-monitoring-3-things-to-know-alarm-system.jpg" cover/>
      </VCard>
    </VCol>


    <VCol cols="10" class="my-10">
      <VDivider inset class="gray" light/>
    </VCol>

<!-- 
    <VCol cols="12">
      <VCard class="pa-7">
        <VRow justify="center">
          <VCol cols="12" md="8">
            <VCard flat>
              <div class="text-md-h4 text-h6 font-weight-bold my-3">
                Find your nearest branch
              </div>
              <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium mb-2">
                Search for your nearest branch with our Branch Finder. You can check opening times, branch contact info and available services.
              </p>
              <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium mb-2">
                We believe in the importance of community and the high street. That's why we're not just committed to keeping our branches open, we're investing in making them even better.
              </p>
              <VCardActions class="ma-0 pa-0">
                <VRow justify="start">
                  <VCol cols="12" md="5">
                    <VBtn color="secondary">
                      Use our branch finder
                    </VBtn>
                  </VCol>
                </VRow>
              </VCardActions>
            </VCard>
          </VCol>
  
          <VCol cols="12" md="4">
                todo  illustration picture to be here
        <v-img width="700" height="300" src="/logo/carmansion.jpg" cover/>
          </VCol>

        </VRow>
      </VCard>
    </VCol>
 -->


<VCol cols="12">

  <VRow justify="center">
    <VCol cols="12" md="6"
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    >
      <VCard class="px-3 py-5">
        <div class="text-md-h4 text-h6 font-weight-bold  my-3">
          What makes Beacon Stack different?
        </div>
        <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2">
          We're not just a online bank. We’re a building society, or mutual, owned by our members. That’s anyone who banks, saves or has a mortgage with us.
        </p>
        <ul class="my-4">
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">Our members benefit from a range of products we keep just for them.</li>
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">They can have a say in how we're run.</li>
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">They can help shape our products and services.</li>
        </ul>

        <!-- todo to discover stuff -->
        <!-- <VCardActions>
          <VBtn color="accent" small shaped>
            Discover what membership means
          </VBtn>
        </VCardActions> -->

      <!--todo  illustration picture to be here -->
      <v-img class="my-5 rounded-xl" width="700" height="400" src="https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/image-friends-members-2022-gdpr3809-gdpr9801-al1i5740-nw-large.jpg?h=856&iar=0&w=1520&rev=b316fb9d679e49188d50ae86eea272cc&hash=1D9CB761CFB2C81C4003ED8A13709E0A" cover/>

      <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2">
        In this image: This is Joy and Cheryl. They’ve been members since 2007 and 2003. We like to use real members in our photos. Who better to represent us?
      </p>

      </VCard>
    </VCol>
    <VCol cols="12" md="6"
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    >
      <VCard class="px-3 py-5" color="#e5f0f8">
        <div class="text-md-h4 text-h6 font-weight-bold  my-3">
          How we're building a better society
        </div>
        <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2">
         We’re guided by a social purpose and aim to make our communities better places to live.
        </p>

        <div  class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2"><VIcon color="green">mdi-check-circle</VIcon>We give 1% of our profits before tax to charities tackling the housing crisis.</div>
        <div class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2"><VIcon color="green">mdi-check-circle</VIcon>Our 20-year partnership with Shelter has already helped more than 100,000 people in housing need.</div>
        <div class="text-md-subtitle-1 text-subtitle-2 font-weight-medium my-2"><VIcon color="green">mdi-check-circle</VIcon>Since April 2020, our operations have been carbon neutral.</div>
        <!-- <ul class="my-4">
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">Our members benefit from a range of products we keep just for them.</li>
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">They can have a say in how we're run.</li>
          <li class="text-md-subtitle-1 text-subtitle-2 font-weight-medium">They can help shape our products and services.</li>
        </ul> -->

        <!-- todo to discover stuff2 -->
        <!-- <VCardActions>
          <VBtn color="accent" small shaped>
            Discover what membership means
          </VBtn>
        </VCardActions> -->

      <!--todo  illustration picture to be here -->
      <v-img class="my-5 rounded-xl" width="700" height="400" src="https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/nationwide-village-icon-sunflower-large.jpg?h=856&iar=0&w=1520&rev=99d848136117466aa51e9100d9be8660&hash=C0AE5C1BBFEF3F8BBFC4EC3F9E893BCE" cover/>

 

      </VCard>
    </VCol>
  </VRow>
</VCol>


<VCol cols="10" class="my-7">
  <VDivider inset class="gray" light/>
</VCol>

<VCol cols="11"
data-aos="fade-left"
data-aos-delay="400"
data-aos-once="true"
data-aos-easing="ease-in-out">
  <VRow justify="start">
    <VCol cols="12" md="8" class="text-left" >
      <div class="text-md-h4 text-h6 font-weight-bold my-4">
        Service quality indicators
      </div>
      <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium mb-3">
        As part of a regulatory requirement, an independent survey was conducted to ask customers of the 16 largest personal current account providers for Great Britain and 11 largest personal current account providers for Northern Ireland if they would recommend their provider to friends and family.
      </p>
      <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium mb-3">
        We have published this information at the request of the Competition and Markets Authority so you can compare the overall quality of service from personal current account providers.
      </p>
      <p class="text-md-subtitle-1 text-subtitle-2 font-weight-medium mb-3">
        We asked customers how likely they would be to recommend their personal current account provider to friends and family.
      </p>
    </VCol>
    </VRow>

</VCol>
  <VRow justify="center">
<VCol cols="11"
data-aos="fade-down"
data-aos-delay="400"
data-aos-once="true"
data-aos-easing="ease-in-out">
  <VRow justify="center">
    <VCol cols="10" md="5">
      <div class="text-md-h5 font-weight-bold text-h6">
        Overall service quality – Great Britain
      </div>
      <VCard flat tile>
        <v-img class="my-5" width="400" src="/logo/lastbeacon.png" cover/>
      </VCard>
    </VCol>
    <VCol cols="10" md="5"
    data-aos="fade-down"
    data-aos-delay="500"
    data-aos-once="true"
    data-aos-easing="ease-in-out">
      <div class="text-md-h5 font-weight-bold text-h6">
        Overall service quality – Northern Ireland
      </div>
      <VCard flat tile>
        <v-img class="my-5" width="400" src="/logo/thirdbeacon.png" cover/>
      </VCard>
    </VCol>
  </VRow>

</VCol>
</VRow>
   
    <!-- <v-col cols="12" md="8" class="text-center">
      <div
        class="
          text-h5 text-capitalize
          dark--text
          font-weight-bold
          text-sm-h3
          mb-2
        "
      >
        Take <span class="accent--text mx-1"> A look at</span> Our Service
      </div>
      <v-divider
        style="width: 100px; padding: 1px"
        class="accent mb-6 my-4 ma-auto"
      ></v-divider>
      <p
        class="
          text-subtitle-2
          dark--text
          text-sm-subtitle-1
          font-weight-light
          mb-2
        "
      >
        To start trading and making profit in our platform requires no
        <br class="d-none d-sm-block" />
        professional skills. In just three easy steps you are a millionaire.
      </p>
    </v-col> -->


    <!-- <v-col cols="12" md="10" class="pa-0">
      <v-row justify="center" class="ma-0">
        <v-col
          v-for="(item, i) in howItWorks"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          data-aos="fade-up"
          :data-aos-delay="item.delay"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <v-card flat class="py-4">
            <v-card-text class="d-flex align-start">
              <v-btn fab depressed large color="secondary">
                <v-icon large> {{ item.icon }} </v-icon>
              </v-btn>

              <div class="dark--text ml-2 ml-sm-4">
                <span class="text-capitalize text-subtitle-1 text-sm-h6">{{
                  item.title
                }}</span>
                <p
                  style="line-height: 1.5"
                  class="text-subtitle-2 font-weight-light"
                >
                  {{ item.description }}
                </p>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col> -->
  </v-row>
</template>

<script>
import HomeCard from "~/components/section/homeCard.vue";

export default {
  components: { HomeCard },

  data: () => ({
    howItWorks: [
      {
        delay: 500,
        icon: "mdi-hand-coin",

        title: "Personal Loan",
        description:
          "Beacon Stack online bank makes installment loans at all of our full-service bank locations, with friendly, helpful loan officers.",
      },
      {
        delay: 600,

        icon: "mdi-cash-fast",

        title: "Easy and fast answer",
        description: "Frequently Asked Questions - FAQs",
      },
      {
        delay: 700,
        icon: "mdi-account-network-off",
        title: "No additional papers",
        description:
          "Membership Home; Become a Member; Open a Savings, Checking, Residence and Non-Residence Account, (Sign up Required) Get Involved.",
      },
      {
        delay: 800,
        icon: "mdi-shield-lock",
        title: "Secure financial services",
        description:
          "Whether you're facing retirement or looking to better understand certain investment ideas, we can help you address your most pressing money questions.",
      },
      {
        delay: 900,
        icon: "mdi-poll",
        title: "Good investments",
        description:
          "If you're not sure the best place to park your money for the long-term, we have 7 investment options that will put your money to work.",
      },
      {
        delay: 1000,
        icon: "mdi-arrange-send-to-back",
        title: "Accumulation goals",
        description:
          "Generally, the goal is to keep funds invested, reinvest income and capital gains, and have these compound for as long as possible.",
      },
    ],
  }),
};
</script>

<style>
</style>