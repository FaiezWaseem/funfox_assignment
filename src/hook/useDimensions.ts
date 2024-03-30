'use client';
import React from 'react';

const useDimesions = ()=>{
    const [width , setWidth] = React.useState(0);
    const [height , setHeigth] = React.useState(0);
    const [isMobile , setMobile] = React.useState(false);
    const [isTablet , setTablet] = React.useState(false);

    React.useEffect(()=>{
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
        window.addEventListener('resize' , ()=>{
            setWidth(window.innerWidth)
            setHeigth(window.innerHeight)
         })
    },[])
    
    React.useEffect(()=>{
         setMobile(width <= 468)
         setTablet(width <= 768 && width > 468)
    },[width])

    return [width , height , isMobile , isTablet];
}


interface BreakPoint{
    base : number,
    md? : number,
    lg? : number,
    xl? : number,
}

const useBreakpoint = (obj : BreakPoint) =>{
    const [width , setWidth] = React.useState(0);

    const [value , setValue] = React.useState(obj['base']);

    React.useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener('resize' , ()=>{
            setWidth(window.innerWidth)
         })
    },[])
    
    React.useEffect(()=>{
        if(width <= 468 && obj['base']){
            setValue(obj['base'])
        }
        if(width <= 768 && width > 468 && obj['md']){
            setValue(obj['md'])
        }
        if(width <= 1824 && width > 768 && obj['lg']){
            setValue(obj['lg'])
        }
        if(width > 1824 && obj['xl']){
            setValue(obj['xl'])
        }
    },[width])

    return value
}
export {
    useBreakpoint,
    useDimesions
}