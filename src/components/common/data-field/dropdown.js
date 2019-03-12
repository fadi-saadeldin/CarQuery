import React from 'react';
import PropTypes from 'prop-types';
import ChoiceField from './choice';
import { StyleSheet } from 'react-native';
import { Dropdown } from '../material-dropdown';

/**
 * This component is used in data collection pages where users are asked to fill lots of fields.
 * This group of data fields lets users chose among a group of possible values predefined by the 
 * component. This includes things like radio, checkboxes, dropdowns, etc.
 */
export default class extends ChoiceField {

  static propTypes = {
    baseColor: PropTypes.string.isRequired,
    filledValueColor: PropTypes.string.isRequired
  }
  
  render() {
    return (
      <Dropdown 
        itemCount={6}
        baseColor={this.props.baseColor}
        filledValueColor={this.props.filledValueColor}
        itemPadding={20}
        label={this.props.placeholderText}
        data={this.props.options.map(option => ({
          label: option, 
          value: option
        }))}
        {...this.props}
      />
    );
  }
}