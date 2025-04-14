// HomePage.jsx
import React from 'react';

const AtGlance = () => {
  return (
    <div className="homepage" style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <section>
        <h2 style={{ color: '#003366' }}>Who We Are</h2>
        <p>
          Pacific Basin is one of the world's leading owners and operators of modern Handysize and Supramax dry bulk ships
        </p>
        <ul>
          <li>We are passionate about our customers, our people and our business</li>
          <li>Our vision is to be the global leader in minor bulk shipping and the partner of choice for customers and other stakeholders</li>
          <li>We work closely with our customers to understand and meet their individual and changing needs</li>
          <li>We strive to deliver an industry-leading localised, tailored and responsive freight service</li>
          <li>We provide over 600 industrial producers, traders and users of dry bulk commodities with a reliable and competitive freight service</li>
          <li>Our fleet of ~277 ships and 14 offices on 6 continents offers a global service</li>
          <li>We own ships, crews and in-house technical operations for enhanced service</li>
          <li>Headquartered and listed in Hong Kong</li>
        </ul>
      </section>

      <section style={{ margin: '2rem 0' }}>
        <h2 style={{ color: '#003366' }}>Fast Facts</h2>
        <img src="./images/fast.jpg" alt="Fast Facts" style={{ maxWidth: '100%', height: 'auto' }} />
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Our Strengths</h3>
        <ul>
          <li>World-leading minor bulk shipping expertise, solid track record and expert understanding of the shipping cycles</li>
          <li>Customer and cargo-focused business model, high fleet utilisation and time-charter equivalent (TCE) earnings premium over market rates</li>
          <li>Robust cost control, competitive operating costs, conservative gearing and strong financial health</li>
          <li>Commitment to strong corporate governance – sound internal controls, transparency and accountability to all stakeholders – which underpins everything we do</li>
        </ul>
        <p>
          Together, these strengths enhance confidence in Pacific Basin as a preferred counterparty for our customers and a compelling place to invest.
        </p>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Our Strategy</h3>
        <p>
          We have a focused strategy, robust customer-focused business model and competitive edge, supported by our key drivers:
        </p>
        <ul>
          <li>Experienced team working across an extensive global network, sharing a passion for service</li>
          <li>Close customer partnerships, generating enhanced access to spot cargoes and long-term cargo contracts</li>
          <li>Large fleet of substitutable ships, facilitating reliable service and scheduling flexibility</li>
          <li>Strong corporate and financial profile, reflecting a strong cash position and best-in-class governance, CSR and reporting</li>
        </ul>
        <p>
          This leads to outstanding customer service, superior fleet utilisation, and enhanced TCE earnings and attractive long-term returns for our shareholders over the shipping cycle.
        </p>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Our Fleet</h3>
        <p>
          We are ship owners and operators – we own 112 ships and operate approximately 165 more under charter. Our fleet of around 277 Handysize and Supramax ships is one of the world’s largest fleets of modern minor bulk ships.
        </p>
        <p>
          We combine our fleet size, global office network and local understanding to provide customers with class-leading service.
        </p>
        <p>
          All our ships are designed and equipped to fit our trades for the long term. Built mainly in Japan, they offer superior reliability, longevity, value retention and fuel efficiency.
        </p>
        <p>
          Our award-winning in-house technical operations facilitate service quality and reliability.
        </p>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Leadership</h3>
        <p>
          Our Board comprises 9 Directors whose complementary expertise and shared commitment to responsible investment and management practices is harnessed in the best interests of our diverse shareholders and other stakeholders.
        </p>
        <ul>
          <li>Chairman Stanley H. Ryan was appointed in 2023</li>
          <li>Chief Executive Officer Martin Fruergaard joined in 2021</li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Our Team</h3>
        <p>We employ about 4,600 seafarers and 403 onshore staff</p>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Locations</h3>
        <p>
          Our corporate headquarters are in Hong Kong, and our global network spans 14 offices across six continents.
        </p>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Financial Highlights</h3>
        <p>As at 2024 Annual Results (in USD):</p>
        <ul>
          <li>$131.7m net profit</li>
          <li>$114.1m underlying profit</li>
          <li>$2,581.6m revenue</li>
          <li>$333.4m EBITDA</li>
          <li>$547.6m total available liquidity</li>
        </ul>
      </section>

      <section>
        <h3 style={{ color: '#003366' }}>Listing Info</h3>
        <p>
          <strong>Equity Stock:</strong> Pacific Basin shares (Stock code: 2343) have traded on the Hong Kong Stock Exchange since 2004. Our stock is a constituent member of the Hang Seng sub index series and the MSCI index series, and it is eligible for Southbound Trading under the Shenzhen-Hong Kong Stock Connect Programme.
        </p>
        <p>
          <strong>Convertible Bonds:</strong> 3.0% Convertible Bonds due 2025 (Stock code: 40097)
        </p>
      </section>

      <section style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <img src="./images/fast.jpg" alt="Visual 1" style={{ width: '30%', borderRadius: '10px' }} />
        <img src="./images/fast.jpg" alt="Visual 2" style={{ width: '30%', borderRadius: '10px' }} />
        <img src="./images/fast.jpg" alt="Visual 3" style={{ width: '30%', borderRadius: '10px' }} />
      </section>
    </div>
  );
};

export default AtGlance;
