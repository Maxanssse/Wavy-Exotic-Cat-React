import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Wavy Exotic Cat</title>
        <meta property="og:title" content="Wavy Exotic Cat" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text thq-body-small thq-link">Link 1</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text001 thq-body-small thq-link">Link 2</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text002 thq-body-small thq-link">Link 3</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text003 thq-body-small thq-link">Link 4</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text004 thq-body-large">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text005 thq-body-large">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text006 thq-body-large">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text007 thq-body-large">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text008">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text009">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text010 thq-body-small">
              Page One Description
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text011 thq-body-small">
              Page Two Description
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text012 thq-body-small">
              Page Three Description
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text013 thq-body-small">
              Page Four Description
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text014 thq-body-small">Shop Now</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text015 thq-body-small">
              Secondary action
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text016 thq-body-large">
              Indulge in the rich and aromatic flavors of our premium Bourbon
              vanilla products sourced directly from Madagascar. Elevate your
              culinary creations with our high-quality vanilla beans, extracts,
              and more.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h1 className="home-text017 thq-heading-1">
              Discover the Finest Bourbon Vanilla in Morocco
            </h1>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <h2 className="home-text018 thq-heading-2">
              Fresh Bourbon Vanilla
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text019 thq-heading-2">Intense Flavor</h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text020 thq-heading-2">Premium Quality</h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text021 thq-body-small">
              Directly sourced from Madagascar
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text022 thq-body-small">
              Rich and aromatic flavor profile
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text023 thq-body-small">
              Hand-picked and carefully selected vanilla pods
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text024">Shop Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <p className="home-text025 thq-body-large">
              Explore our premium selection of Bourbon vanilla products sourced
              directly from Madagascar.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text026 thq-heading-2">
              Discover the Finest Bourbon Vanilla
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <h2 className="home-text027 thq-heading-2">
              Premium Bourbon Vanilla Beans
            </h2>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <h2 className="home-text028 thq-heading-2">
              Wide Range of Vanilla Products
            </h2>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <h2 className="home-text029 thq-heading-2">
              Exceptional Customer Service
            </h2>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text030 thq-body-small">
              We offer high-quality Bourbon vanilla beans sourced directly from
              Madagascar, known for their rich flavor and aroma.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text031 thq-body-small">
              Explore our selection of vanilla products including extracts,
              powders, and more to enhance your culinary creations.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text032 thq-body-small">
              Our dedicated team provides personalized assistance to ensure a
              seamless shopping experience and satisfaction with every purchase.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <p className="home-text033 thq-body-large">
              Basic Bourbon Vanilla Pack
            </p>
          </Fragment>
        }
        plan2={
          <Fragment>
            <p className="home-text034 thq-body-large">
              Premium Bourbon Vanilla Pack
            </p>
          </Fragment>
        }
        plan3={
          <Fragment>
            <p className="home-text035 thq-body-large">
              Deluxe Bourbon Vanilla Pack
            </p>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text036 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text037 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text038 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text039 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <p className="home-text040 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text043 thq-heading-2">Pricing plan</h2>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <h3 className="home-text044 thq-heading-3">$20</h3>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <h3 className="home-text045 thq-heading-3">$40</h3>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <h3 className="home-text046 thq-heading-3">$60</h3>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text047 thq-body-small">Add to Cart</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <h3 className="home-text048 thq-heading-3">$200/yr</h3>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <p className="home-text049 thq-body-large">$200</p>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text050 thq-body-small">Add to Cart</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <h3 className="home-text051 thq-heading-3">$299/yr</h3>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <p className="home-text052 thq-body-large">$400</p>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text053 thq-body-small">Add to Cart</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <h3 className="home-text054 thq-heading-3">$499/yr</h3>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <p className="home-text055 thq-body-large">$600</p>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text056 thq-body-small">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text057 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text058 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text059 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text060 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text061 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text062 thq-body-small">
              100g of Bourbon Vanilla Beans
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text063 thq-body-small">
              Free Shipping on first order
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text064 thq-body-small">
              10% discount on next purchase
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text065 thq-body-small">
              200g of Bourbon Vanilla Beans
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text066 thq-body-small">
              Free Shipping on all orders
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text067 thq-body-small">
              15% discount on next two purchases
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text068 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text069 thq-body-small">
              300g of Bourbon Vanilla Beans
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text070 thq-body-small">
              Free Shipping on all orders
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text071 thq-body-small">
              20% discount on next three purchases
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text072 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text073 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text074 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text075 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text076 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text077 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text078 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text079 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text080 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text081 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text082 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text083 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text084 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text085 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <h2 className="home-text086 thq-heading-2">
              Explore our Bourbon Vanilla Selection
            </h2>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <h2 className="home-text087 thq-heading-2">Place Your Order</h2>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <h2 className="home-text088 thq-heading-2">Fast Delivery</h2>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <h2 className="home-text089 thq-heading-2">
              Satisfaction Guaranteed
            </h2>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text090 thq-body-small">
              Discover a wide range of premium Bourbon vanilla products sourced
              directly from Madagascar.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text091 thq-body-small">
              Select your desired Bourbon vanilla products and place your order
              easily through our website.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text092 thq-body-small">
              Enjoy fast and reliable delivery services to any location in
              Morocco.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text093 thq-body-small">
              We guarantee the quality of our Bourbon vanilla products and
              strive for customer satisfaction.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text094 thq-body-small">5 stars</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text095 thq-body-small">
              Absolutely love the rich flavor of Bourbon vanilla from this
              seller. It has enhanced the taste of my desserts like never
              before!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text096 thq-body-small">
              Great product! The aroma and taste of this Bourbon vanilla are
              unmatched. Will definitely be purchasing again.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text097 thq-body-small">
              Using Bourbon vanilla from this seller has elevated the dishes in
              my restaurant to a whole new level. Customers love it!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text098 thq-body-small">
              I have been using Bourbon vanilla from this seller for years, and
              I must say it&apos;s the best quality vanilla I have ever come
              across. Highly recommended!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text099 thq-heading-2">Testimonials</h2>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <strong className="home-text100 thq-body-large">
              Sarah Johnson
            </strong>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <strong className="home-text101 thq-body-large">
              Michael Smith
            </strong>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <strong className="home-text102 thq-body-large">Emily Davis</strong>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <strong className="home-text103 thq-body-large">
              David Wilson
            </strong>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text104 thq-body-small">Food Blogger</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text105 thq-body-small">Chef</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text106 thq-body-small">Home Baker</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text107 thq-body-small">
              Restaurant Owner
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <p className="home-text108 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </p>
          </Fragment>
        }
        heading1={
          <Fragment>
            <h2 className="home-text109 thq-heading-2">Contact Us</h2>
          </Fragment>
        }
        location1={
          <Fragment>
            <h3 className="home-text110 thq-heading-3">
              Address: 123 Bourbon Street, Casablanca, Morocco
            </h3>
          </Fragment>
        }
        location2={
          <Fragment>
            <h3 className="home-text111 thq-heading-3">
              Email: info@bourbonvanillamorocco.com
            </h3>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <p className="home-text112 thq-body-large">
              Visit our store to explore our range of Bourbon vanilla products.
            </p>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <p className="home-text113 thq-body-large">
              For any inquiries or orders, feel free to reach out to us via
              email.
            </p>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text114 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text115 thq-body-small">Products</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text116 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text117 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text118 thq-body-small">FAQ</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text119 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text120 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text121 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
