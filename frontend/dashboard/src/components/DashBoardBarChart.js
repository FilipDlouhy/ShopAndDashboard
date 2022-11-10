import React from 'react'
import {useState} from "react"
import {Bar} from "react-chartjs-2"
import {Chart as CharJS } from "chart.js/auto"
import { data } from 'autoprefixer'
function DashBoardBarChart(props) {
      


  return (
    <div className='barChart'>
  
  <Bar data={ {  labels:props.barChartData.map((data)=>data.date),
                             datasets:[{
                                label:"Sales by Date",
                                  data:props.barChartData.map((data)=>data.money),
                                  backgroundColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86,1)',
                                    'rgba(75, 192, 192, 1)',
                                ]
                                      }]
                                     }}/>  
    </div>
  )
}

export default DashBoardBarChart