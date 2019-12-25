import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import React from "react";

export default class HomePage extends React.Component {
    static navigationOptions = {
        title: 'Home page',
    };

    constructor(props) {
        super(props);
        this.state = {text: ''};
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text style={styles.description}>Hello Dwjsa</Text>
                <TextInput
                    style={{height: 40}}
                    placeholder="Text input !"
                    onChangeText={text => this.setState({text})}
                    value={this.state.text}
                />
                <Button
                    style={styles.buttons}
                    title="Result page"
                    onPress={() => navigate('Result', {textInput: this.state.text})}
                />
                <Button
                    style={styles.buttons}
                    title="Visit page"
                    onPress={() => navigate('Visit')}
                />
            </View>
        );

    }
}

const styles = StyleSheet.create({
    description: {
        fontSize: 18,
        textAlign: 'center',
        color: '#656565',
        marginTop: 65,
    },
});
