import React from "react";
import User from "./User";

const Chat = ({
    onclick = () =>{}
}) => {
    const contact =[
        {
            name:"Navneet",
            last:"aap best web developer ho"
        },
        {
            name:"Saksham",
            last:"aap best web developer ho"
        },
        {
            name:"Ritesh",
            last:"aap best web developer ho"
        },
        {
            name:"Papa",
            last:"aap best web developer ho"
        },
        {
            name:"Mummy",
            last:"aap best web developer ho"
        },
        {
            name:"Nikhil",
            last:"aap best web developer ho"
        },
        {
            name:"Himanshu",
            last:"aap best web developer ho"
        },
        {
            name:"Pawan",
            last:"aap best web developer ho"
        },
        {
            name:"Alok",
            last:"aap best web developer ho"
        },
        {
            name:"Himesh",
            last:"aap best web developer ho"
        }
    ]
  return (
    <>
      <div className="max-h-[86.5%] w-full overflow-auto overflow-x-hidden">
        {
            contact.map(({name,last})=>{
                return(
                    <User name={name} last={last} onclick={()=>onclick()} />
                )
            })
        }
      </div>
    </>
  );
};

export default Chat;
