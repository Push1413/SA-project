import "./SinglePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { useLoaderData } from "react-router-dom";
import DOMPurify from "dompurify";

export default function SinglePage() {
  const singlePostData = useLoaderData();

  return (
    <div className="singlePage">
    <div className="details">
      <div className="wrapper">
      <Slider images={singlePostData.postDetail.images} />
        <div className="info">
          <div className="top">
            <div className="post">
              <h1>{singlePostData.title}</h1>
              <div className="address">
                <img src="/pin.png" alt="" />
                <span>{singlePostData.address}</span>
              </div>
              <div className="price">$ {singlePostData.price}</div>
            </div>
          </div>
          <div
              className="bottom"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(singlePostData.postDetail.desc),
              }}
            ></div>
        </div>
        
      </div>
    </div>
    <div className="features">
      <div className="wrapper">
        <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>{singlePostData.postDetail.utilities}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>{singlePostData.postDetail.pet}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>{singlePostData.postDetail.income}</p>
            </div>
          </div>
        </div>
        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>{singlePostData.postDetail.size} sqft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span>{singlePostData.bedroom} beds</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span>{singlePostData.bathroom} bathroom</span>
          </div>
        </div>
        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
          <div className="feature">
            <img src="/school.png" alt="" />
            <div className="featureText">
              <span>School</span>
              <p>{singlePostData.postDetail.school}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>{singlePostData.postDetail.bus}</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Restaurant</span>
              <p>{singlePostData.postDetail.restaurant}</p>
            </div>
          </div>
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map items={[singlePostData]} />
        </div>
        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a Message
          </button>
          <button>
            <img src="/save.png" alt="" />
            Save the Place
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}
