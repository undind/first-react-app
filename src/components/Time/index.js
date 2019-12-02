import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import parseISO from 'date-fns/parseISO';
import ruLocale from 'date-fns/locale/ru';

const Time = ({ date }) => {
  return (
    <Fragment>
      {formatDistanceToNow(parseISO(date), { addSuffix: true, locale: ruLocale })}
    </Fragment>
  )
};

Time.propTypes = {
  date: PropTypes.string
};

export default Time;
