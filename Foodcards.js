import { CDN_URL } from "../utils/consonants";
const Foodcards = (props)=>{
    const { resData } =props;
    //const {name,imageId,cuisine,avgRating,deliveryTime,costForTwoString} = resData.info;
       const imageUrl = `${CDN_URL}${resData.info.cloudinaryImageId}`;


  return(
    <div className="res-card w-[250px] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-200" 
      >
 <img 
        className="res-img rounded-lg"
        src={imageUrl}
        alt="Restaurant"  /> 
        <div>
          <h3 className="font-bold py-2">{resData.info.name}</h3>
        <h4>{resData.info.cuisines.join(", ")}</h4>  
   
  <h5 className="icon" style={{backgroundColor:'greenyellow'}}>
     <i className="bi bi-star-fill"></i>{resData.info.avgRating} stars 
     <span style={{marginLeft:'5px',float:'right'}}> {resData.info.deliveryTime}  min </span> </h5>
  <h4>{resData.info.costForTwo} </h4>
  </div>
    </div>
  )
  };
    /* unique key should be there for not getting render all  */

// higher order component
export const withPromotedLabel = (Foodcards) => {
  return (props) => (
    <div>
<label className=" absolute text-white bg-black m-1 ml-4 rounded-lg p-2">promoted</label>
      <Foodcards {...props} />
    </div>
  );
};

export default Foodcards;  