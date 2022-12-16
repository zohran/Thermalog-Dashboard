import {Line} from 'react-chartjs-2';
import {
  Chart as Chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from 'chart.js';
import { Gradient } from '@mui/icons-material';
import { getInitColorSchemeScript } from '@mui/system';

Chartjs.register(
  Filler,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
)
const areaChart=()=> {

  const getBGColor=()=>{
    const ctx=document.getElementById("myChart").getContext("2d");
    let gradient=ctx.createLinearGradient(0,50,0,180);
    gradient.addColorStop(0,"red");
    gradient.addColorStop(0.5,"pink");
    gradient.addColorStop(1,"white");
    
    return gradient;
  }

  const data={
    labels:["00:00", "03:00", "06:00","12:00","15:00","18:00","21:00","24:00"],
    datasets:[{
      data:[30,10,80,20,90,40,65,100],
      borderColor:"magenta",
      pointBorderColor:"transparent",
      pointFillCOlor:"transparent", 
      backgroundColor:getBGColor,
      pointBorderWidth:5,
      fill:'start',
      tension:0.5,
      
      

    }]
  }
  const options={
    responsive: true,
    plugins:{
      legend:"true",
    },
    maintainAspectRatio:false,
    scales:{
      x:{
        grid:{
          display:false,
        },
        
      },
      y:{
        grid:{
          display:false,
        },
        min:0,
        max:100,
        ticks:{
          stepSize:20,
          callback:v=> v+"C"
        }
      }
    }
  };


  return  <Line  id="myChart" data={data} options={options}/>
  
  // <div  style={{display:"flex", margin:"auto", justifyContent:"center", width:"100%", height:"100%", alignItems:"center"}}>
  //     <div style={{margin:"auto", backgroundColor:"Black"}}>
  //       <Line  id="myChart"  data={data}options={options}/>
  //     </div>
  //     </div>

    
}

export default areaChart;
