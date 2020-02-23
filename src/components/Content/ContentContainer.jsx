import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './Content';
import Home from './Home/Home';
import { setTodos } from './../../redux/marketsReducer';

import auchanLogo from './../../assets/images/auchan.png';
import velmartLogo from './../../assets/images/velmart.png';
import silpoLogo from './../../assets/images/silpo.png';
import novusLogo from './../../assets/images/novus.png';


class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.setTodos();
    }

    render() {
        let createImg = (path, title) => <img className="logo" src={path} alt={title} />

        switch (this.props.match.params.market) {
            case 'auchan':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-dark bg-danger" logo={createImg(auchanLogo, 'Auchan')} />;
            case 'velmart':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-light bg-light" logo={createImg(velmartLogo, 'Velmart')} />;
            case 'silpo':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-light bg-warning" logo={createImg(silpoLogo, 'Silpo')} />;
            case 'novus':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-dark bg-success" logo={createImg(novusLogo, 'Novus')} />;
            case 'fair':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-dark bg-secondary" logo="ЯРМАРКА" />
            case 'other':
                return <Content market={this.props.match.params.market}
                    bgColorClass="navbar-dark bg-dark" logo="" />;
            default:
                return <Home />
        }

    }
}

let mapStateToProps = state => ({
    markets: state.markets
})

export default connect(mapStateToProps, {setTodos})(withRouter(ContentContainer));
