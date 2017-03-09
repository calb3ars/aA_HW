import React from 'react';

class GiphysIndex extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(<ul>
      {this.props.giphys.map( (giphy, idx) => {
        return (
          <li key={idx}>
            <img src={giphy.images.original.url} />
          </li>
        );
      }
      )
    }
    </ul>

  );}
}

export default GiphysIndex;
