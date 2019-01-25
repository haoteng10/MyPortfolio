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
        
        const style = {fontWeight: 'bold'};
        
        function processStudies (inputArray){
            inputArray.processedStudies = inputArray.studies.map((value, i) => {
               if (i !== inputArray.studies.length -1){
                   return value + ", ";
               } else {
                   return value;
               }
            });
        }
        
        const processed = information.map((currentArray, i) => {
            processStudies(currentArray);
            return 1;
            // console.log(currentArray.processedStudies);
        });
        
        
        
        return (
            
            information.map((h, i) => {
                
                return <div key={i} className= {h.cssClasses}>
                         <div className={basicContainerStyle}>
                              <h2>{h.title}</h2>
                              <p>{h.content}</p>
                              <div className={"card text-primary bg-light mb-3"}>
                                      <div className={"card-body"}>
                                              <p className={"card-text"} style={style}>Areas of study includes: <span style={{color: 'deepskyblue'}}>{h.processedStudies}</span></p>
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