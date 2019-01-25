import React, {Component} from 'react';

class ListItem extends Component {
    render(){
        
        const information = [webDevelopment, minecraftDevelopment];
        
        const webDevelopment = {
            title: "Web Development",
            cssClasses: "Web-Development display-grid",
            content: "I have experiences in full-stack web development.",
            special: "Areas of Study includes: HTML, CSS, Javascript, Node.Js and more."
        };
        
        const minecraftDevelopment = {
            title: "Minecraft Plugins Development",
            cssClasses: "Minecraft display-grid",
            content: "I have experiences in developing simple Minecraft plugins that will have its designed functions and features by interacting with the Spigot API."
        };
        
        const basicContainerStyle = "container seven-five-margin";
        
        return (
            information.map((c, i) => {
                
                return <div className= {c.cssClasses}>
                         <div className={basicContainerStyle}>
                              <h2>{c.title}</h2>
                              <p>I have experiences in full-stack web development.</p>
                              <div class="card text-primary bg-light mb-3">
                                      <div class="card-body">
                                              <p class="card-text"><strong>Areas of Study includes: <span class="language">HTML</span>, <span class="language">CSS</span>, <span class="language">Javascript</span>, <span class="language">Node.Js</span> and more.</strong></p>
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