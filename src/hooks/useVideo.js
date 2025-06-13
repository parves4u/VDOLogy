import { useEffect, useState } from 'react';

const useVideo = () => {

    const [video, setVideo]= useState([])
    const [loading, setLoading]= useState(true)
   
//        useEffect(()=>{
//            fetch("video.json")
//            .then(res=> res.json())
//            .then(data=>{
//             console.log(data)
//                setVideo(data)
//                setLoading(false)
//            })
//        },[])
//    return [video, loading]
    
};

export default useVideo;