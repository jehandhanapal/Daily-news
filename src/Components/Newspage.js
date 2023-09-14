import React, { Component } from "react";
import Newsitem from "./Newsitem";

export default class Newspage extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36a7d2bd5dd54c5a8055cd7b442eb150&page=1&pagesize=${this.props.pagesize}`;
    let response = await fetch(url);
    let data = await response.json();

    this.setState({ articles: data.articles, totalResults: data.totalResults });
    document.title = `Daily News - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
    this.props.setProgress(100);

  }

  // componentDidCatch(error, info) {
  //   logErrorToMyService(error, info.componentStack);
  // }
  handlenextclick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36a7d2bd5dd54c5a8055cd7b442eb150&page=${this.state.page + 1}&pagesize=${this.props.pagesize}`;
      let response = await fetch(url);
      let data = await response.json();
      this.setState({ articles: data.articles, page: this.state.page + 1 });
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };
  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=36a7d2bd5dd54c5a8055cd7b442eb150&page=${this.state.page - 1}&pagesize=${this.props.pagesize}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({ articles: data.articles, page: this.state.page - 1 });
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center"> Top Headlines from {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>

        <div className="row my-3">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title} description={element.description} imgUrl={element.urlToImage} URL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            );
          })}
          <div className="button d-flex justify-content-between ">
            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark btn-sm" onClick={this.handleprevclick}>
              &larr; Previous
            </button>
            <div className=" fs-6 fw-semibold text-sm d-flex align-items-center">
              Page {this.state.page}/{Math.ceil(this.state.totalResults / this.props.pagesize)}
            </div>
            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-dark btn-sm" onClick={this.handlenextclick}>
              Next &rarr;
            </button>
          </div>
        </div>
      </div>
    );
  }
}
