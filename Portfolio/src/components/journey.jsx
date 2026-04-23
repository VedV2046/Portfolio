import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import VerticalTimelineElement from './journeyElement';
import '../styles/journey.css';

const VerticalTimeline = ({
    animate = true,
    className = '',
    layout = '2-columns',
    lineColor = '#FFF',
    children,
}) => {
    useEffect(() => {
        document.documentElement.style.setProperty('--line-color', lineColor);
    }, [lineColor]);

    return (
        <div
            className={classNames(className, 'vertical-timeline', {
                'vertical-timeline--animate': animate,
                'vertical-timeline--two-columns': layout === '2-columns',
                'vertical-timeline--one-column-left': layout === '1-column' || layout === '1-column-left',
                'vertical-timeline--one-column-right': layout === '1-column-right',
            })}
        >
            {children}
        </div>
    );
};

const VerticalTimelineItem = ({
    date,
    title,
    subtitle,
    description,
    className = '',
    accentColor = '#7dd3fc',
}) => (
    <VerticalTimelineElement
        className={classNames('journey-element', className)}
        date={date}
        icon={null}
        iconStyle={{ background: `radial-gradient(circle at 35% 35%, #5cff05, ${accentColor})` }}
        textClassName="journey-card"
        contentArrowStyle={{ borderRightColor: 'rgb(249, 249, 249)' }}
    >
        <div className="journey-card-header">
            <h3 className="vertical-timeline-element-title">{title}</h3>
            {subtitle ? <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4> : null}
        </div>
        {description ? <p className="journey-card-description">{description}</p> : null}
    </VerticalTimelineElement>
);

VerticalTimeline.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    className: PropTypes.string,
    animate: PropTypes.bool,
    layout: PropTypes.oneOf(['1-column-left', '1-column', '2-columns', '1-column-right']),
    lineColor: PropTypes.string,
};

VerticalTimelineItem.propTypes = {
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
    accentColor: PropTypes.string,
};

VerticalTimeline.Item = VerticalTimelineItem;

export default VerticalTimeline;
