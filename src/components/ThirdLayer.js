import React, {useState} from 'react';

function Third(){

    const [third_layer, setThird_layer] = useState(0)
    
    const ThirdLayer =[
        {
          name: 'Lettuce',
        },
        {
          name: 'Salad',
        },
      ];

    const ThirdLayerChange = () =>{
        if(third_layer < ThirdLayer.length -1)
            setThird_layer(third_layer +1)
        else{
            alert("Can't add new item")
        }
    }
    const mystyle = {
        background: 'green',
        width: '30%',
        padding: "7px",
        color: "white",
        justifyContent:"center",
        border:"none",
        borderRadius: "3px",
        textAlign: "center"  
      };
    return (
        <button style={mystyle} onClick={ThirdLayerChange}>{ThirdLayer[third_layer].name}</button>
    )
}

export default Third;