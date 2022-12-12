import React from 'react';
import classes from './Styles/CssModules.module.scss';

export const TypescriptTest = () => {
    return(
        <div className={classes.container}>
            <p className={classes.title}>CSS Modulesです</p>
            <button className={classes.button}>ボタン</button>
        </div>
    );
};


