import { Card, Title, BarChart, Subtitle,LineChart, DonutChart,Divider   } from "@tremor/react"
function Dashboard(){
  const chartdata = [
    {
        Totalstudent: 582,
        "Interested for Placement": 517,
        "Number of Offers": 539,
        "Number of Students Placed": 347,
         name: "SoET",
      },
      {
        Totalstudent: 131,
        "Interested for Placement": 115,
        "Number of Offers": 43,
        "Number of Students Placed": 35,
        name:"MCA",
      },
      {
        Totalstudent: 86,
        "Interested for Placement": 79,
        "Number of Offers": 60,
        "Number of Students Placed": 45,
        name:"SoABE(AG)",
      },
      {
        Totalstudent: 459,
        "Interested for Placement": 314,
        "Number of Offers": 87,
        "Number of Students Placed": 73,
        name:"SoASc",
      },
      {
        Totalstudent: 310,
        "Interested for Placement": 301,
        "Number of Offers": 176,
        "Number of Students Placed": 133,
        name:"MSSSoA",
      },
      {
        Totalstudent: 427,
        "Interested for Placement": 332,
        "Number of Offers": 212,
        "Number of Students Placed": 163,
        name:"SoVET",
      },
      {
        Totalstudent: 387,
        "Interested for Placement": 216,
        "Number of Offers": 51,
        "Number of Students Placed": 42,
        name:"SoPAHS",
      },
      {
        Totalstudent: 400,
        "Interested for Placement": 324,
        "Number of Offers": 99,
        "Number of Students Placed": 73,
        name:"SoPLS",
      },
      {
        Totalstudent: 243,
        "Interested for Placement": 181,
        "Number of Offers": 152,
        "Number of Students Placed": 91,
        name:"SoM",
      },
      {
        Totalstudent: 36,
        "Interested for Placement": 23,
        "Number of Offers": 24,
        "Number of Students Placed": 17,
        name:"SoFisheries",
      },
      {
        Totalstudent: 54,
        "Interested for Placement": 40,
        "Number of Offers": 10,
        "Number of Students Placed": 10,
        name:"SoForensic",
      },
      {
        Totalstudent: 15,
        "Interested for Placement": 15,
        "Number of Offers": 0,
        "Number of Students Placed": 0,
        name:"SoF (Cybersecurity)",
      },
      {
        Totalstudent: 7,
        "Interested for Placement": 7,
        "Number of Offers": 0,
        "Number of Students Placed": 0,
        name:"MSc-Geo",
      },
  ];



    return(

      <Card decoration="left" decorationColor="indigo">
    <Title>Student placement dashboard of differnt school(Year-2022)</Title>
    <Subtitle>
      Below is the comparison
    </Subtitle>
    <Divider />

    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Totalstudent","Interested for Placement","Number of Offers","Number of Students Placed"]}
      colors={["blue","red","green","cyan"]}

      yAxisWidth={48}
    />
    <Divider />

     <LineChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["Totalstudent","Interested for Placement","Number of Offers","Number of Students Placed"]}
      colors={["blue","red","green","cyan"]}

      yAxisWidth={40}
    />
    <Divider />

     <Title>Total student in each School</Title>
     <Divider />

<DonutChart
      className="mt-6"
      data={chartdata}
      category="Totalstudent"
      index="name"

      colors={["violet","slate", "orange", "indigo", "rose", "cyan", "amber","fuchsia", "lime", "pink"]}
    />
    <Divider></Divider>

 </Card>



    )

}
export default Dashboard