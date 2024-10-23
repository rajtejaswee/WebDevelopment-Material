import React from "react";


class FilmItems extends React.Component {
    render() {
        return (
            <li>
              <a href={this.props.url}>{this.props.url}</a>
            </li>
        )
    }
}

export default FilmItems;