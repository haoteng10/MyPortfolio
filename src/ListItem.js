import React, {Component} from 'react';
import Parser from 'html-react-parser';

class ListItem extends Component {
    render(){
        
        var webDevelopment = {
            title: "Web Development",
            cssClasses: "Web-Development display-grid",
            content: "I have experiences in full-stack web development.",
            special: "<strong> Areas of Study includes: HTML, CSS, Javascript, Node.Js. </strong>",
            studies: ["HTML", "CSS", "Javascript", "Node.js", "React"],
            // studies: ["HTML sfdkjsldfsdfkl", " sdfsdf CSS", "Javascript", "Node.js", "React"],
            processedStudies: ""
        };
        
        const minecraftDevelopment = {
            title: "Minecraft Plugins Development",
            cssClasses: "Minecraft display-grid",
            content: "I have experiences in developing simple Minecraft plugins that will have its designed functions and features by interacting with the Spigot API.",
            special: "<strong> Areas of Study includes: Java </strong>",
            studies: ["Java"],
            processedStudies: ""
        };
        
        webDevelopment.studies = ["HTML", "CSS", "Javascript", "Node.js", "React"];
        webDevelopment.processedStudies = "";
        
        const information = [webDevelopment, minecraftDevelopment];
        
        const basicContainerStyle = "container seven-five-margin";
        
        const style = {fontWeight: 'bold'};
        
        function processStudies (inputArray){
            inputArray.studies.forEach((value, i) => {
               if (i !== inputArray.studies.length -1){
                    inputArray.processedStudies += value + "<span class='text-primary'>, </span>";
               } else {
                   return inputArray.processedStudies += value;
               }
            });
        }
        
        information.forEach((currentArray, i) => {
            processStudies(currentArray);
            // console.log(currentArray.processedStudies);
        });
        
        // webDevelopment.processedStudies = "<strong>Hi</strong>";
        
        return (
            
            information.map((h, i) => {
                
                return <div key={i*2} className= {h.cssClasses}>
                         <div className={basicContainerStyle}>
                              <h2>{h.title}</h2>
                              <p>{h.content}</p>
                              <div className={"card text-primary bg-light mb-3"}>
                                      <div className={"card-body"}>
                                              <p className={"card-text"} style={style}>Areas of study includes: <span style={{color: "deepskyblue"}}>{Parser(h.processedStudies)}</span></p>
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