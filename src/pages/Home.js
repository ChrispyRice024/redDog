import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div id="banner-a" className="banner">
          <div>
            <img
              align="left"
              src="./assets/small_black_kitchen.jpg"
              alt="Chair"
              className="example-img"
              id='banner-a-img'
            />
          </div>
          <div className="banner">
            <p>
              Scott Lockwood has been working with wood since he was a little
              baby boy. He learned with his father and has honed his craft for
              several years.
            </p>
          </div>
        </div>
        <div>
          <div id="banner-b" className="banner">
            <img
              align="right"
              src="./assets/bench.jpeg"
              alt="Bench"
              className="example-img"
            />
            <p>
              At REDDOG, we believe that evey piece of wood has a story to tell.
              thats why we strive to let the natural beauty of the wood shine
              thorough with every piece we create. we use traditional
              woodworking tecniques and hand toos to create furniture that is
              not only beautiful, but built to last.
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <div id="banner-c" className="banner">
            <img
              align="left"
              src="./assets/laundry_room.jpg"
              alt="Trim"
              className="example-img"
            />
            <p>
              We like to take a hands on approach to wood working. we carfully
              select each piece of wood for its unique grain pattern and
              character, and we use a variety of tools and tecniques to bring
              out the best in each piece. from hand-cut dovetail joints to
              delecate carvings, our furniture is a testament to the artistry
              and skill of trditional woodworking.
            </p>
          </div>
        </div>
        <div>
          <div id="banner-d" className="banner">
            <img
              src="./assets/weave.jpeg"
              alt="Weave"
              align="right"
              className="example-img"
            />
            <p>
              From rustic farmhouse tables to elegant carved chairs each piece
              is a uniqu work of art that will stand the test of time. we use
              only the highest quality materials and traditional woodworking
              tecniques to ensure that each piece is not only beautiful, but
              built to last.
            </p>
          </div>
        </div>
        <div>
          <div id="banner-e" className="banner">
            <img
              src="./assets/tools.jpeg"
              alt="Tools"
              align="left"
              className="example-img"
            />
            <p>
              We believe that woodworking is not just a craft, but a way of
              life. we are commited to preserving the traditions of traditional
              woodworking while also pushing the boundries of whats possible
              with this amazing material. our mission is to create beautiful
              furniture that is not only functional, but a joy to behold.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
