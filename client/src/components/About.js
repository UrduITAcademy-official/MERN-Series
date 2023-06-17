import React, { useEffect,useState  } from "react";
import { useNavigate } from "react-router-dom";
const About = () => {

  const [userData, setUserData] = useState('');
  const history = useNavigate();
  const callAboutPage = async () => {
    try {
      // Get the cookie value from the browser
      const cookie = document.cookie
        .split(";")
        .find((cookie) => cookie.trim().startsWith("jwtauth"));
      const cookieValue = cookie ? cookie.split("=")[1] : null;
      // Send a GET request to the backend with the cookie as a header
      const response = await fetch("/about", {
        headers: {
          Cookie: `jwtauth=${cookieValue}`,
        },
      });
      const data = await response.json();
      if (data.error) {
        console.log("hi from if");
        history("/login");
      } else {
        console.log(data);
        console.log("hi from elase");
        setUserData(data);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // This function will be called after the component mounts
    // and every time the data state changes
    callAboutPage();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>About Us</h1>
      <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '400px', width: '100%', marginTop: '20px' }}>
        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>Name:{userData.name}</label>
        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>Email:{userData.email}</label>    
        <label style={{ marginBottom: '5px', fontWeight: 'bold' }}>Work:{userData.work}</label>
      </div>
    </div>
  );
};

export default About;
