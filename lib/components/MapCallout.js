import React, { PropTypes } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
} from 'react-native';
import decorateMapComponent, {
  SUPPORTED,
  USES_DEFAULT_IMPLEMENTATION,
} from './decorateMapComponent';

const VIEW_PROPS = ViewPropTypes || View.propTypes;

const propTypes = {
  ...VIEW_PROPS,
  tooltip: PropTypes.bool,
  onPress: PropTypes.func,
};

const defaultProps = {
  tooltip: false,
};

class MapCallout extends React.Component {
  render() {
    const AIRMapCallout = this.getAirComponent();
    return <AIRMapCallout {...this.props} style={[styles.callout, this.props.style]} />;
  }
}

MapCallout.propTypes = propTypes;
MapCallout.defaultProps = defaultProps;

const styles = StyleSheet.create({
  callout: {
    position: 'absolute',
  },
});

module.exports = decorateMapComponent(MapCallout, {
  componentType: 'Callout',
  providers: {
    google: {
      ios: SUPPORTED,
      android: USES_DEFAULT_IMPLEMENTATION,
    },
  },
});
