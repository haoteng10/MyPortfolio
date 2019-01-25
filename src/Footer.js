import React, {Component} from 'react';

class Footer extends Component {
    render(){
        return (
            <footer>
                <div className= {"container"}>
                    <div className={"footer-icons d-flex justify-content-end"}>
    
                        <div className={"p-2 flex-grow-1 made-by-me"}>
                            <p>This website is designed and made by Hao Teng.</p>
                        </div>
        
                        <div className={"p-2"}>
                            <a href="https://www.github.com/haoteng10"><i className={"fab fa-github"}></i></a>
                        </div>
    
                        <div className={"p-2"}>
                            <a href="mailto:contact@haoteng.xyz"><i className={"fas fa-at"}></i></a>
                        </div>
                    </div>
                </div>
        </footer>
            );
    }
}

export default Footer;