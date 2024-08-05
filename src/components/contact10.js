import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content thq-flex-row">
          <div className="contact10-content1">
            <h2>
              {props.heading1 ?? (
                <Fragment>
                  <h2 className="contact10-text09 thq-heading-2">Contact Us</h2>
                </Fragment>
              )}
            </h2>
            <p>
              {props.content1 ?? (
                <Fragment>
                  <p className="contact10-text06 thq-body-large">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in ero.
                  </p>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content2 thq-flex-row">
          <div className="contact10-container1">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image thq-img-ratio-16-9"
            />
            <h3>
              {props.location1 ?? (
                <Fragment>
                  <h3 className="contact10-text10 thq-heading-3">
                    Address: 123 Bourbon Street, Casablanca, Morocco
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location1Description ?? (
                <Fragment>
                  <p className="contact10-text11 thq-body-large">
                    Visit our store to explore our range of Bourbon vanilla
                    products.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container2">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container3">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3>
              {props.location2 ?? (
                <Fragment>
                  <h3 className="contact10-text08 thq-heading-3">
                    Email: info@bourbonvanillamorocco.com
                  </h3>
                </Fragment>
              )}
            </h3>
            <p>
              {props.location2Description ?? (
                <Fragment>
                  <p className="contact10-text07 thq-body-large">
                    For any inquiries or orders, feel free to reach out to us
                    via email.
                  </p>
                </Fragment>
              )}
            </p>
            <div className="contact10-container4">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  location1ImageSrc:
    'https://images.unsplash.com/photo-1535190464308-a099443c5480?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1517574282171-f82917cdfd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUxOXw&ixlib=rb-4.0.3&q=80&w=1080',
  location2Description: undefined,
  location1ImageAlt: 'Image of our store front',
  location2: undefined,
  heading1: undefined,
  location1: undefined,
  location1Description: undefined,
  location2ImageAlt: 'Email icon',
}

Contact10.propTypes = {
  location1ImageSrc: PropTypes.string,
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location2: PropTypes.element,
  heading1: PropTypes.element,
  location1: PropTypes.element,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
}

export default Contact10
