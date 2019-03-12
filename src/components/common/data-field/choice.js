// Copyright (C) Sukoon - All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential. Authored by Karim Agha <karim.dev@gmail.com>

import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';

/**
 * This component is used in data collection pages where users are asked to fill lots of fields.
 * This group of data fields lets users chose among a group of possible values predefined by the 
 * component. This includes things like radio, checkboxes, dropdowns, etc.
 */
export default class extends React.Component {

  static propTypes = {
    /**
     * The list of possible values the user can chose from.
     */
    options: PropTypes.array.isRequired,

    /**
     * The text that is presented to the user before any data is entered.
     */
    placeholderText: PropTypes.string.isRequired
  }
}
