import React from 'react'
import Combobox from './Controls/Combobox'
import IconLabelButtons from './Controls/ButtonControl';
import CustomizedRadios from './Controls/RadioButton';
import CustomizedSelects from  './SelectorControl'
import './Styles/SearchConditions.css'

class SearchConditions extends React.Component {
    render(){
        return (
                <div className="SearchCondition-Panel">
                    <div className="Panel-title">
                        <h1>##Search-Condition##</h1>
                    </div>
                

                    <div className="Condition-items">
                        <Combobox/>
                        <CustomizedRadios/>
                        <CustomizedSelects/>
                        <IconLabelButtons/>
                    </div>
                </div>
            );
        }
    }
    
    export default SearchConditions