import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './Content';
import Home from './Home/Home';

import auchanLogo from './../../assets/images/auchan.png';
import velmartLogo from './../../assets/images/velmart.png';
import silpoLogo from './../../assets/images/silpo.png';
import novusLogo from './../../assets/images/novus.png';

class ContentContainer extends React.Component {
    render() {
        let createImg = path => <img className="logo" src={path} />

        switch (this.props.match.params.market) {
            case 'auchan':
                return <Content market={this.props.match.params.market} title="Auchan"
                    bgColorClass="navbar-dark bg-danger" logo={createImg(auchanLogo)} />;
            case 'velmart':
                return <Content market={this.props.match.params.market} title="Velmart"
                    bgColorClass="navbar-light bg-light" logo={createImg(velmartLogo)} />;
            case 'silpo':
                return <Content market={this.props.match.params.market} title="Silpo"
                    bgColorClass="navbar-light bg-warning" logo={createImg(silpoLogo)} />;
            case 'novus':
                return <Content market={this.props.match.params.market} title="Novus"
                    bgColorClass="navbar-dark bg-success" logo={createImg(novusLogo)} />;
            case 'other':
                return <Content market={this.props.match.params.market} title="Novus"
                    bgColorClass="navbar-dark bg-dark" logo="Other" />;
            default:
                return <Home />
        }

    }
}

let mapStateToProps = state => ({
    markets: state.markets
})

export default connect(mapStateToProps)(withRouter(ContentContainer));
