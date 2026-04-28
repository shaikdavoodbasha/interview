// import React, { useEffect, useState } from 'react'
// import Card from '../components/Card'

// const HomePage = () => {
//     const[data,setData] = useState([])
//     useEffect(()=>{
//         try {
//         fetch("https://pokeapi.co/api/v2/pokemon").then((res)=>res.json()).then((res)=>setData(res.results)).catch((err)=>console.log(err))
            
//         } catch (error) {
//             console.log(error)
            
//         }

//     },[])
// console.log(data)
//   return (
//     <div style={{paddingLeft:'120px',paddingTop:'100px',paddingTop:"50px",paddingBottom:"50px",paddingRight:'120px',display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:"#F4F3FF"}}>

//         <div style={{display:'flex',gap:'15px',alignItems:'center',flexWrap:'wrap'}}>
//             {
//                 data  ? data.map((item,index)=>{
//                     return(
//                         <Card name={item.name} />
//                     )
//                 }) :'Data not Found'
//             }

//         </div>
      
//     </div>
//   )
// }

// export default HomePage
