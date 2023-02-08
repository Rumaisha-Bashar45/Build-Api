import React, { useEffect, useState } from 'react';

const Text = (i) => {
    const [data, setdata] = useState(null)
    useEffect(() => {
      
    
fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log)
.then(res=>setdata(res))
;
      
    }, [])
    useEffect(() => {
      console.log("found",data)
    }, [data])
    
    
    return (
        <div>
           hola  {i.name} 
           <p>

            //problem ta hocche nicher code ta  uncomment korle ora API er property read korte partesi na
            {/* <ul>
                <li>{data.products[0].title}</li>
                <li>{data.products[4].id}</li>
                <li>{data.total}</li>
            </ul> */}
           </p>

        </div>
    );
}

export default Text;
