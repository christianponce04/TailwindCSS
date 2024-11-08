/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {

    container:{
      center:true,
    },

    colors:{
      'priColor': '#bf0000',
      'secColor': '#161c21',
      'thirdColor':'#f5f5f5',
      'black':'#000',
      'white':'#fff',
     },
    
     fontSize:{
      heading2:[ "32px",{ lineHeight:"100%", fontWeight:"700", } ], 
      'header':'20px', 'sub':'19px', 'parag':'17px',
      heroheading:['40px',{ lineHeight:'122%', fontWeight:'600', } ],
      mainHeader:['55px',{ lineHeight:"100%",fontWeight:"600",}]
    },

    backgroundImage:{
      'main':'url(../assets/main-bg.jpg)',
      'footer-bg':'url(../assets/footer-bg.jpg)',
    },

    extend: {
     fontFamily:{
        'Questrial':['Questrial', 'sans-serif'],
        'Poppins':['Poppins', 'sans-serif'],
     },

    content:{
     headerIcon1:"url(../assets/icons/header-icon1.png)",
     headerIcon2:"url(../assets/icons/header-icon2.png)",
     footerIcon1:"url(../assets/icons/footer-icon1.png);",
     footerIcon2:"url(../assets/icons/footer-icon2.png);",
     footerIcon3:"url(../assets/icons/footer-icon3.png);",
    }
     
    },
  },
  plugins: [],
}

