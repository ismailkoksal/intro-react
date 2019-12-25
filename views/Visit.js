import {FlatList, View} from "react-native";
import React, {Component} from "react";
import Parcours from "../components/Parcours";

export default class VisitPage extends Component {
    static navigationOptions = {
        title: 'Visit page'
    };

    constructor(props) {
        super(props);
        this.state = {isLoading: true}
    }

    componentDidMount() {
        this.getParcoursFromApiAsync().then(parcours => this.setState({parcours: parcours}));
    }

    getParcoursFromApiAsync(): Promise<any> {
        return fetch('http://crowdsensing.univ-lr.fr/vpbo/publications/poitiers/121119152128/json/parcours_Fr.json')
            .then(response => response.json())
            .then(responseJson => responseJson.parcours)
            .catch(error => console.error(error))
    }

    render() {
        return (
            <FlatList
                data={this.state.parcours}
                renderItem={({item}) => <View><Parcours titre={item.titre} description={item.description}/></View>}
                keyExtractor={item => item.id}
            />
        );
    }
}
