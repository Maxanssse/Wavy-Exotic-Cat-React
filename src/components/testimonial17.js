import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text22 thq-heading-2">
                  Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text18 thq-body-small">
                  I have been using Bourbon vanilla from this seller for years,
                  and I must say it&apos;s the best quality vanilla I have ever
                  come across. Highly recommended!
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial17-card">
                <div className="testimonial17-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image"
                  />
                  <div className="testimonial17-container03">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text25 thq-body-large">
                            Sarah Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text16 thq-body-small">
                            Food Blogger
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text20 thq-body-small">
                        5 stars
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container05">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text14 thq-body-large">
                            Michael Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text21 thq-body-small">
                            Chef
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text23 thq-body-small">
                        Absolutely love the rich flavor of Bourbon vanilla from
                        this seller. It has enhanced the taste of my desserts
                        like never before!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container07">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            Emily Davis
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text17 thq-body-small">
                            Home Baker
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text19 thq-body-small">
                        Great product! The aroma and taste of this Bourbon
                        vanilla are unmatched. Will definitely be purchasing
                        again.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container09">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text26 thq-body-large">
                            David Wilson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text15 thq-body-small">
                            Restaurant Owner
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text27 thq-body-small">
                        Using Bourbon vanilla from this seller has elevated the
                        dishes in my restaurant to a whole new level. Customers
                        love it!
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Name: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1520804921548-260e1d6aa211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Position: undefined,
  author1Alt: 'Image of Sarah Johnson',
  author1Position: undefined,
  author3Position: undefined,
  content1: undefined,
  review3: undefined,
  review1: undefined,
  author2Position: undefined,
  author2Alt: 'Image of Michael Smith',
  author4Alt: 'Image of David Wilson',
  heading1: undefined,
  review2: undefined,
  author3Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1527236438218-d82077ae1f85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1670330701697-b15e6d6cc188?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUyMHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Name: undefined,
  author3Src:
    'https://images.unsplash.com/photo-1445810694374-0a94739e4a03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMjg1ODUyMXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: undefined,
  author3Alt: 'Image of Emily Davis',
}

Testimonial17.propTypes = {
  author2Name: PropTypes.element,
  author2Src: PropTypes.string,
  author4Position: PropTypes.element,
  author1Alt: PropTypes.string,
  author1Position: PropTypes.element,
  author3Position: PropTypes.element,
  content1: PropTypes.element,
  review3: PropTypes.element,
  review1: PropTypes.element,
  author2Position: PropTypes.element,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  heading1: PropTypes.element,
  review2: PropTypes.element,
  author3Name: PropTypes.element,
  author1Src: PropTypes.string,
  author1Name: PropTypes.element,
  author4Src: PropTypes.string,
  author4Name: PropTypes.element,
  author3Src: PropTypes.string,
  review4: PropTypes.element,
  author3Alt: PropTypes.string,
}

export default Testimonial17
