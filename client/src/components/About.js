import React, { useEffect } from "react";

const About = () => {
    const callAboutPage = async () => {
        try {
            // Get the cookie value from the browser
            const cookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('jwtauth'));
            const cookieValue = cookie ? cookie.split('=')[1] : null;
        
            // Send a GET request to the backend with the cookie as a header
            const response = await fetch('/about', {
              headers: {
                'Cookie': `jwtauth=${cookieValue}`
              }
            });
            const data = await response.json();
            console.log(data);
          } catch (error) {
            console.error(error);
          }


    }
      
      
  useEffect(() => {
    // This function will be called after the component mounts
    // and every time the data state changes
   callAboutPage();
  }, []);

  return (
    <>
      <h1>Welcome from About Page </h1>
    </>
  );
};

export default About;
