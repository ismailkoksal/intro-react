import {Text} from "react-native";
import React from "react";

export default class ResultPage extends React.Component {
    static navigationOptions = {
        title: 'Result Page'
    };

    render() {
        return <Text>{this.props.navigation.getParam('textInput')}</Text>;
    }
}
