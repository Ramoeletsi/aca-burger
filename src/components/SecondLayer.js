import React, {useState} from 'react';

function Second(){

    const [second_layer, setSecond_layer] = useState(0)
    
    const SecondLayer =[
        {
          name: 'Meat',
        },
        {
          name: 'Cheese',
        },
        {
          name: 'Bacon',
        },
        {
            name: 'Smoked Beef'
        }
    ];
    
    const SecondLayerChange = () =>{
        if(second_layer< SecondLayer.length -1)
            setSecond_layer(second_layer +1)
        else{
            alert("Can't add new item")
        }
    };
    const mystyle = {
      background: 'rgba(99, 19, 19, 0.644)',
      width: '30%',
      padding: "8px",
      color: "white",
      border:"none",
      borderRadius: "3px",
      justifyContent:"center",
      textAlign: "center"  
    };
    
    return (
        <button style={mystyle} onClick={SecondLayerChange}>{SecondLayer[second_layer].name}</button>
    )
      
}
export default Second;