import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './Content';
import Home from './Home/Home';
import { setTodosAC } from '../../redux/marketsReducer';

import auchanLogo from './../../assets/images/auchan.png';
import velmartLogo from './../../assets/images/velmart.png';
import silpoLogo from './../../assets/images/silpo.png';
import novusLogo from './../../assets/images/novus.png';
import Preloader from './../common/Preloader';


class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.setTodosAC();
    }

    render() {
        let createImg = (path, title) => <img className="logo" src={path} alt={title} />
        
        switch (this.props.match.params.market) {
            case 'auchan':
                return <Content market={this.props.match.params.market} title="Auchan"
                    bgColorClass="navbar-dark bg-danger" logo={createImg(auchanLogo, 'Auchan')} />;
            case 'velmart':
                return <Content market={this.props.match.params.market} title="Velmart"
                    bgColorClass="navbar-light bg-light" logo={createImg(velmartLogo, 'Velmart')} />;
            case 'silpo':
                return <Content market={this.props.match.params.market} title="Silpo"
                    bgColorClass="navbar-light bg-warning" logo={createImg(silpoLogo, 'Silpo')} />;
            case 'novus':
                return <Content market={this.props.match.params.market} title="Novus"
                    bgColorClass="navbar-dark bg-success" logo={createImg(novusLogo, 'Novus')} />;
            case 'other':
                return <Content market={this.props.match.params.market} title="Other"
                    bgColorClass="navbar-dark bg-dark" logo="Other" />;
            default:
                return <Home />
        }

    }
}

let mapStateToProps = state => ({
    markets: state.markets
})

export default connect(mapStateToProps, {setTodosAC} )(withRouter(ContentContainer));
