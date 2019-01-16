import React, { Component } from "react";

class UrgentAnnouncement extends Component {
  render() {
    return (
      <div className="w-full flex justify-center bg-white">
        <div className="border-black border-b flex w-3/5 pb-8 mt-10 font-cu-heading">
          <div className="border-black border-r w-1/2 pr-8 flex justify-end items-end">
            {this.contentDate(`18-21`, `มกราคม`)}
            {this.contentDesc(`วันบริจาคเลือด`, `อีก 3 วัน`)}
          </div>
          <div className="w-1/2 pl-8 flex items-end">
            {this.contentDate(17, `มกราคม`)}
            {this.contentDesc(`ปิดการลงทะเบียน`, `อีก 2 วัน`)}
          </div>
        </div>        
      </div>

    );
  }

  contentDate = (date, month) => {
    return (
        <div className="mr-10 text-right text-cb-red">
            <p className="text-4xl mb-3 font-black">{date}</p>
            <p className="text-xl font-semibold" style={{color: "#cf2333"}}>{month}</p>
        </div>
    );
  }

  contentDesc = (title, time) => {
      return (
      <div>
        <div className="text-3xl mb-3 font-black">{title}</div>
        <p className="text-xl font-semibold" style={{color: "#4c4c4c"}}>{time}</p>
      </div>
      )
  }
}

export default UrgentAnnouncement;