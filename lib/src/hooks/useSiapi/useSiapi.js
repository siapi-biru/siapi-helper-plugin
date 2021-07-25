/**
 *
 * useSiapi
 *
 */

import { useContext } from 'react';
import SiapiContext from '../../contexts/SiapiContext';

const useSiapi = () => useContext(SiapiContext);

export default useSiapi;
