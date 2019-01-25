import React, {Component} from 'react';

class ListItem extends Component {
    render(){
        
        const webDevelopment = {
            title: "Web Development",
            cssClasses: "Web-Development display-grid",
            content: "I have experiences in full-stack web development.",
            special: "<strong> Areas of Study includes: HTML, CSS, Javascript, Node.Js. </strong>",
            studies: ["HTML", "CSS", "Javascript", "Node.js", "React"]
        };
        
        const minecraftDevelopment = {
            title: "Minecraft Plugins Development",
            cssClasses: "Minecraft display-grid",
            content: "I have experiences in developing simple Minecraft plugins that will have its designed functions and features by interacting with the Spigot API.",
            special: "<strong> Areas of Study includes: Java </strong>",
            studies: ["Java"]
        };
        
        const information = [webDevelopment, minecraftDevelopment];
        
        const basicContainerStyle = "container seven-five-margin";
        
        const style = {
            fontWeight: 'bold'
        };
        
        return (
            
            information.map((h, i) => {
                
                return <div className= {h.cssClasses}>
                         <div className={basicContainerStyle}>
                              <h2>{h.title}</h2>
                              <p>I have experiences in full-stack web development.</p>
                              <div class="card text-primary bg-light mb-3">
                                      <div class="card-body">
                                              <p class="card-text" style={style}>Areas of study includes: <span style={{color: 'deepskyblue'}}>{h.studies + ""}</span></p>
                                      </div>
                              </div>
                          </div>
                        </div>
             }
            )
            
            
            );
    }
}

export default ListItem;