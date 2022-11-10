import React, { useEffect } from 'react'
import {useState} from "react"
import {Doughnut} from "react-chartjs-2"
import {Chart as CharJS } from "chart.js/auto"
import { data } from 'autoprefixer'
function DashboardPieChart(props) {

  return (
    <div className='pieChart'>
  
  <Doughnut  data={ {
                            labels:["Laptops","Jerseys","Shoes","Shirts"],
                             datasets:[{
                                label:"Sales by Category",
                                  data:[props.Laptops,props.Jerseys,props.Shoes,props.Shirts],
                                  backgroundColor: [
                                    'rgba(255, 99, 132, 1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86,1)',
                                    'rgba(75, 192, 192, 1)',
                                ]
                                      }]
                                     }} />  
    </div>
  )
}

export default DashboardPieChart