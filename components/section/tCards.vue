<template>
  <v-row no-gutters justify="center" class="ma-0">

    <VCol cols="12" class="my-7"
    data-aos-delay="400"
    data-aos="fade-right"
    data-aos-once="true"
    data-aos-easing="ease-in-out"
    >
      <v-alert type="error" color="transparent" class="text-subtitle-2 text-md-subtitle-1 font-weight-medium ml-n2">
          <span class="font-weight-bold">Information:</span> Mortgages are secured on your home. You could lose your home if you do not keep up payments on your mortgage. Mortgages are subject to underwriting and criteria. Minimum age 18, UK residents only.
      </v-alert>
    </VCol>

    <VCol cols="12" class="my-5">
      <VDivider inset class="white" light/>
    </VCol>

    <VRow justify="center" align="center" class="my-7">
      <VCol cols="8" md="4"
      data-aos-delay="400"
      data-aos="fade-right"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      >
        <v-img width="500" height="300" src="/logo/carmansion.jpg" cover/>
      </VCol>
      <VCol cols="8" md="8"
      data-aos-delay="400"
      data-aos="fade-left"
      data-aos-once="true"
      data-aos-easing="ease-in-out">
        <div class="font-weight-medium white--text text-md-subtitle-1 text-subtitle-2">
          <span class="font-weight-bold mb-3 text-subtitle-1 text-md-h6">Base rate change from the Bank of England</span><br>
          Find out how mortgages and savings accounts are affected by the change to the base rate.
        </div>
        <VBtn depressed to="/personal-banking/mortgages" class="my-5">
          <div class="text-decoration-underline">
            Read the latest update
          </div>
        </VBtn>
      </VCol>
    </VRow>

    <VCol cols="12" class="my-5">
      <VDivider inset class="white" light/>
    </VCol>
       
    <VCol cols="12" class="my-7">
      <VRow justify="center">
        <VCol cols="12">
          <div class="text-h5 text-md-h3 font-weight-bold white--text text-center">
            What are you looking for today?
          </div>
          </VCol>
          <VCol cols="6"
          :data-aos-delay="pic.delay"
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          v-for="(pic,i) in pics"
          :key="i"
          sm="4"
          md="3"
          >
          <VCard color="transparent" flat>
            <VCardTitle>
              <div class="text-center mx-auto">
               <nuxt-link :to="pic.route"><v-img :src="pic.source" cover max-width="80"></v-img></nuxt-link>
              </div>
            </VCardTitle>
            <VCardText class="text-center">
              <VBtn depressed small :to="pic.route" class="my-1">
                <div class="text-decoration-underline">
                  {{ pic.link }}
                </div>
              </VBtn>
            </VCardText>
          </VCard>
          </VCol>
  
          <VCol cols="12" class="my-5">
            <VDivider inset class="white" light/>
          </VCol>
             
          <VCol cols="12" md="7" class="white--text text-left">
            <div class="text-left text-h6 font-weight-bold my-3">
              Help
            </div>
          <div 
          v-for="(Help, i) in Helps"
          :key="i"
          data-aos-delay="400"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          class="py-0 px-0"
          >
           <VIcon large color="white">mdi-circle-small</VIcon><nuxt-link :to="Help.route"><span class="text-md-subtitle-1 text-subtitle-2 white--text">{{ Help.text }}</span></nuxt-link>
  
          </div>
          </VCol>

          

          <VCol cols="12" md="5" align-self="center" 
          data-aos-delay="400"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          >
            <VCard>
              <v-img src="https://e0.pxfuel.com/wallpapers/490/385/desktop-wallpaper-male-employee-raising-hand-for-asking-question-at-conference-in-office-boardroom-%C2%B7-stock-business-training.jpg" width="500" cover/>
            </VCard>
          </VCol>

          
          <VCol cols="12" class="my-5">
            <VDivider inset class="white" light/>
          </VCol>


          <VCol cols="12" md="5" align-self="center"
          data-aos-delay="400"
          data-aos="fade-left"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          >
            <VCard>
              <v-img src="https://e0.pxfuel.com/wallpapers/936/584/desktop-wallpaper-thumbs-up-success-sign-business-concepts-business-baby.jpg" width="500" cover/>
            </VCard>
          </VCol>
  
       
  
          <VCol cols="12" md="7" class="white--text text-left"
          data-aos-delay="400"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
          >
            <div class="text-left text-h6 font-weight-bold my-3">
              Internet banking
            </div>
            <p class="text-subtitle-1 white--text mb-4">
              Check on your balances or manage your payments all in one place.
            </p>
            <p class="text text-subtitle-1">
              Need any help logging in or registering? <br>See our <span><VBtn to="/faqs" color="transparent" depressed class="text-decoration-underline text-subtitle-1 text-capitalize grey--text ma-0 pa-0">online banking faq page.</VBtn></span>
            </p>
            <VRow justify="center">
              <VCol cols="12">
                <VBtn block large outlined color="white" to="/login">Log into the online bank</VBtn>
              </VCol>
              <VCol cols="12">
                <VBtn block large color="white" light to="register">Register for Internet Banking</VBtn>
              </VCol>
            </VRow>
          </VCol>
  
  
  
  
      </VRow>
  
     

    </VCol>

    <!-- <v-col
      v-for="(item, i) in services"
      :key="i"
      :data-aos-delay="item.delay"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-easing="ease-in-out"
      cols="12"
      sm="6"
      md="3"
    >
      <v-card
        class="position:relative"
        min-height="270"
        style="border: 1px solid #6800ec"
        flat
        tile
      >
        <v-card-text
          class="pa-6 text-center py-10 d-flex flex-column align-center"
        >
          <v-btn x-large text fab depressed color="black lighten-4">
            <v-icon size="70" :color="item.color"> {{ item.icon }} </v-icon>
          </v-btn>
          <div class="dark--text d-flex flex-column my-4">
            <span class="text-h6 text-md-h5 my-2 font-weight-medium">
              {{ item.title }}
            </span>
            <span
              style="line-height: 1.5"
              class="dark--text font-weight-light text-sm-subtitle-2"
            >
              {{ item.description }}
            </span>
          </div>

          <div
            style="
              width: 100px;
              height: 4px;
              position: absolute;
              bottom: 0;
              margin: 0 auto;
            "
            class="accent mt-4 bg-gradient rounded-tl-lg rounded-tr-lg"
          />
        </v-card-text>
      </v-card>
    </v-col> -->
  </v-row>
</template>

<script>
export default {
  data: () => ({
    pics: [
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-current-accounts-nationwide.png?h=138&iar=0&w=139&rev=633036a0069e453fa7f265b151b55e62&hash=D8F50FFC73218C49C1F62F5279F69C5F",
        link: 'Current Account',
        route: '/personal-banking/current-account',
        delay: '400'
      },
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-mortgages-nationwide.png?h=139&iar=0&w=138&rev=81736a27454a4201b64296cb52cfc857&hash=EF4A43D054EEADAA91C7677B272C6229",
        link: 'Mortgages',
        route: '/personal-banking/mortgages',
        delay: '500'
      },
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-savings-nationwide.png?h=138&iar=0&w=139&rev=75803ac0c7e844be8c4c52703db6b8d9&hash=659C4816C23DA3FBE10460DBD330C9CC",
        link: 'Savings and ISAs',
        route: '/savings-isas/savings-account',
        delay: '600'
      },
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-investments-nationwide.png?h=139&iar=0&w=139&rev=6a83f4f8a2014c89a6413285e18bb371&hash=7B886BBF16ECE832656628648042BFE3",
        link: 'Banking Services',
        route: '/private-banking/banking-services',
        delay: '700'
      },
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-loans-nationwide.png?h=139&iar=0&w=139&rev=1f07b2e9b5ac4f29ae8f24b9d1f74a1e&hash=3C81FD5614225B6113BB9695C337167B",
        link: 'Loans',
        route: '/personal-banking/personal-loan',
        delay: '800'
      },
      {
        source: "https://www.nationwide.co.uk/-/assets/nationwidecouk/images/homepage/micro-illustrations-product-credit-cards-nationwide.png?h=139&iar=0&w=139&rev=721e9d2e45ad4262930fad232e3f9349&hash=979DEDD1BD1F6DC12CB4F34BAF385099",
        link: 'Credit Cards',
        route: '/personal-banking/credit-card',
        delay: '900'
      },
    ],
    Helps: [
      {
        text : 'What is Ecofinance online bank',
        route: '/faqs'
      },
      {
        text : 'How secure are data entered into our server?',
        route: '/faqs'
      },
      {
        text : 'How safe is Ecofinance online bank Internet Banking Services',
        route: '/faqs'
      },
      {
        text : 'Are my personal data and funds secured?',
        route: '/faqs'
      },
      {
        text : 'How do I claim and transfer funds desposited on my behalf?',
        route: '/faqs'
      },
      {
        text : 'What is the RTDD?',
        route: '/faqs'
      },
      {
        text : 'Is my account activated with the service?',
        route: '/faqs'
      },
    ],
    services: [
      {
        delay: 500,
        icon: "mdi-piggy-bank-outline",
        title: "Transparency",
        color: "accent",
        description:
          "In every business transparency is a top priority. We are just that to start with",
      },
      {
        delay: 600,
        icon: "mdi-memory",
        title: "Fully Encrypted",
        color: "primary",
        description:
          "We use modern encryption tools to protect client data end-to-end. Remin protected",
      },
      {
        delay: 700,
        icon: "mdi-wallet-outline",
        title: "Instant Withdrawals",
        color: "accent",
        description:
          "Make deposits, recieve money and instanly withdraw to your local bank account",
      },
      {
        delay: 800,
        icon: "mdi-shield-lock-outline",
        title: "Safe and Secure",
        color: "primary",
        description:
          "Stay safe and fly banking with us. We are protected from DDos and data breaches",
      },
    ],
  }),
};
</script>

<style scoped>
</style>