import React, {Component} from 'react';
import AnnouncementContent from './AnnouncementContent';
import Header from "@/shared-components/PageHeader";

class Announcement extends Component {
    render() {
        return(
            <div className="bg-white w-full flex flex-col items-center">
                <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink"/>
                <div className="font-cu-heading w-full px-4 flex justify-center">
                    <div className=""><AnnouncementContent title={this.props.title} date={this.props.date}/></div>
                </div>
            </div>
        );
    }
}

export default Announcement;