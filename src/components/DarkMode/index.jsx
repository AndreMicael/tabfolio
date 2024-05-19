import {useState} from 'react';

const DarkMode = () => {



    const [toggleTheme,setToggleTheme] = useState(false);

    const handleToggle = () => {

        setToggleTheme(!toggleTheme);
        if(toggleTheme){
            document.querySelector("html").setAttribute('data-theme', 'light')
        }else{
            document.querySelector("html").setAttribute('data-theme', 'dark')
        }
      

    }

  

  return (
    <div> <button onClick={handleToggle} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'> Dark Theme</button></div>
  )
}

export default DarkMode