import { Card, Title, BarChart, Subtitle,LineChart, DonutChart,Divider   } from "@tremor/react"

function ctc(){

  const Schooldata = [
    {
        Totalstudent: 132,
        "SoET": 61,
        "SoABE": 0,
        "SoAS": 8,
        "MSSSOA": 0,
        "SOVET": 6,
        "SoPLS": 7,
        "SoPAHS": 8,
        "SoM": 33,
        "SoF.Sc": 0,

         name: "BBSR",
      },
     
      {
        Totalstudent: 143,
        "SoET": 71,
        "SoABE": 15,
        "SoAS": 1,
        "MSSSOA": 29,
        "SOVET": 22,
        "SoPLS": 0,
        "SoPAHS": 0,
        "SoM": 1,
        "SoF.Sc": 4,

         name: "PKD",
      },
      {
        Totalstudent: 9,
        "SoET": 0,
        "SoABE": 0,
        "SoAS": 0,
        "MSSSOA": 0,
        "SOVET": 0,
        "SoPLS": 0,
        "SoPAHS": 0,
        "SoM": 0,
        "SoF.Sc": 0,

         name: "VZG",
      },
      {
        Totalstudent: 8,
        "SoET": 0,
        "SoABE": 0,
        "SoAS": 1,
        "MSSSOA": 0,
        "SOVET": 0,
        "SoPLS": 7,
        "SoPAHS": 0,
        "SoM": 0,
        "SoF.Sc": 0,

         name: "RGD",
      },
      {
        Totalstudent: 2,
        "SoET": 0,
        "SoABE": 0,
        "SoAS": 2,
        "MSSSOA": 0,
        "SOVET": 0,
        "SoPLS": 0,
        "SoPAHS": 0,
        "SoM": 0,
        "SoF.Sc": 0,

         name: "BLG",
      },
      {
        Totalstudent: 18,
        "SoET": 0,
        "SoABE": 0,
        "SoAS": 0,
        "MSSSOA": 0,
        "SOVET": 13,
        "SoPLS": 5,
        "SoPAHS": 0,
        "SoM": 0,
        "SoF.Sc": 0,

         name: "BLS",
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
    <LineChart
      className="mt-6"
      data={Schooldata}
      index="name"
      categories={["Totalstudent","SoET","SoPLS","SoM","SoF.Sc","SoABE","SoAS","MSSSOA","SOVET","SoPAHS"]}
      colors={["blue","red","green"]}
     
      yAxisWidth={48}
      
    />
    <Divider />

     <Title className='text-cyan-400 text-3xl font-bold'>Total student in each School Get Multiple Offer</Title>
     <BarChart
      className="mt-6"
      data={Schooldata}
      index="name"
      categories={["Totalstudent","SoET","SoABE","SoAS","MSSSOA","SOVET","SoPAHS","SoPLS","SoM","SoF.Sc"]}
      colors={["cyan","yellow","red"]}
     
      yAxisWidth={48}
      
    />
     <Divider />


  </Card>
  
  
    )

}
export default ctc