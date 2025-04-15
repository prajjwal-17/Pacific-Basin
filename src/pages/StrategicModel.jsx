import React from 'react';
import '../styles/StrategicModel.css';

function StrategicModel() {
  return (
    <div className="strategic-model-container">
      <h2 className="strategic-model-title">Our Strategic Model</h2>
      <p className="strategic-model-description">
        Our strategic model leverages four broad characteristics, driving business growth and long-term
        value for our customers and shareholders, including attractive returns over the shipping cycle.
      </p>

      <div className="model-diagram">
        <div className="circle-container">
          <div className="circle customer-focus">
            <div className="circle-content">
              <h3 className="circle-title">CUSTOMER FOCUS</h3>
              <ul className="circle-list">
                <li>Priority to build and sustain long-term customer relationships</li>
                <li>Solution-driven approach ensures accessibility, responsiveness and flexibility for customers</li>
                <li>Close partnership with customers generates enhanced access to spot cargoes and long-term cargo contracts of mutual benefit</li>
              </ul>
            </div>
          </div>

          <div className="circle global-network">
            <div className="circle-content">
              <h3 className="circle-title">GLOBAL OFFICE NETWORK</h3>
              <ul className="circle-list">
                <li>Integrated international service enhanced by experienced commercial and technical staff around the world</li>
                <li>Being local facilitates clear understanding of and response to customers' needs and first-rate personalized service</li>
                <li>Being global facilitates comprehensive market intelligence and cargo opportunities, and optimal trading and positioning of our fleet</li>
              </ul>
            </div>
          </div>

          <div className="circle versatile-fleet">
              <div className="circle-content">
                <h3 className="circle-title">VERSATILE FLEET</h3>
                <ul className="circle-list">
                  <li>Large and modern fleet of Handysize and Supramax vessels</li>
                  <li>Ability to accommodate diverse customer needs across varying cargo types and port restrictions</li>
                  <li>Flexibility to switch between transporting different dry bulk commodities</li>
                </ul>
              </div>
          </div>

          <div className="circle corporate-profile">
            <div className="circle-content">
              <h3 className="circle-title">STRONG CORPORATE PROFILE</h3>
                <ul className="circle-list">
                  <li>Long track record of operational excellence and prudent financial management</li>
                  <li>Solid balance sheet providing stability and the ability to capitalize on market opportunities</li>
                  <li>Commitment to high standards of safety, environmental protection and ethical business conduct</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StrategicModel;