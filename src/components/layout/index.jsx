import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default ({ children, ...rest }) => {
    const { pathname } = useLocation();

}