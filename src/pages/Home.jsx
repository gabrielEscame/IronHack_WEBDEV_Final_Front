import React, {Component, Fragment} from 'react';
// COMPONENTS IMPORT
import Logo from '../components/Logo'
import Search from '../components/searchBar'
import Card from '../components/CardProject'
import Nav from '../components/navbar'
import apiAxios from '../services/api'

class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      project: [],
      input:'',
      error: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this)
  }

  componentDidMount(){
    apiAxios.get('/project')
    .then(response => this.setState({project: response.data}, () => {
      this.state.project.length === 0 ? this.setState({error: 'Ainda não há projetos'}) : this.setState({error: ''})
    })
    )
    .catch(err => console.log(err)
    )
  }

  onChangeHandler(e){
    this.setState({
      input: e.target.value,
    })
  }

  
  render() {
    const projects = [...this.state.project].filter(el=>el.name.toLocaleLowerCase().indexOf(this.state.input)>-1);
    return(
      <Fragment>
        <Logo />
        <div className='page-home-container'>
        <Search placeholder='🔎 Buscar...' method={this.onChangeHandler}/>
        <p className="error">{this.state.error}</p>
        <Card projects={projects}/>
        <Nav />
        </div>
      </Fragment>
    );
  }
}

export default Home;



