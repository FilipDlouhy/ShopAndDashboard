import React, { useEffect } from 'react'
import {useState} from "react"
import {Line} from "react-chartjs-2"
import {Chart as CharJS } from "chart.js/auto"
import { data } from 'autoprefixer'
function DashBoardDashboardLineChart(props) {
 return (
    <div className='lineChart'>
  
  <Line  data={ {
                            labels:props.lineChartData.map((data)=>data.date),
                             datasets:[{
                                label:"Balance of a shop by month",
                                  data:props.lineChartData.map((data)=>data.money),
                                  backgroundColor: [
                                    'rgb(0, 0, 149)',
                                 ],borderColor:'rgb(0, 0, 149)'
                                      }]
                                     }} />  
    </div>
  )
}

export default DashBoardDashboardLineChart