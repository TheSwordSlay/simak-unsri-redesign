'use client'
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";
export default function Chart({ipk, ips}){
  const option = {
    chart: {
      id: 'data-ipk-ips',
    },
    xaxis: {
        categories: [
            "Sem-1",
            "Sem-2",
            "Sem-3",
            "Sem-4",
            "Sem-5",
            "Sem-6",
            "Sem-7",
        ]
    },
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          borderRadius: 6,
        }
      },

      dataLabels: {
        enabled: false
      },
      colors: ['#095F59', '#FCB92B'],
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      fill: {
        opacity: 1,
        colors: ['#095F59', '#FCB92B']
      },
  }

const series = [
    {
      name: "IPK",
      data: ipk
    },
    {
      name: "IPS",
      data: ips
    },
  ]
  return <ApexChart type="bar" options={option} series={series} height={"75%"} width={"98%"} />
}