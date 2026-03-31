import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, NavItem, NavLink as NavLinkStrap} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.png'
import favicon from '../../assets/img/brand/favicon.png'
import BackendStatusCard from "../../views/Base/BackendStatusCard/BackendStatusCard";
import { withTranslation } from 'react-i18next';
import i18n from '../../i18n';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
    // 切换语言
    toggleLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'zh' ? 'en' : 'zh';
        i18n.changeLanguage(newLanguage);
    };

    render() {

        // eslint-disable-next-line
        const {children, ...attributes} = this.props;
        const currentLanguage = i18n.language;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile/>
                <AppNavbarBrand
                    full={{src: logo, width: 89, height: 25, alt: 'Rclone Logo'}}
                    minimized={{src: favicon, width: 30, height: 30, alt: 'Rclone Logo'}}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg"/>

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                    </NavItem>

                </Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLinkStrap onClick={this.toggleLanguage} className="nav-link">
                            <i className="fa fa-globe mr-1"></i>
                            {currentLanguage === 'zh' ? 'English' : '中文'}
                        </NavLinkStrap>
                    </NavItem>
                    <BackendStatusCard mode={"button"}/>
                </Nav>

            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default withTranslation()(DefaultHeader);
