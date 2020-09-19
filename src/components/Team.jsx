import React, { Component } from "react";

const sample = {
marginleft: 3000,

};

export class Team extends Component {
  render() {
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Meet the Squad</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
              dapibus leonec.
            </p>
          </div>
          <div id="row" >
            {this.props.data
              ? this.props.data.map((d, i) => (
                  <div  className={sample} key={`${d.name}-${i}`} >
                    <div className="thumbnail">
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Team;


