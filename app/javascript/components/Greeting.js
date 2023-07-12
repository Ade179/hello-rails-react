import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getGreetings from '../redux/messageThunk';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting } = useSelector((store) => store.message);
  console.log(greeting)

  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  return <h2>{greeting || "Loading ..."}</h2>;
}

export default Greeting;
