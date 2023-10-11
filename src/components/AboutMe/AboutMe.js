import 'animate.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Building, Mortarboard, Briefcase } from 'react-bootstrap-icons';

import './AboutMestyle.css';

function AboutMe() {

    return (
        <section className='about' id='about'>
            <h2>About Me</h2>
            <VerticalTimeline className='timeline'>
                <VerticalTimelineElement
                    contentStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--blue)' }}
                    date="2009-2020"
                    iconStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    icon={<Building />}
                >
                    <h3 className="vertical-timeline-element-title">School No. 1358</h3>
                    <h4 className="vertical-timeline-element-subtitle">Moscow, Russia</h4>
                    <p>Graduated with honors</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--blue)' }}
                    date="2020-2022"
                    iconStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    icon={<Mortarboard />}
                >
                    <h3 className="vertical-timeline-element-title">Bauman Moscow State Technical University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Moscow, Russia</h4>
                    <p>Program: Applied Informatics <br/>
                       Department: Information Analytics and Political Technologies <br/>
                       Not complete to fullfill the dream of studying in Germany</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--blue)' }}
                    date="April - September 2023"
                    iconStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    icon={<Mortarboard />}
                >
                    <h3 className="vertical-timeline-element-title">Duisburg-Essen University</h3>
                    <h4 className="vertical-timeline-element-subtitle">Duisburg, Germany</h4>
                    <p>Faculty: Applied Informatics</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    contentArrowStyle={{ borderRight: '7px solid  var(--blue)' }}
                    date="October 2023 - to date"
                    iconStyle={{ background: 'var(--blue)', color: 'var(--yellow)' }}
                    icon={<Mortarboard />}
                >
                    <h3 className="vertical-timeline-element-title">Technische Universität Berlin</h3>
                    <h4 className="vertical-timeline-element-subtitle">Berlin, Germany</h4>
                    <p>Program: Medieninformatik</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    contentStyle={{ background: 'var(--accent-background)', color: 'var(--accent-text)' }}
                    contentArrowStyle={{ borderRight: '7px solid var(--accent-background)' }}
                    date="March - September 2023"
                    iconStyle={{ background: 'var(--accent-background)', color: 'var(--accent-text)' }}
                    icon={<Briefcase />}
                >
                    <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ecosystem Alpha</h4>
                    <p>
                        Internship
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
}

export default AboutMe;