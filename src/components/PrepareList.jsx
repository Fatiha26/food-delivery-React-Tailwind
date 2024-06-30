import React from 'react';
import chef from "../assets/images/chef.jpg";

const PrepareList = () => {
  return (
    <div>
       <h1>You prepare the food, we handle the rest</h1>
       <div>
          <img src={chef} alt="" />
          <div>
             <h3>List your restaurant or shop on foodpanda</h3>
             <p>Would you like millions of new customers to enjoy your amazing food and groceries? So would we!
                <br/>It&apos;s simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!
                <br/>Interested? Let&apos;s start our partnership today!</p>
             <button>Get Started</button>

          </div>
       </div>
      
    </div>
  )
}

export default PrepareList
