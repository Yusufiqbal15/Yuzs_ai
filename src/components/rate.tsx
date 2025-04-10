'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'



  const Rate= () => {
    const [count, setCount] = useState(1);
  
    useEffect(() => {
      const max = 50;
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= max) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(interval);
    }, []);


    const [counts, setCounts] = useState(1);
  
    useEffect(() => {
      const max = 1000;
      const interval = setInterval(() => {
        setCounts((prev) => {
          if (prev >= max) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 1);
      return () => clearInterval(interval);
    }, []);


    const [perst, setPerst] = useState(1);
  
    useEffect(() => {
      const max = 95;
      const interval = setInterval(() => {
        setPerst((prev) => {
          if (prev >= max) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 100);
      return () => clearInterval(interval);
    }, []);




  return (
    <div className='mx-5 my-6 '>
      <Card className='flex justify-items-center bg-muted/50'>
        <CardContent className='flex'>
          <div className="rate">
            <h1 className=' text-3xl'> {count}+</h1>
            <p>Industries Covered</p>
            </div>
            <div className="rate">
            <h1 className=' text-3xl'>{counts}+</h1>
            <p>Interview Question</p>
            </div>
            <div className="rate">
            <h1 className=' text-3xl'> {perst}%</h1>
            <p>Success Rate</p>
            </div>
            <div className="rate">
            <h1 className=' text-3xl'> 24/7</h1>
            <p>AI Support</p>
            </div>
        </CardContent>
       
      </Card>
      
    </div>

  )
}

export default Rate
