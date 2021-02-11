import React from 'react';

import classes from './AuthorRemark.module.css';

const AuthorRemark = ({ remark, author }) => {
  return (
    <div>
      <p className={classes.AuthorRemark}>
        <strong>u/{author}: </strong>{remark}
      </p>
    </div>
  );
}

export default AuthorRemark;