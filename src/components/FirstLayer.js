import React, {useState} from 'react';

function First(){

    const [first_layer, setFirst_layer] = useState(0);

    const FirstLayer =[
        {
          name: 'Tomato',
        },
        {
          name: 'Onion',
        },
        {
          name: 'Cucumber',
        },
    ];

    const FirstLayerChange = () =>{
        if(first_layer < FirstLayer.length -1)
            setFirst_layer(first_layer +1)
        else{
            alert("Can't add new item")
        }
    };
    const mystyle = {
        background: 'red',
        width: '30%',
        padding: "7px",
        color: "white",
        border:"none",
        justifyContent:"center",
        borderRadius: "3px",
        textAlign: "center"  
      };

    return (
        <button style={mystyle} onClick={FirstLayerChange}>{FirstLayer[first_layer].name}</button>
    )
} 
export default First;