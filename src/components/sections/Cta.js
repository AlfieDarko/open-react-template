import Button from '../elements/Button';
import ButtonGroup from '../elements/ButtonGroup';
import Input from '../elements/Input';
import PropTypes from 'prop-types';
import React from 'react';
import { SectionProps } from '../../utils/SectionProps';
import classNames from 'classnames';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              Sounds Good? Join the Waiting List!
            </h3>
          </div>
          <div className="cta-action">
            <ButtonGroup>
                  <Button color="#000" hasBgColor={false} tag="a" color="light" wideMobile href="https://hhrapjfzykb.typeform.com/to/Ng9iRbMf">
                    Claim Your Username!
                    </Button>

                  {/* <Button tag="a" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> */}
                </ButtonGroup>
            {/* <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
            </Input> */}
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;