<template>
    <v-container fluid class="pa-0 pb-16 mb-16">
      <v-row
        style="height: 30vh"
        justify="center"
        align="center"
        class="bg-personal-banking py-16 white--text"
      >
        <v-col cols="12" md="9" class="text-center white--text mt-10">
          <h4 class="text-h4 text-md-h2 font-weight-bold mb-4">
            SAVINGS & ISAs
          </h4>
        </v-col>
      </v-row>
      <v-row no-gutters class="ma-0">
        <v-col cols="12" class="pa-2 primary trabsparent" />
      </v-row>
  
      <v-row class="ma-0" justify="center">
        <v-col cols="12" md="8">
          <v-row justify="center" class="ma-0">
            <v-col cols="12" class="py-6">
              <v-card flat rounded="lg" height="450" width="100%">
                <v-img
                  src="https://e0.pxfuel.com/wallpapers/707/96/desktop-wallpaper-future-land-money-plant-savings.jpg"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.7)"
                  height="100%"
                  cover
                >
                  <v-card-text class="pa-4 pa-md-8">
                    <div class="text-h5 text-md-h4 font-weight-bold">
                        Ways to help you save
                    </div>
                    <p
                      class="text-subtitle-2 text-md-subtitle-1 font-weight-light"
                    >
                    If you’re looking for an easy way to save, whether that's whenever you can or regularly, we're here to help. We’ve got a range of tools, accounts and guidance to help make savings hassle-free.
                     
                    </p>
                    <!-- <v-btn
                  tile
                  to="/register"
                  large
                  depressed
                  color="white dark--text"
                  class="font-weight-light text-subtitle-2 px-8"
                >
                  Join Us Now
                </v-btn> -->
                  </v-card-text>
                </v-img>
              </v-card>
            </v-col>
            <v-col cols="12">
              <div
                class="primary--text text-h4 text-sm-h3 mb-2 font-weight-light"
              >
              Motivate yourself with savings goals
              </div>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                A helping hand to save for the things you want.
              </p>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                Set how much you want to save in your savings account and by when. The Banking app will calculate how much you need to save on a daily, weekly or monthly basis. And it’ll help you track your progress.
              </p>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                You can also rename savings accounts to make them personal to you and your goals.
              </p>
  
            </v-col>

            <VCol cols="10" class="my-7">
                <VDivider inset class="gray" light/>
              </VCol>


        

            <v-col cols="12">
              <div
                class="primary--text text-h4 text-sm-h3 mb-2 font-weight-light"
              >
              Find the savings account that’s right for you
              </div>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                Whether you want to save little and often, or lock away a lump sum, with a few quick questions we can help you find the savings account that’s right for you.
              </p>
            </v-col>


            <VCol cols="10" class="my-7">
                <VDivider inset class="gray" light/>
              </VCol>


        

            <v-col cols="12">
              <div
                class="primary--text text-h4 text-sm-h3 mb-2 font-weight-light"
              >
             Make your Payday your SaveDay
              </div>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                If you’re not in the habit, it can be hard to know where to start with saving.
              </p>
              <p class="text-subtitle-2 text-sm-subtitle-1 font-weight-light">
                But research has shown that people who save the day they’re paid often have more success than those who save what’s left at the end of the month.
              </p>
            </v-col>

            
            
           

          </v-row>
        </v-col>
        <v-col cols="12" md="3" class="py-10">
          <TQuickLinks page="savings" />
        </v-col>
      </v-row>
    </v-container>
  </template>
        
        <script>
  import TQuickLinks from "~/components/section/tQuickLinks.vue";
  export default {
    name: "Helping-you-save",
    data: () => ({}),
    methods: {},
    created() {
      window.scrollTo(0, 0);
    },
    head() {
      return {
        title: "Helping-you save",
        meta: [
          // hid is used as unique identifier. Do not use `vmid` for it as it will not work
          {
            hid: "description",
            name: "description",
            content: `  Savings accounts provide a place for you to put your money aside. You’d use these accounts to help you save up for when you need it. They aren't meant to be used for day-to-day spending.`,
          },
        ],
        script: [
          // {
          //   src: "https://apps.elfsight.com/p/platform.js",
          // },
        ],
      };
    },
    components: { TQuickLinks },
  };
  </script>
        
        <style>
  .bg-personal-banking {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(https://e0.pxfuel.com/wallpapers/672/820/desktop-wallpaper-bank-banking-business-cash-coin-currency-earnings-economy-finance-financial-growth-income-investment-money-profit-savings-success-treasure.jpg);
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
  }
  </style>
        