import React, {Component} from 'react';
import Item from './Item';

class ListItem extends Component {
    
    static defaultProps = {
        information: [
            {
                title: "Web Development",
                cssClasses: "Web-Development display-grid",
                content: "I have experiences in full-stack web development. For instance, this website is designed with React.",
                studies: ["HTML", "CSS", "Javascript", "Node.js", "React"],
                processedStudies: "" 
            } ,
            {
                title: "Minecraft Plugins Development",
                cssClasses: "Minecraft display-grid",
                content: "I have experiences in developing simple Minecraft plugins that will have its designed functions and features by interacting with the Spigot API.",
                studies: ["Java"],
                processedStudies: ""
            }]
        };

    render(){
        
        function processStudies (inputObject){
            inputObject.studies.forEach((value, i) => {
               if (i !== inputObject.studies.length -1){
                    inputObject.processedStudies += value + "<span class='text-primary'>, </span>";
               } else {
                    inputObject.processedStudies += value;
               }
            });
        }
        
        const listItems = this.props.information.map((selectedObject, i) => {
            processStudies(selectedObject);
           return <Item key = {i} {...selectedObject}/> 
        })
        
        return (
            
            <div>
                {listItems}
            </div>
            
            );
    }
}


export default ListItem;