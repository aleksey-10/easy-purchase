import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Content from './Content';
import { setTodos } from './../../redux/marketsReducer';

import auchanLogo from './../../assets/images/auchan.png';
import velmartLogo from './../../assets/images/velmart.png';
import silpoLogo from './../../assets/images/silpo.png';
import novusLogo from './../../assets/images/novus.png';
import { compose } from 'redux';


class ContentContainer extends React.Component {
    componentDidMount() {
        this.props.setTodos();
    }

    createImg = (path, title) => (
        <img className="logo" src={path} alt={title} />
    )

    render() {
        switch (this.props.match.params.market) {
            case 'auchan':
                return (
                    <Content
                        market={this.props.match.params.market}
                        bgColorClass="navbar-dark bg-danger"
                        logo={this.createImg(auchanLogo, 'Auchan')}
                    />
                );
            case 'velmart':
                return (
                    <Content
                        market={this.props.match.params.market}
                        bgColorClass="navbar-light bg-light"
                        logo={this.createImg(velmartLogo, 'Velmart')}
                    />
                );
            case 'silpo':
                return (
                    <Content
                        market={this.props.match.params.market}
                        bgColorClass="navbar-light bg-warning"
                        logo={this.createImg(silpoLogo, 'Silpo')}
                    />
                );
            case 'fair':
                return (
                    <Content
                        market={this.props.match.params.market}
                        bgColorClass="navbar-dark bg-secondary"
                        logo="MARKET"
                    />
                )
            default:
                return (
                    <Content
                        market={'novus'}
                        bgColorClass="navbar-dark bg-success"
                        logo={this.createImg(novusLogo, 'Novus')}
                    />
                );
        }

    }
}

let mapStateToProps = state => ({
    markets: state.markets
})

export default compose(
    connect(mapStateToProps, {setTodos}),
    withRouter
) (ContentContainer);
