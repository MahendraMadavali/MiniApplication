import React from "react";

const SingleInventory = ({ inventoryItemDetails }) => {
  console.log(">>>>>>inventoryItemDetails", inventoryItemDetails);
  const array1 = inventoryItemDetails.slice(
    0,
    inventoryItemDetails.length / 2 + 1
  );
  const array2 = inventoryItemDetails.slice(
    inventoryItemDetails.length / 2,
    inventoryItemDetails.length
  );
  return (
    <div className="footer">
        {inventoryItemDetails.map((each)=>(
           <div className="" key={each.id}>
           <h4>{each.name}</h4>
           {each.items.map((i)=>(
            <div key={i.id} style={{padding: "4px"}}>
                <h5>{i.displayName}</h5>
              
</div>
           ))}
         </div>
        ))}
      
    </div>
  );
};

export default SingleInventory;
