import React from "react";
import UserData from "./UserDataCard";

import { DataFromServer, EmptyProps, ListingState } from "../types/Types";
import Loading from "./Loading";
import Footer from "./Footer";

class Listing extends React.Component<EmptyProps, ListingState> {
  // Constructor
  constructor(props: EmptyProps) {
    super(props);

    this.state = {
      items: [],
      dataIsLoaded: false,
      page: 1,
      totalPage: 0,
      currentPageNo: 1,
    };
  }

  // ComponentDidMount is used to execute the code
  async componentDidMount() {
    let url = "https://reqres.in/api/users?page=1";
    let response = await fetch(url);
    let parsedData = await response.json();
    this.setState({
      items: parsedData.data,
      totalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      dataIsLoaded: true,
    });
  }
  // Handling on click events
  handlePreviousClick = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page - 1}`;
    let response = await fetch(url);
    let parsedData: DataFromServer = await response.json();

    this.setState({
      items: parsedData.data,
      totalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      dataIsLoaded: true,
      page: this.state.page - 1,
    });

    console.log("previous");
  };
  handleNextClick = async () => {
    let url = `https://reqres.in/api/users?page=${this.state.page + 1}`;
    let response = await fetch(url);
    let parsedData = await response.json();
    let a = this.state.page;
    this.setState({
      items: parsedData.data,
      totalPage: parsedData.total_pages,
      currentPageNo: parsedData.page,
      dataIsLoaded: true,
      page: a + 1,
    });

    console.log("next");
  };
  render() {
    // Helps to load data before rendering
    const { dataIsLoaded, items, totalPage, currentPageNo } = this.state;
    if (!dataIsLoaded) return <Loading />;

    return (
      <div className="container my-3 ">
        <h1 className="d-flex justify-content-center">
          Welcome To Profile Dashboard
        </h1>
        <hr />
        {/* For Card */}
        <div className="row">
          {items.map((item) => (
            <div className="col-md-4">
              <UserData
                id={item.id}
                User_Email={item.email}
                F_Name={item.first_name}
                L_Name={item.last_name}
                avatar={item.avatar}
              />
            </div>
          ))}
        </div>
        {/* For Next Previous Button */}

        <div
          className="container d-flex justify-content-between"
          style={{ display: "block", padding: 30 }}
        >
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
            disabled={this.state.page <= 1}
          >
            &larr; Previous
          </button>
          <h6>Page Number is {currentPageNo}</h6>

          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
            disabled={this.state.page >= totalPage}
          >
            Next &rarr;
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Listing;
