/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import * as Icon from 'react-feather';

const ResponsiveGridLayout = WidthProvider(Responsive);

class Links extends React.Component {
    render() {
        const layoutLg = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 3,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 6,
                y: 0,
                w: 3,
                h: 2.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 3.2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 3,
                y: 1.75,
                w: 3,
                h: 1.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layoutMd = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 0,
                y: 2.2,
                w: 3,
                h: 1.75,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 3,
                y: 0,
                w: 3,
                h: 2.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 3.2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 3,
                y: 1.75,
                w: 3,
                h: 1.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layoutSm = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 0,
                y: 2.2,
                w: 3,
                h: 1.75,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 3,
                y: 3.4,
                w: 3,
                h: 2.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 3.3,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 0,
                y: 4.9,
                w: 3,
                h: 1.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layoutXxs = [
            {
                i: 'a',
                x: 0,
                y: 0,
                w: 3,
                h: 2,
                isResizable: false,
                useCSSTransforms: true,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'b',
                x: 3,
                y: 0,
                w: 3,
                h: 1.75,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'c',
                x: 6,
                y: 0,
                w: 3,
                h: 2.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'd',
                x: 9,
                y: 0,
                w: 3,
                h: 3.2,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
            {
                i: 'e',
                x: 3,
                y: 1.75,
                w: 3,
                h: 1.5,
                isResizable: false,
                autoSize: true,
                verticalCompact: true,
                isDraggable: false,
            },
        ];
        const layouts = {
            lg: layoutLg,
            md: layoutMd,
            sm: layoutSm,
            xs: layoutSm,
            xxs: layoutXxs,
        };
        return (
            <ResponsiveGridLayout
                className="layout"
                layouts={layouts}
                breakpoints={{ lg: 1400, md: 1162, sm: 768, xs: 550, xxs: 0 }}
                cols={{ lg: 12, md: 9, sm: 6, xs: 6, xxs: 3 }}
                horizontalCompact
                autoSize
            >
                <div
                    key="a"
                    className="linkGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <div
                        className="link-card"
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block' }}
                    >
                        <h1>
                            <span>
                                <Icon.Link />
                            </span>{' '}
                            Academics
                        </h1>
                        <a href="https://moodle.iitd.ac.in/" className="link">
                            Moodle
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://library.iitd.ac.in/" className="link">
                            Central Library
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://eacademics.iitd.ac.in/sportal/login"
                            className="link"
                        >
                            Academic ERP
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://home.iitd.ac.in/curriculum.php"
                            className="link"
                        >
                            Curriculum Info
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://owncloud.iitd.ac.in/nextcloud/index.php"
                            className="link"
                        >
                            OwnCloud
                        </a>
                        <p />
                    </div>
                </div>
                <div key="b" className="linkGrid" autoSize="true">
                    <div
                        className="link-card"
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block' }}
                    >
                        <h1>
                            <span>
                                <Icon.Link />
                            </span>{' '}
                            Schedule
                        </h1>
                        <a
                            href="https://home.iitd.ac.in/academic-calendar.php"
                            className="link"
                        >
                            Academic Calendar
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://timetable.iitd.ac.in/" className="link">
                            Exam Schedule
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://timetable.iitd.ac.in/" className="link">
                            Time Table
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://home.iitd.ac.in/uploads/IITD-133065-19-ICDN.pdf"
                            className="link"
                        >
                            List of Holidays
                        </a>
                        <p />
                    </div>
                </div>
                <div key="c" className="linkGrid" autoSize="true">
                    <div
                        className="link-card"
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block' }}
                    >
                        <h1>
                            <span>
                                <Icon.Link />
                            </span>{' '}
                            IITD Services
                        </h1>
                        <a
                            href="https://webmail.iitd.ac.in/roundcube/"
                            className="link"
                        >
                            Webmail
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="https://home.iitd.ac.in/" className="link">
                            IITD Website
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://tnp.iitd.ac.in/newocs/ocs/index.php"
                            className="link"
                        >
                            Career Services
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="http://www.cc.iitd.ac.in/CSC/"
                            className="link"
                        >
                            Computer Services Centre
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="http://notices.smartcampus.iitd.ac.in/"
                            className="link"
                        >
                            eNotice Board
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="https://ngu.iitd.ac.in/" className="link">
                            Non Graded Units NGU
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="http://old.iitd.ac.in/content/anti-sexual-harassment-policy"
                            className="link"
                        >
                            Internal Complaints Committee
                        </a>
                        <p />
                    </div>
                </div>
                <div
                    key="d"
                    className="linkGrid"
                    isResizable="true"
                    autoSize="true"
                >
                    <div
                        className="link-card"
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block' }}
                    >
                        <h1>
                            <span>
                                <Icon.Link />
                            </span>{' '}
                            Boards And <br /> Councils
                        </h1>
                        <a href="http://sac.iitd.ac.in/" className="link">
                            Student Affairs Council (SAC)
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://dos.iitd.ac.in/" className="link">
                            Dean of Student Affairs
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://bsa-iitd.in/home/" className="link">
                            Board for Sports Activities (BSA)
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://brca.iitd.ac.in/" className="link">
                            Board for Recreational and Creative Activities
                            (BRCA)
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://bsp.iitd.ac.in/" className="link">
                            Board of Student Publications (BSP)
                        </a>
                        <span>
                            <p />
                        </span>
                        <a
                            href="https://home.iitd.ac.in/bhm.php"
                            className="link"
                        >
                            Board of Hostel Management (BHM)
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="http://bsw.iitd.ac.in/" className="link">
                            Board of Student Welfare (BSW)
                        </a>
                        <p />
                    </div>
                </div>
                <div key="e" className="linkGrid" autoSize="true">
                    <div
                        className="link-card"
                        shaded
                        bordered
                        bodyFill
                        style={{ display: 'inline-block' }}
                    >
                        <h1>
                            <span>
                                <Icon.Link />
                            </span>{' '}
                            Health and <br /> Wellness
                        </h1>
                        <a href="http://hospital.iitd.ac.in/" className="link">
                            IITD Hospital
                        </a>
                        <span>
                            <p />
                        </span>
                        <a href="https://yourdost.com/" className="link">
                            YourDOST
                        </a>
                        <p />
                    </div>
                </div>
            </ResponsiveGridLayout>
        );
    }
}

export default Links;
