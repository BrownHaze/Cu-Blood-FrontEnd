import React from 'react';
import TopicCenter from '@/shared-components/TopicCenter';
import I18 from '@/core/i18n';

class NoticeContent extends React.Component {
    render() {
        const { t } = this.props;
        const context11 = t('context11t');
        const context12 = t('context12t');
        const context13 = t('context13t');
        //Section2: Donation Procedures
        const context21 = t('context21t');
        const context22 = t('context22t');
        const context23 = t('context23t');
        const context24 = t('context24t');
        const context25 = t('context25t');
        const context26 = t('context26t');
        const context27 = t('context27t');
        const context28 = t('context28t');
        const context29 = t('context29t');
        const context210 = t('context210t');
        const context211 = t('context211t');
        const context212 = t('context212t');
        const context213 = t('context213t');
        const preHeader = t('preHeadert');
        const context31 = t('context31t');
        const context32 = t('context32t');
        const context33 = t('context33t');
        const context34 = t('context34t');
        const context35 = t('context35t');
        const context36 = t('context36t');

        const durHeader = t('durHeadert');
        const contextDur1 = t('contextdur1t');
        const contextDur2 = t('contextdur2t');
        const contextDur3 = t('contextdur3t');
        const contextDur4 = t('contextdur4t');
        const contextDur5 = t('contextdur5t');

        const postHeader = t('postHeadert');
        const contextPost1 = t('contextPost1t');
        const contextPost2 = t('contextPost2t');
        const contextPost3 = t('contextPost3t');
        const contextPost4 = t('contextPost4t');
        const contextPost5 = t('contextPost5t');
        const contextPost6 = t('contextPost6t');
        const contextPost7 = t('contextPost7t');
        const contextPost8 = t('contextPost8t');
        const contextPost9 = t('contextPost9t');
        const contextPost10 = t('contextPost10t');





        return (
            <div className="layout-wide">
                <TopicCenter english={t('topic1Small')} englishColor="text-pink" thai={t('topic1Big')} borderColor="border-red" />
                <BulletPoint bullet={1} context={context11} />
                <BulletPoint bullet={2} context={context12} />
                <Context13 bullet={3} context={context13} t={t}/>
                <TopicCenter english={t('topic2Small')} englishColor="text-pink" thai={t('topic2Big')} borderColor="border-red" />
                <BulletPoint bullet={1} context={context21} />
                <BulletPoint bullet={2} context={context22} />
                <BulletPoint bullet={3} context={context23} />
                <BulletPoint bullet={4} context={context24} />
                <BulletPoint bullet={5} context={context25} />
                <BulletPoint bullet={6} context={context26} />
                <BulletPoint bullet={7} context={context27} />
                <BulletPoint bullet={8} context={context28} />
                <BulletPoint bullet={9} context={context29} />
                <BulletPoint bullet={10} context={context210} />
                <BulletPoint bullet={11} context={context211} />
                <BulletPoint bullet={12} context={context212} />
                <BulletPoint bullet={13} context={context213} />
                <TopicCenter english={t('topic3Small')} englishColor="text-pink" thai={t('topic3Big')} borderColor="border-red" />
                <BulletHeader header={preHeader} />
                <BulletPoint bullet={1} context={context31} />
                <BulletPoint bullet={2} context={context32} />
                <BulletPoint bullet={3} context={context33} />
                <BulletPoint bullet={4} context={context34} />
                <BulletPoint bullet={5} context={context35} />
                <BulletPoint bullet={6} context={context36} />
                <BulletHeader header={durHeader} />
                <BulletPoint bullet={1} context={contextDur1} />
                <BulletPoint bullet={2} context={contextDur2} />
                <BulletPoint bullet={3} context={contextDur3} />
                <BulletPoint bullet={4} context={contextDur4} />
                <BulletPoint bullet={5} context={contextDur5} />
                <BulletHeader header={postHeader} />
                <BulletPoint bullet={1} context={contextPost1} />
                <BulletPoint bullet={2} context={contextPost2} />
                <BulletPoint bullet={3} context={contextPost3} />
                <BulletPoint bullet={4} context={contextPost4} />
                <BulletPoint bullet={5} context={contextPost5} />
                <BulletPoint bullet={6} context={contextPost6} />
                <BulletPoint bullet={7} context={contextPost7} />
                <BulletPoint bullet={8} context={contextPost8} />
                <BulletPoint bullet={9} context={contextPost9} />
                <BulletPoint bullet={10} context={contextPost10} />
                <NoticeContact />
            </div>
        );
    }
}


const BulletPoint = (props) => {

    const { bullet, context } = props
    return (
        <div className="bg-white font-cu-heading text-xl py-4 layout-narrow flex flex-col md:flex-row items-start justify-start">
            <div className="bg-pink-lightest w-16 h-16 text-pink-dark text-2xl p-4 rounded-full flex flex-col items-center justify-center mr-6 mb-4 md:mb-0" style={{minWidth: '64px'}}>
                {bullet}
            </div>
            <div className="flex flex-col">
                {context}
            </div>
        </div>
    )
}

const BulletHeader = (props) => {
    const { header } = props

    return (
        <div className="font-bold layout-narrow font-cu-heading text-2xl p-4">
            {header}
        </div>
    )
}

const NoticeContact = () => {
    return (
        <div className="flex justify-center text-center font-cu-heading font-medium text-2xl p-8">
            สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่ <br />
            โทร.0 2256 4300 , 0 2263 9600-99 ต่อ 1101,1760,1761
        </div>
    )
}

// Context## first # is sections; Second # is list number. For example, context11 is list 1 in section 1


const Context13 = (props) => {
    const { bullet, context } = props
    return (
        <div className="bg-white font-cu-heading text-xl py-4 layout-narrow flex flex-col md:flex-row items-start justify-start">
            <div className="bg-pink-lightest w-16 h-16 text-pink-dark text-2xl p-4 rounded-full flex flex-col items-center justify-center mr-6 mb-4 md:mb-0" style={{minWidth: '64px'}}>
                {bullet}
            </div>
            <div className="flex flex-col">
                {context}
                <div>
                    <div className='py-4'>
                        <span className='text-pink font-bold'>3.1</span> การคัดเลือกผู้บริจาคโลหิตอายุมากกว่า 60 จนถึง 65 ปี (ไม่รับบริจาคในหน่วยรับบริจาคโลหิตเคลื่อนที่)
                     </div>
                    <span className=' font-semibold'>1.1 :</span> เป็นผู้บริจาคโลหิตประจํามาโดยตลอดจนกระทั่งอายุ 60 ปี <br />
                    <span className=' font-semibold'>1.2 :</span> บริจาคโลหิตได้ไม่เกินปีละ 3 ครั้ง คือทุก 4 เดือน <br />
                    <span className=' font-semibold'>1.3 :</span> ตรวจ Complete Blood Count (CBC),Serum Ferritin (SF) ปีละ 1 ครั้ง เพื่อประกอบการให้คําปรึกษาด้านสุขภาพทั่วไป และสําหรับแพทย์ใช้ผลการตรวจ SF ในการติดตามและปรับการให้ธาตุเหล็กทด<br />
                    <div className='pt-4'>
                        <span className='text-pink font-bold'>3.2</span> ผู้บริจาคโลหิตอายุมากกว่า 65 ปีจนถึง 70 ปี (ไม่รับบริจาคในหน่วยรับบริจาคโลหิตเคลื่อนที่)
                    </div>
                </div>
            </div>
        </div>
    )
}






export default I18.withNamespaces('notice')(NoticeContent);