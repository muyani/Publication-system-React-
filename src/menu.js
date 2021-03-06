import React,{Component} from 'react';
import {Menu,Dropdown,Input } from 'semantic-ui-react';



class Menu1 extends Component{
    state= {activeItem:'Home'};
    handleItemClick=(e,{name}) =>this.setState({activeItem:name});
    render(){
     const activeItem=this.state;
     const options=[{key:1,text:"Biology", value:"Biology"},
     {key:2,text:"Physics",value:"physics"},
     {key:3,text:"mathematics",value:"mathematics"}
    ]

      return (  
              <Menu secondary>
        <Menu.Item name='Publication Portal' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu compact>
            <Dropdown text="Publications" options={options} simple item>
                
                </Dropdown>
                </Menu>
        <Menu.Item name='About us' active={activeItem === 'About'} onClick={this.handleItemClick} />
        <Menu.Item name='Contact Us' active={activeItem === 'Contact'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
      )
    }
}
    export default Menu1;
    

