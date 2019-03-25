import React, { Component } from 'react';
import MiniPaletteArea from '../MiniPaletteArea/MiniPaletteArea';
import { fetchProjectPalettes } from '../../Thunks/fetchProjectPalettes';
import { connect } from 'react-redux';

export class Project extends Component{
  constructor() {
    super();
    this.state = {
      expanded: false
    }
  }
  
  fetchPalettes = async () => {
    this.setState({expanded: !this.state.expanded})
    if(!this.props.palettes.length){
      await this.props.fetchProjectPalettes(this.props.id)
    }
  }

  render() {
    const {name, palettes} = this.props
    return(
      <div>
        <div onClick={this.fetchPalettes}>
          <p>{name}</p>
          <i className="fas fa-pencil-alt"></i>
          <i className="far fa-trash-alt"></i>
        </div>
        {
          this.state.expanded &&
          <MiniPaletteArea projectPalettes={palettes}/>
        }
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchProjectPalettes: (id) => dispatch(fetchProjectPalettes(id))
})

export default connect(null, mapDispatchToProps)(Project);
