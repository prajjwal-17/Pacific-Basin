import React, { useEffect, useRef, useState } from 'react';
import '../styles/OurHistory.css';
import img2 from "../Images/MainSectionimgs/img2.jpg"; // Updated image for history section
import SidebarGlance from '../components/SidebarGlance'; // Import the sidebar component

function OurHistory() {
  const timelineRef = useRef(null);
  const [currentSection, setCurrentSection] = useState(0);
  
  const timelineData = [
    {
      side: 'left',
      title: 'The first decade',
      yearDetails: [
        {
          year: '1987',
          text: [
            'Pacific Basin founded in Hong Kong as a specialist Handysize bulk carrier owner/operator'
          ]
        },
        {
          year: '1994',
          text: ['Pacific Basin Bulk Shipping listed on NASDAQ']
        },
        {
          year: '1996',
          text: ['Pacific Basin and its more than 30 ships were purchased and privatised by a third party']
        }
      ]
    },
    {
      side: 'right',
      title: 'Foundations of an industrial freight business',
      yearDetails: [
        {
          year: '1998',
          text: ['Founding management team relaunched Pacific Basin Shipping Ltd']
        },
        {
          year: '1999',
          text: ['Private equity investment enabled fleet growth through acquisitions and newbuildings']
        },
        {
          year: '2000',
          text: ['Acquired technical management operations of Jardine Ship Management']
        },
        {
          year: '2001',
          text: ['Established International Handybulk Carriers Handysize pool (later consolidated into Pacific Basin\'s owned fleet)']
        }
      ]
    },
    {
      side: 'left',
      title: 'Accessing capital for growth',
      yearDetails: [
        {
          year: '2004',
          text: [
            'Company reorganised into today\'s corporate structure in preparation for IPO',
            'Listed on Hong Kong Stock Exchange on 14 July raising US$72 million',
            'Prior to IPO, Pacific Basin dry bulk fleet comprised 19 owned, 7 chartered and 16 managed ships',
            'Regional offices established in London and Melbourne'
          ]
        },
        {
          year: '2005',
          text: ['New regional offices in Dalian, Tokyo and Vancouver']
        },
        {
          year: '2006',
          text: [
            'Share placement raised US$157 million',
            'New regional offices in Beijing and Dubai'
          ]
        }
      ]
    },
    {
      side: 'right',
      title: 'Diversification as dry bulk heats up',
      yearDetails: [
        {
          year: '2007',
          text: [
            'New regional offices in Auckland and Santiago',
            'Pacific Basin became a constituent of MSCI World Index',
            'US$390 million raised through convertible bond issue',
            'Commenced diversification into cargo terminal operation and harbour towage (2007), offshore towage and Roll-on Roll-off (RoRo) ships (2008) which were later sold as part of the 2012 initiative to refocus on dry bulk activity'
          ]
        },
        {
          year: '2008',
          text: [
            'Fleet emission reduction targets established surpassing existing regulatory requirements',
            'US$275 million raised in share placement'
          ]
        }
      ]
    },
    {
      side: 'left',
      title: 'Refining our operational platforms',
      yearDetails: [
        {
          year: '2009',
          text: ['Share placement raised US$98 million']
        },
        {
          year: '2010',
          text: [
            'Acquired 10 dry bulk newbuildings, expanding our owned, operated and newbuild fleet to 180 vessels',
            'Convertible bond issue raised US$230 million (stock code: 4319)'
          ]
        },
        {
          year: '2011',
          text: [
            'New regional offices in Stamford and Durban',
            'Captain Zhu Qianchun named Seafarer of the Year by Lloyd\'s List',
            'Won Lloyd\'s List Environmental Award for green technologies and practices'
          ]
        }
      ]
    },
    {
      side: 'right',
      title: 'Refocusing on dry bulk',
      yearDetails: [
        {
          year: '2012',
          text: [
            'Commenced exit from RoRo, towage and other non-core businesses',
            'Convertible bond issue raised US$124 million (stock code: 4573)'
          ]
        },
        {
          year: '2013',
          text: ['Secured Japanese Export Credit Financing of US$51 million']
        },
        {
          year: '2014',
          text: [
            'Awarded BIMCO Shipping Company of the Year',
            'US$350 million raised through Japan Export Credit financing for 18 bulk carriers'
          ]
        },
        {
          year: '2015',
          text: ['US$125 million raised through convertible bond issue (stock code: 5525)']
        }
      ]
    },
    {
      side: 'left',
      title: 'Strengthening our position',
      yearDetails: [
        {
          year: '2016',
          text: [
            'US$143 million raised through rights issue',
            'Share issue arrangement with 10 shipowners saved US$12.6 million in charter-hire over 2 years'
          ]
        },
        {
          year: '2017',
          text: [
            'New regional office in Rio de Janeiro, Brazil',
            'Acquired five dry bulk vessels mainly via share issuance and placements',
            'Awarded Lloyd\'s List Global Shipping Company of the Year'
          ]
        },
        {
          year: '2018',
          text: [
            'Acquired 7 modern vessels (4 funded 50% by shares)',
            'Closed US$365 million credit and loan facilities',
            'Resumed dividend payments',
            'Won Dry Bulk Operator of the Year – Lloyd\'s List Global Awards'
          ]
        }
      ]
    },
    {
      side: 'right',
      title: 'Navigating pandemic challenges',
      yearDetails: [
        {
          year: '2019',
          text: [
            'US$115m credit facility',
            'Acquired 4 modern ships, 33% funded by new shares',
            'US$175m convertible bond issue (code: 40097)'
          ]
        },
        {
          year: '2020',
          text: [
            'Joined Getting to Zero Coalition',
            'Supported seafarers during COVID-19 crew change crisis',
            'Advocated for global seafarer solutions'
          ]
        },
        {
          year: '2021',
          text: [
            'Signed Neptune Declaration and Call to Action for Shipping Decarbonisation',
            'Opened Iloilo crewing office',
            'Launched PB Carbon Neutral Voyage',
            'Added 11 second-hand ships, sold 5 smaller ones'
          ]
        },
        {
          year: '2022',
          text: [
            'Signed MoU with Nihon Shipyard & Mitsui for zero-emission vessels',
            'Selected methanol as preferred fuel',
            'Opened new Dubai office',
            'Won major shipping awards',
            'Converted ~60% of US$175m bond, reducing it to US$70.1m'
          ]
        }
      ]
    },
    {
      side: 'left',
      title: 'Well positioned for the future',
      yearDetails: [
        {
          year: '2023',
          text: [
            'Won "Bulk Ship Operator of the Year" at International Bulk Journal Awards (consecutively)',
            'Closed US$150 million Sustainability-Linked 3-year Credit Facility'
          ]
        },
        {
          year: '2024',
          text: [
            'Concluded first ever share buyback programme',
            'Contracted 4 dual-fuel Ultramax low-emission vessels',
            'Won Silver in ESG leader category at ESG Shipping Awards International'
          ]
        }
      ]
    }
  ];
  
  // Extract first year from each timeline section to add as data attribute
  const getFirstYear = (yearDetails) => {
    if (yearDetails && yearDetails.length > 0) {
      return yearDetails[0].year;
    }
    return '';
  };

  // *** FIX 1: Completely rewritten scroll function with fixed navbar offset ***
  const scrollToNextSection = () => {
    // Always calculate the next section index, regardless of current section
    const nextSectionIndex = currentSection + 1;
    
    // Make sure we don't go beyond the total number of sections
    if (nextSectionIndex < timelineData.length) {
      // Get all timeline items first
      const allTimelineItems = document.querySelectorAll('.timeline-item');
      
      // If the next section exists in the DOM
      if (allTimelineItems[nextSectionIndex]) {
        // Fixed offset value - adjust this based on your navbar height
        const NAVBAR_HEIGHT = 120; // Increased to ensure enough space
        
        // Get the element's position relative to the viewport
        const sectionElement = allTimelineItems[nextSectionIndex];
        const sectionTop = sectionElement.getBoundingClientRect().top;
        
        // Current scroll position + section's top position - navbar offset
        const scrollToPosition = window.pageYOffset + sectionTop - NAVBAR_HEIGHT;
        
        // Perform the scroll with smooth behavior
        window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
        });
        
        // Update current section state
        setCurrentSection(nextSectionIndex);
      }
    }
  };

  // *** FIX 2: Modified intersection observer to better handle scroll positions ***
  useEffect(() => {
    // First, set data attributes for all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.setAttribute('data-index', index);
    });
    
    // Configure observer with better settings for visibility
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Only update when section is entering viewport
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.getAttribute('data-index'));
            
            // Add visible class for animation
            entry.target.classList.add('visible');
            
            // Update current section state
            setCurrentSection(sectionIndex);
          } else {
            // Remove visible class when out of viewport
            entry.target.classList.remove('visible');
          }
        });
      },
      {
        root: null, // Use viewport as root
        rootMargin: '-20% 0px -20% 0px', // Trigger when element is 20% into viewport
        threshold: 0.15 // Trigger when 15% of element is visible
      }
    );
    
    // Observe all timeline items
    timelineItems.forEach(item => {
      observer.observe(item);
    });
    
    // Clean up observer on component unmount
    return () => {
      timelineItems.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  // *** FIX 3: Add initial scroll adjustment when page loads ***
  useEffect(() => {
    // Apply initial offset adjustment if needed
    const adjustInitialPosition = () => {
      // Fixed navbar height
      const NAVBAR_HEIGHT = 120;
      
      // Check if there's a hash in URL (direct link to section)
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Wait a moment for DOM to render
          setTimeout(() => {
            const scrollPosition = element.offsetTop - NAVBAR_HEIGHT;
            window.scrollTo(0, scrollPosition);
          }, 100);
        }
      }
    };
    
    // Run adjustment on component mount
    adjustInitialPosition();
  }, []);

  return (
    <div className="page-container">
      {/* Include the sidebar component */}
      <SidebarGlance />
      
      <div className="history-container" ref={timelineRef}>
        {/* Ocean background decoration */}
        <div className="ocean-background"></div>
        
        <h2 className="history-title">Our Maritime Journey</h2>
        
        {/* Next section navigation button - FIXED to properly handle all sections */}
        <button 
          className="next-section-button" 
          onClick={scrollToNextSection}
          aria-label="Scroll to next section"
          style={{ display: currentSection >= timelineData.length - 1 ? 'none' : 'flex' }}
        >
          <span className="next-button-text">Next Milestone</span>
          <svg className="next-button-icon" viewBox="0 0 24 24">
            <path d="M7 10l5 5 5-5z" />
          </svg>
        </button>
        
        <div className="timeline">
          {timelineData.map((item, index) => {
            const firstYear = getFirstYear(item.yearDetails);
            
            return (
              <div 
                key={index} 
                className={`timeline-item ${item.side}`}
                data-year={firstYear}
                data-index={index}
                id={`timeline-section-${index}`}
              >
                <div className="timeline-content">
                  <img src={img2} alt="Maritime History" className="timeline-image" />
                  <h3>{item.title}</h3>
                  {item.yearDetails ? (
                    <ul>
                      {item.yearDetails.map((entry, i) => (
                        <li key={i}>
                          <strong>{entry.year}</strong>
                          {entry.text.map((line, j) => (
                            <div key={j}>{line}</div>
                          ))}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </div>
            );
          })}
          
          {/* Year markers on the timeline */}
          <div className="year-markers">
            {timelineData.map((item, index) => {
              const firstYear = getFirstYear(item.yearDetails);
              return firstYear ? (
                <div 
                  key={`marker-${index}`} 
                  className={`year-marker ${item.side}`}
                  style={{ top: `${(index + 0.5) * 100 / timelineData.length}%` }}
                >
                  <span>{firstYear}</span>
                </div>
              ) : null;
            })}
          </div>
          
          {/* Vertical timeline line */}
          <div className="timeline-line"></div>
          
          {/* Wave effect at the bottom */}
          <div className="wave-footer"></div>
        </div>
      </div>
    </div>
  );
}

export default OurHistory;