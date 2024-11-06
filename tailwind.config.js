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
      'black':'#000',
      'white':'#fff',
     },
    
     fontSize:{
      heading2:[ "32px",{ lineHeight:"100%", fontWeight:"700", } ],
      'header':'20px',
      'sub':'19px',
      'parag':'17px',
      
      heroheading:['40px',{
        lineHeight:'122%',
        fontWeight:'600',
      }
    ],
    },

    extend: {
     fontFamily:{
        'Questrial':['Questrial', 'sans-serif'],
        'Poppins':['Poppins', 'sans-serif'],
     },

    content:{
     headerIcon1:"url(../assets/icons/header-icon1.png)",
     headerIcon2:"url(../assets/icons/header-icon2.png)",
    }
     
    },
  },
  plugins: [],
}

