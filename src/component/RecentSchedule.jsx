import React, { useEffect, useState } from 'react';
// import { NavLink } from 'react-router-dom';


import { TaggedContentCard } from 'react-ui-cards';


import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const RecentSchedule = () => {
  const [data, setData] = useState([]);
  // const[imageName,setImageName] =useState("");
  const getTvshow = async () => {
    const res = await fetch('https://api.tvmaze.com/schedule');
    const actualData = await res.json();
    console.log(actualData);
    setData(actualData);
    // setImageName(actualData.show.image.original)
  }

  useEffect(() => {
    getTvshow();
  }, []);

  return (
    <div>

      {/* main card start */}
      <div >

        <div className='m-3'>

          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode
            className=""
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024
                },
                items: 4,
                partialVisibilityGutter: 50
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
              }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {
              data.map((curElem) => {
                return (


                  <div className='m-1'>
                    <TaggedContentCard
                      href={`/show/${curElem.show.id}`}
                      thumbnail={curElem.show.image != null ?
                        curElem.show.image.original
                        : ""
                      }
                      title={curElem.show.name}
                      description=''
                      tags={[

                      ]}
                    > </TaggedContentCard>
                  </div>
                );
              })
            }

          </Carousel>;




        </div>
      </div>



      {/* main card end */}
    </div>
  )
}

export default RecentSchedule






