import React, {Component} from 'react';
import {map} from 'lodash'

class AnnouncementContent extends Component {
    render() {
        const {data} = this.props;
        const title = map(data, 'title');
        const date = map(data, 'id');
        
        return(
            <div>
                {this.content(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`, `pb-6`)}
                {this.content(title[1], date[1], `py-6`)}
                {this.content(title[2], date[2], `py-6`)}
                {this.content(title[3], date[3], `py-6`)}
                {this.content(title[4], date[4], `py-6`)}
                <div className="flex w-full items-center justify-end mt-6">
                    <div className="font-medium mr-2" style={{colo: "#333333"}}>ดูข่าวประกาศทั้งหมด</div>
                    <img src='/static/home/forward-arrow2.svg' alt="arrow" className="w-6 pb-2" />
                </div>
            </div>
        );
    }
    
    content = (title, date, padding) => {
        return (
            <div className={`border-cb-grey border-b flex items-center ${padding}`}>
                <img src='/static/home/megaphone.svg' alt="Megaphone" className="w-8 mr-6"/>
                <div>
                    <div className="text-xl font-medium mb-1" style={{color: "#333333"}}>{title}</div>
                    <div className="text-cb-pink font-normal font-cu-body italic">{date}</div>
                </div> 
            </div>
        );
    }
}

export default AnnouncementContent;