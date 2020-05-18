/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import * as Icon from 'react-feather';
import covid from './images/news/covid.png';

// eslint-disable-next-line react/prefer-stateless-function
class CampusCard extends React.Component {
    render() {
        return (
            <div className="news-card">
                <img
                    src={covid}
                    height="200"
                    alt="ICMR approves IIT Delhi's COVID19 Probe Test"
                    className="news-img"
                    borderRadius="10px"
                />
                <div className="news-card-heading">
                    <h3>
                        ICMR approves the Probe-free COVID-19 detection assay
                        developed at IIT Delhi
                    </h3>
                    <p className="news-desc">
                        Researchers at IIT Delhi Kusuma School of Biological
                        Sciences (KSBS) have developed a detection assay for
                        COVID-19 which has now been approved by ICMR. The assay
                        has been validated at ICMR with a sensitivity and
                        specificity of 100%. This makes IITD the first academic
                        institute to have obtained ICMR approval for a real-time
                        PCR-based diagnostic assay.
                    </p>
                    <p className="news-link">
                        <span>
                            <Icon.Calendar /> 24/04/2020{' '}
                        </span>
                        <span>
                            <Icon.Bookmark />
                        </span>
                        <a href="https://old.iitd.ac.in/content/icmr-approves-probe-free-covid-19-detection-assay-developed-iit-delhi-0">
                        Read Complete Article
                        </a>
                    </p>
                </div>
            </div>
        );
    }
}

export default CampusCard;
