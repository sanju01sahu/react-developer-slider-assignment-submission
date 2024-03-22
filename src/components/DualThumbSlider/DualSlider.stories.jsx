import DualSlider from "./DualSlider";

export default {
    title:"Components/DualSlider",
    component: DualSlider,
    parameters:{
        layout: "centered",

    },
    tags:["autodocs"],

};



export const Primary = {
    args:{
        min:0,
        max:100,
        step:10,
        displayValue:true,
    }
}

export const Secondary = {
    args:{
        min:0,
        max:100,
        step:10,
        displayValue:false,
    }
}