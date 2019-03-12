import React from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
/**
 * This component displays a car info.
 * 
 */
class CarCard extends React.Component {
    render() {
        return (
            <View style={[styles.boxContainer, { backgroundColor: (this.props.selected == this.props.info.model_id) ? '#d5d5d5' : '#fff' }]}>
                <TouchableOpacity onPress={this.props.onSelectCar}
                    activeOpacity={0.9}>
                    <View style={[styles.detailsRow]}>
                        <View>
                            <Text style={[styles.primaryText]}>Maker: {this.props.info.model_make_id}</Text>
                            <Text style={[styles.secondaryText]}>Model: {this.props.info.model_name}</Text>
                            <Text style={[styles.secondaryText]}>Year: {this.props.info.model_year}</Text>
                            <Text style={[styles.secondaryText]}>Body: {this.props.info.model_body}</Text>
                            <Text style={[styles.secondaryText]}>Engine: {this.props.info.model_engine_cc} cc</Text>
                            <Text style={[styles.secondaryText]}>Doors: {this.props.info.model_doors}</Text>
                            <Text style={[styles.secondaryText]}>Country: {this.props.info.make_country}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>);
    }
}

const styles = {
    boxContainer: {
        backgroundColor: '#ffffff',
        shadowOffset: { width: 0, height: 1.5, },
        shadowColor: '#222222',
        shadowOpacity: 0.2,
        shadowRadius: 6,
        minHeight: 200,
        marginTop: 16,
        marginLeft: 1,
        marginRight: 1,
        marginBottom: 0,
        borderRadius: 5
    },

    detailsRow: {
        flexDirection: 'row',
    },
    primaryText: {
        color: '#333333',
        fontSize: 19,

        marginTop: 7,
        marginLeft: 16,
        marginRight: 16,
    },
    secondaryText: {
        color: '#333333',
        fontSize: 13,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 5,
    },
    descriptionText: {
        color: '#333333',
        fontSize: 15,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 7,
        lineHeight: 20,
        maxHeight: 70,
    },
};
export default CarCard;
