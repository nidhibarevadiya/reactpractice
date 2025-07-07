import React from 'react'

const Conditionui = () => {
    return (
        <>
       <Productlist/>
        </>
    )
}

export const Product = (props) => {
    // return (
    //     <>
    //         <li>{props.name}</li>
            
    //     </>
    // )

    if(props.stock < 35){
        return <li style={{color:"red",listStyle:"none"}}>{props.name}</li>
    }else if(props.stock > 35){
        return <li style={{color:"green",listStyle:"none"}}>{props.name}</li>
    }
    else if(props.stock >= 35){
        return <li style={{color:"blue",listStyle:"none"}}>{props.name}</li>
    }
}


export const Productlist = () => {
    return (
        <>
            <ul>
                <Product name="Refrigerator" stock={10}></Product>
                <Product name="Laptop" stock={100}></Product>
                <Product name="mobile" stock={30}></Product>
                <Product name="oven" stock={50}></Product>
                <Product name="juicer" stock={90}></Product>
                <Product name="Tv" stock={35}></Product>
                <Product name="ac" stock={45}></Product>
                <Product name="culler" stock={25}></Product>
                <Product name="waching machin" stock={35}></Product>
                <Product name="blender" stock={65}></Product>
            </ul>
        </>
    )
}

export default Conditionui