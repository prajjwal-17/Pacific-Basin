import React from 'react';
import '../styles/OurHistory.css';
import img2 from "../Images/MainSectionimgs/img2.jpg"; // Updated image for history section

function OurHistory() {
  const timelineData = [
    {
      side: 'left',
      title: 'The first decade',
      yearDetails: [
        { year: '1987', text: ['Pacific Basin founded in Hong Kong as a specialist Handysize bulk carrier owner/operator'] },
        { year: '1994', text: ['Pacific Basin Bulk Shipping listed on NASDAQ'] },
        { year: '1996', text: ['Pacific Basin and its more than 30 ships were purchased and privatised by a third party'] }
      ]
    },
    {
      side: 'right',
      title: 'Foundations of an industrial freight business',
      yearDetails: [
        { year: '1998', text: ['Founding management team relaunched Pacific Basin Shipping Ltd'] },
        { year: '1999', text: ['Private equity investment enabled fleet growth through acquisitions and newbuildings'] },
        { year: '2000', text: ['Acquired technical management operations of Jardine Ship Management'] },
        { year: '2001', text: ['Established International Handybulk Carriers Handysize pool (later consolidated into Pacific Basin\'s owned fleet)'] }
      ]
    },
    {
      side: 'left',
      title: 'Accessing capital for growth',
      yearDetails: [
        { year: '2004', text: ['Company reorganised into today\'s corporate structure in preparation for IPO', 'Listed on Hong Kong Stock Exchange on 14 July raising US$72 million', 'Prior to IPO, Pacific Basin dry bulk fleet comprised 19 owned, 7 chartered and 16 managed ships', 'Regional offices established in London and Melbourne'] },
        { year: '2005', text: ['New regional offices in Dalian, Tokyo and Vancouver'] },
        { year: '2006', text: ['Share placement raised US$157 million', 'New regional offices in Beijing and Dubai'] }
      ]
    },
    {
      side: 'right',
      title: 'Diversification as dry bulk heats up',
      yearDetails: [
        { year: '2007', text: ['New regional offices in Auckland and Santiago', 'Pacific Basin became a constituent of MSCI World Index', 'US$390 million raised through convertible bond issue', 'Commenced diversification into cargo terminal operation and harbour towage (2007), offshore towage and Roll-on Roll-off (RoRo) ships (2008) which were later sold as part of the 2012 initiative to refocus on dry bulk activity'] },
        { year: '2008', text: ['Fleet emission reduction targets established surpassing existing regulatory requirements', 'US$275 million raised in share placement'] }
      ]
    },
    {
      side: 'left',
      title: 'Refining our operational platforms',
      yearDetails: [
        { year: '2009', text: ['Share placement raised US$98 million'] },
        { year: '2010', text: ['Acquired 10 dry bulk newbuildings, expanding our owned, operated and newbuild fleet to 180 vessels', 'Convertible bond issue raised US$230 million (stock code: 4319)'] },
        { year: '2011', text: ['New regional offices in Stamford and Durban', 'Captain Zhu Qianchun named Seafarer of the Year by Lloyd\'s List', 'Won Lloyd\'s List Environmental Award for green technologies and practices'] }
      ]
    },
    {
      side: 'right',
      title: 'Refocusing on dry bulk',
      yearDetails: [
        { year: '2012', text: ['Commenced exit from RoRo, towage and other non-core businesses', 'Convertible bond issue raised US$124 million (stock code: 4573)'] },
        { year: '2013', text: ['Secured Japanese Export Credit Financing of US$51 million'] },
        { year: '2014', text: ['Awarded BIMCO Shipping Company of the Year', 'US$350 million raised through Japan Export Credit financing for 18 bulk carriers'] },
        { year: '2015', text: ['US$125 million raised through convertible bond issue (stock code: 5525)'] }
      ]
    },
    {
      side: 'left',
      title: 'Strengthening our position',
      yearDetails: [
        { year: '2016', text: ['US$143 million raised through rights issue', 'Share issue arrangement with 10 shipowners saved US$12.6 million in charter-hire over 2 years'] },
        { year: '2017', text: ['New regional office in Rio de Janeiro, Brazil', 'Acquired five dry bulk vessels mainly via share issuance and placements', 'Awarded Lloyd\'s List Global Shipping Company of the Year'] },
        { year: '2018', text: ['Acquired 7 modern vessels (4 funded 50% by shares)', 'Closed US$365 million credit and loan facilities', 'Resumed dividend payments', 'Won Dry Bulk Operator of the Year – Lloyd’s List Global Awards'] }
      ]
    },
    {
      side: 'right',
      title: 'Navigating pandemic challenges',
      yearDetails: [
        { year: '2019', text: ['US$115m credit facility', 'Acquired 4 modern ships, 33% funded by new shares', 'US$175m convertible bond issue (code: 40097)'] },
        { year: '2020', text: ['Joined Getting to Zero Coalition', 'Supported seafarers during COVID-19 crew change crisis', 'Advocated for global seafarer solutions'] },
        { year: '2021', text: ['Signed Neptune Declaration and Call to Action for Shipping Decarbonisation', 'Opened Iloilo crewing office', 'Launched PB Carbon Neutral Voyage', 'Added 11 second-hand ships, sold 5 smaller ones'] },
        { year: '2022', text: ['Signed MoU with Nihon Shipyard & Mitsui for zero-emission vessels', 'Selected methanol as preferred fuel', 'Opened new Dubai office', 'Won major shipping awards', 'Converted ~60% of US$175m bond, reducing it to US$70.1m'] }
      ]
    },
    {
      side: 'left',
      title: 'Well positioned for the future',
      yearDetails: [
        { year: '2023', text: ['Won "Bulk Ship Operator of the Year" at International Bulk Journal Awards (consecutively)', 'Closed US$150 million Sustainability-Linked 3-year Credit Facility'] },
        { year: '2024', text: ['Concluded first ever share buyback programme', 'Contracted 4 dual-fuel Ultramax low-emission vessels', 'Won Silver in ESG leader category at ESG Shipping Awards International'] }
      ]
    }
  ];

  return (
    <div className="history-container">
      <h2 className="history-title">Our History</h2>
      <div className="timeline">
        {timelineData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.side}`}>
            <div className="timeline-image">
              <img src={img2} alt="Timeline Image" className="timeline-image" />
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              {item.yearDetails ? (
                <ul>
                  {item.yearDetails.map((entry, i) => (
                    <li key={i}>
                      <strong>{entry.year}</strong><br />
                      {entry.text.map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        ))}
        <div className="timeline-line" />
      </div>
    </div>
  );
}

export default OurHistory;
