import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Navbar from './Navbar';

const Show = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [idName, setIdName] = useState(id)
  const [imageName, setImageName] = useState("");
  const [timeSchedule, setTimeSchedule] = useState("");
  const [daysSchedule, setDaysSchedule] = useState();
  const [previousEpisode, setPreviousEpisode] = useState();

  const [nextEpisode, setNextEpisode] = useState();
  const getTvshow = async () => {
    const res = await fetch(`https://api.tvmaze.com/shows/${idName}`);
    const actualData = await res.json();
    setData(actualData);
    setIdName(actualData.id)
    setImageName(actualData.image.original)
    setDaysSchedule(actualData.schedule.days)
    setTimeSchedule(actualData.schedule.time)
    setPreviousEpisode(actualData._links.previousepisode.href)
    setNextEpisode(actualData._links.previousepisode.href)
  }

  useEffect(() => {
    getTvshow();
  });

  return (
    <div>
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}
      {/* main card start */}
      <div className="card mb-3 p-5 fs-5 bg-transparent" >
        <div className="row g-0 bg-transparent">
          <div className="col-md-4 col-xl-4 col-sm-12">
            <img src={imageName} className="img-fluid rounded-start h-75 object-cover" alt="tvshow" />
          </div>
          <div className="col-xxl-6  col-md-6 col-sm-12 ps-5">
            <div className="card-body text-white">
              <h1 className="card-title">{data.name}</h1><br />
              <p className="card-text" dangerouslySetInnerHTML={{ __html: data.summary }}></p><br />
              <p><b>Type:&nbsp; </b>{data.type}</p>
              <p><b>Language:&nbsp; </b>{data.language}</p>
              <p><b>Days: &nbsp;</b>{daysSchedule && daysSchedule.join(", ")} </p>
              <p><b>Time: &nbsp;</b>{timeSchedule}</p><br />
              <div className="row">
                <div className="col-xxl-3">
                  <a href={data.url}><button type="button" className="btn btn-secondary w-100">Watch on Site</button></a>
                </div>
                <div className="col-xxl-3">
                  <a href={data.officialSite}><button type="button" className="btn btn-secondary w-100">Official Site</button></a>
                </div>
                <div className="col-xxl-3">
                  <a href={previousEpisode}><button type="button" className="btn btn-light w-100">Previous Episode</button></a>
                </div>
                <div className="col-xxl-3">
                  <a href={nextEpisode}><button type="button" className="btn btn-light w-100">Next Episode</button></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main card start */}
    </div>
  )
}

export default Show;

