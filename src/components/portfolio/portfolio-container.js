import React, { Component } from "react"

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    // State
    // Lifecycle hooks
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            data: [
                {title: "Quip", category: "eCommerce"}, 
                {title: "Eventbrite", category: "Scheduling"}, 
                {title: "Ministry Safe", category: "Enterprise"}, 
                {title: "Swing Away", category: "eCommerce"}
            ]
        };

        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
            this.setState({
                data: this.state.data.filter(item => {
                    return item.category === filter;
                })
            })
    }

    portfolioItems() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={"google.com"} />;
        })
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something else"
        });
    }

    // handlePageTitleUpdate = () => {
    //     return "yay"
    // }

    render() {
        return (
            <div>
                <h2>{this.state.pageTitle}</h2>


                <button onClick={() => this.handleFilter('eCommerce')}>eCommerce</button>
                <button onClick={() => this.handleFilter('Scheduling')}>Scheduling</button>
                <button onClick={() => this.handleFilter('Enterprise')}>Enterprise</button>

                {this.portfolioItems()}



                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}