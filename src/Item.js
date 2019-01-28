import React, {Component} from 'react';
import Parser from 'html-react-parser';

class Item extends Component {
    
    render(){
        
        const basicContainerStyle = "container seven-five-margin";
        const style = {fontWeight: 'bold'};
                
        const passedObject = this.props;
        
        return (
            
            <div className= {passedObject.cssClasses}>
                <div className={basicContainerStyle}>
                    <h2>{passedObject.title}</h2>
                        <p>{passedObject.content}</p>
                        <div className={"card text-primary bg-light mb-3"}>
                            <div className={"card-body"}>
                                <p className={"card-text"} style={style}>Areas of study includes: <span style={{color: "deepskyblue"}}>{Parser(passedObject.processedStudies)}</span></p>
                            </div>
                        </div>
                </div>
            </div>
          
            );
    }
}

export default Item;