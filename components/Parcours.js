import {Image, StyleSheet, Text, View} from "react-native";
import {Card} from "react-native-elements"
import React, {Component} from "react";


interface IParcours {
    titre: string;
    description: string;
}

export default class Parcours extends Component<IParcours> {
    render() {
        return (
            <Card title={this.props.titre}>

            </Card>
        );
    }
}

const styles = StyleSheet.create({
    parcours: {
        maxWidth: 300
    },
    images: {

    },
    titre: {

    },
    description: {

    }
});
