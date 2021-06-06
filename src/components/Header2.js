import React from 'react'
import './all.css'
import Asbelpic from '../assets/images/asbel_pic1.png'

const Header2 = () => {
    return (
        <header className="main-header">
            <div className="Triangle-div"> <img src={Asbelpic} className="p-pic"/></div>
             <h1>Code Sample</h1>
             <p>Welcome to my project! My name is Asbel Fernandez.
                 I am seeking employment as a Web Developer. 
                 I possess an Associate Degree in Information Technology. 
                 Although I am still learning, I can build small projects like this one. 
                 This project was built using React.Js,Firebase and third party, API. 
                  I am very passionate about my field. I aspire to become a professional Web Developer. 
                  I would be thankful to find a job that would enable me to work within my area of study. 
                  I have gained knowledge through conducting research, enabling practice and motivating myself through a self taught process. 
                  My goal is to aim for more knowledge in different areas of Information Technology. 
                  I would also assist young developers and address their concerns or doubts. 
                  I am sure that with the right coaching and guidance, I can definately create more complex projects. 
                   Thanks for taking the time to go through this small project. I am open to any comments, suggestions or questions you may have. 
                   Feel free to contact me via email at asfer3031@gmail.com. 
                 </p> 
           
           
        </header>
    )
}

export default Header2

