import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/usefetch';
import { db } from '../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
function Home() {
  const [homeData, setHomeData] = useState([]);
  // const { data, isPending, error } = useFetch('http://localhost:3000/home');

  useEffect(() => {
    getHomeData();
  }, []);
  const getHomeData = async () => {
    const homeCollectionRef = collection(db, 'home');
    const fetchHomeData = await getDocs(homeCollectionRef);
    setHomeData(
      fetchHomeData.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  return (
    <div className="Home-page-container">
      {console.log(homeData)}
      {homeData.map((data) => {
        return (
          <div key={data.id}>
            <div className="hero-container bg-gray-50 h-60 flex w-full ">
              <div className="hero-left2 flex flex-col p-8 content-between  h-full  w-2/3 ">
                <div className="hl-heading text-3xl font-medium ">
                  {data.heroheading}
                </div>
                <p className="hl-text font-small  py-3 ">
                  {data.heroparagraph.slice(0, 150) + '...'}
                </p>
              </div>
              <div className="hero-right bg-red-200 w-1/3 text-center">
                image
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
