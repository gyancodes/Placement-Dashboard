import { Card, Title, BarChart, Subtitle,LineChart, DonutChart,Divider   } from "@tremor/react"

function unplaced(){
  const chartdata = [
    {
        Totalstudent: 3148,
        "Interested for job": 2469,
       
        "Number of Students UnPlaced": 1439,
         name: "Collective Represention of every campus",
      }
  ];
  const Schooldata = [
    {
        Totalstudent: 1349,
        "Interested for job": 1179,
       
        "Number of Students UnPlaced": 1006,
         name: "BBSR",
      },
     
      {
        Totalstudent: 174,
        "Interested for job": 140,
       
        "Number of Students UnPlaced": 97,
         name: "BLS",
      },
      {
        Totalstudent: 921,
        "Interested for job": 814,
       
        "Number of Students UnPlaced": 314,
         name: "PKD",
      },
      {
        Totalstudent: 177,
        "Interested for job": 108,
       
        "Number of Students UnPlaced": 99,
         name: "BLGR",
      },
      {
        Totalstudent: 166,
        "Interested for job": 103,
       
        "Number of Students UnPlaced": 65,
         name: "VIZAG",
      },
      {
        Totalstudent: 118,
        "Interested for job": 121,
       
        "Number of Students UnPlaced": 88,
         name: "RGD",
      },
  ];

  
      
    return(
      
      <Card decoration="left" decorationColor="indigo">
    <Title>Student Unplaced Data of differnt school(Year-2022)</Title>
   
    <Divider />

    
    <Divider />
    <Subtitle>
      Below is the comparison 
    </Subtitle>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Totalstudent","Number of Students UnPlaced","Interested for job"]}
      colors={["blue","red","green"]}
     
      yAxisWidth={48}
      
    />
    <Divider />

     <Title className='text-cyan-400 text-3xl font-bold'>Total student in each School Not able to get placed</Title>
     <BarChart
      className="mt-6"
      data={Schooldata}
      index="name"
      categories={["Totalstudent","Number of Students UnPlaced","Interested for job"]}
      colors={["cyan","yellow","red"]}
     
      yAxisWidth={48}
      
    />
     <Divider />


  </Card>
  
  
    )

}
export default unplaced