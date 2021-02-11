import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },
        {
          title: "womens",
          imageUrl:
            // "https://i.pinimg.com/474x/6c/f4/6b/6cf46b2af7856e4e8f558e17b9685b4a.jpg",
            "https://i.pinimg.com/originals/17/30/71/1730715ff974e8745273c3a7106acf76.jpg",
          size: "large",
          id: 4,
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem title={title} key={id} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
